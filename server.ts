import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";

// Setup __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Load and initialize Firebase on the backend from local configuration file
const firebaseConfigPath = path.join(__dirname, "firebase-applet-config.json");
let firebaseDb: any = null;

if (fs.existsSync(firebaseConfigPath)) {
  try {
    const firebaseConfig = JSON.parse(fs.readFileSync(firebaseConfigPath, "utf8"));
    const fbApp = initializeApp(firebaseConfig);
    firebaseDb = getFirestore(fbApp, firebaseConfig.firestoreDatabaseId);
    console.log("Firebase initialized successfully on backend for persistent storage.");
  } catch (error) {
    console.error("Failed to initialize Firebase on backend:", error);
  }
}


// In-memory data persistence in case Firebase setup hasn't run yet or is in progress
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  serviceRequired: string;
  message: string;
  createdAt: string;
  status: "new" | "contacted" | "completed";
}

interface Subscriber {
  email: string;
  subscribedAt: string;
}

const leads: Lead[] = [];
const subscribers: Subscriber[] = [];

// Lazy-loaded Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// ----------------------------------------------------
// API ROUTES
// ----------------------------------------------------

// 1. Health check & Config status
app.get("/api/health", (req, res) => {
  const hasGemini = !!getGeminiClient();
  let hasFirebase = false;
  
  try {
    if (fs.existsSync(path.join(__dirname, "firebase-applet-config.json"))) {
      hasFirebase = true;
    }
  } catch (e) {
    // ignore
  }

  res.json({
    status: "ok",
    hasGemini,
    hasFirebase,
    timestamp: new Date().toISOString(),
  });
});

// 2. Submit a lead (Contact page or consultation CTA)
app.post("/api/leads", async (req, res) => {
  const { name, email, phone, businessName, serviceRequired, message } = req.body;

  if (!name || !email || !phone || !serviceRequired) {
    res.status(400).json({ error: "Missing required fields (Name, Email, Phone, Service)" });
    return;
  }

  const generatedId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const displayMessage = message || "Interested in learning more.";
  const finalMessage = businessName ? `[Company: ${businessName}] ${displayMessage}` : displayMessage;

  const newLead: Lead = {
    id: generatedId,
    name,
    email,
    phone,
    businessName: businessName || "",
    serviceRequired,
    message: finalMessage,
    createdAt: new Date().toISOString(),
    status: "new",
  };

  // Push to local as memory fallback
  leads.unshift(newLead);

  // Write to Firebase if configured
  if (firebaseDb) {
    try {
      await setDoc(doc(firebaseDb, "leads", generatedId), {
        id: generatedId,
        name,
        email,
        phone,
        serviceRequired,
        message: finalMessage,
        createdAt: serverTimestamp(),
        status: "new"
      });
      console.log("Registered lead successfully in Cloud Firestore:", generatedId);
    } catch (error) {
      console.error("Firestore Lead registration exception:", error);
    }
  }

  res.json({
    success: true,
    message: "Thank you! Your inquiry has been registered successfully. We will contact you soon.",
    leadId: generatedId,
  });
});

// 3. Admin view for leads (with simple demonstration of entries)
app.get("/api/leads", async (req, res) => {
  if (firebaseDb) {
    try {
      const qSnapshot = await getDocs(collection(firebaseDb, "leads"));
      const fsLeads: Lead[] = [];
      qSnapshot.forEach((docRef) => {
        const data = docRef.data();
        fsLeads.push({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          businessName: "",
          serviceRequired: data.serviceRequired,
          message: data.message,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
          status: data.status,
        });
      });
      res.json({ leads: fsLeads });
      return;
    } catch (error) {
      console.error("Firestore Admin query leads failed:", error);
    }
  }
  res.json({ leads });
});

// 4. Newsletter Subscription
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(400).json({ error: "Please provide a valid email address." });
    return;
  }

  const normalizedEmail = email.toLowerCase().trim();

  // Check memory list first
  const existsInMemory = subscribers.some((sub) => sub.email.toLowerCase() === normalizedEmail);
  if (existsInMemory) {
    res.json({ success: true, message: "You are already subscribed to our future-tech insights." });
    return;
  }

  // Check Firestore list as well if configured
  if (firebaseDb) {
    try {
      const q = query(collection(firebaseDb, "subscribers"), where("email", "==", normalizedEmail));
      const qSnapshot = await getDocs(q);
      if (!qSnapshot.empty) {
        res.json({ success: true, message: "You are already subscribed to our future-tech insights." });
        return;
      }

      const subscriberId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await setDoc(doc(firebaseDb, "subscribers", subscriberId), {
        email: normalizedEmail,
        subscribedAt: serverTimestamp()
      });
      console.log("Newsletter subscriber successfully saved into Cloud Firestore:", normalizedEmail);
    } catch (error) {
      console.error("Failed to query or store Subscriber in Firestore:", error);
    }
  }

  subscribers.push({
    email: normalizedEmail,
    subscribedAt: new Date().toISOString(),
  });

  res.json({
    success: true,
    message: "Success! You have subscribed to WOWX Technologies updates.",
  });
});

// 5. WOWX AI Digital Consultant Endpoint
app.post("/api/consult", async (req, res) => {
  const { message, chatHistory } = req.body;

  if (!message) {
    res.status(400).json({ error: "Message content cannot be empty." });
    return;
  }

  const ai = getGeminiClient();
  if (!ai) {
    res.json({
      reply: "Hello! I am WOWX Bot, your digital interactive assistant. It seems my Gemini API Key is waiting to be configured in your environment, but do not worry! WOWX Technologies is fully ready to craft elite websites, web apps, and customized landing pages for you. Get in touch directly via +91 9479627447 or email us at wowxtechnologies@gmail.com!",
      isFallback: true,
    });
    return;
  }

  try {
    // Format the chat history for Gemini SDK
    // The prompt guides the assistant to act as "WOWX Technologies Consultant"
    const systemInstruction = `
You are the interactive "WOWX AI Consultant", a premium, friendly, and deeply knowledgeable voice representing WOWX Technologies (Morena, Madhya Pradesh, India).
Your purpose is to welcome visitors, educate them about our services, answer queries, help estimate pricing plans, and capture project inquiries.

Company Background:
- Based in: Pooja Studio, M. L. A. Road, Uttam Pura, Morena, MP 476001. Contact: +91 9479627447, wowxtechnologies@gmail.com
- Services: Custom Website development, Web applications (SaaS, Admin Panels, Portals), UI/UX Design, E-Commerce platforms, high-conversion Landing Pages, SEO-Friendly Coding, and Google Business/Social Presence setup.
- Core Plans:
  * PLAN 1 (₹1499): One Page website, Google Business setup, Contact form. (Great for physical local stores, doctors, clinics, initial digital launch)
  * PLAN 2 (₹2999): 2-3 Pages website, Google Business setup, Contact form. (Excellent for small consulting, restaurants, local services)
  * PLAN 3 (₹4999): Multi-page website, Google Business setup, Instagram/LinkedIn pages setup, custom Basic SEO, and a responsive custom Admin panel to manage contents. Best seller!
  * PLAN 4 (₹9999): Heavy-duty Complete Business/E-Commerce dynamic website, full Google Business & detailed Social media profiles custom configuration, advanced SEO search ranking optimization, Google Analytics dashboard integration, and powerful customized Admin panel. Ultimate Value!

Voice & Tone:
- Professional, futuristic, warm, encouraging, and deeply polite.
- Grounded but innovative. You respect small businesses of Morena, Gwalior, MP, and globally. 
- Try to recommend one of our four plans based on what the user describes (their budget/requirements).
- Remind users they can submit their inquiries directly using the Contact Form on the website or speak immediately on WhatsApp/Call on +91 9479627447.
- Keep responses compact, elegant, and styled in friendly Markdown. Do not give massive walls of text. Be highly interactive.
`;

    const chatSessionHistory = Array.isArray(chatHistory) ? chatHistory.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    })) : [];

    // Instantiate a standard chat session using ai.chats.create according to gemini-api guidelines
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: chatSessionHistory
    });

    const result = await chat.sendMessage({ message });
    res.json({
      reply: result.text || "I apologize, let me think that over. How can I help you build your digital presence?",
      isFallback: false,
    });
  } catch (error: any) {
    console.error("Gemini consultancy error:", error);
    res.status(500).json({
      error: "Could not generate consultancy response.",
      rawMessage: error.message
    });
  }
});

// ----------------------------------------------------
// VITE OR STATIC SERVING MIDDLEWARE
// ----------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Mount Vite middleware in development mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve built static files from 'dist'
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`WOWX Technologies Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
