import { Service, Project, PricingPlan, FAQItem, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "business-web",
    title: "Business Website Development",
    shortDesc: "Premium corporate web solutions to establish credibility and capture organic customer interest.",
    longDesc: "We build modern, blazing-fast, and secure business websites that are custom-designed to match your brand and convert visitors into high-paying clients. Fully indexable by search engines and ready for all desktop and mobile devices.",
    iconName: "Globe",
    timeline: "7-10 Days",
    features: [
      "Custom responsive design built with Tailwind CSS",
      "Dynamic lead capture forms linked to instant notifications",
      "Robust speed audit & performance score 95+",
      "Comprehensive Google Business Profile linkage",
      "Basic on-page SEO keywords implementation"
    ],
    benefits: [
      "Enhanced local discoverability in search results",
      "Highly responsive and native-like mobile load times",
      "24/7 digital storefront to educate prospect inquiries"
    ],
    startingPrice: "₹2999"
  },
  {
    id: "portfolio",
    title: "Portfolio Website Development",
    shortDesc: "Sleek, creative, and highly distinct personal branding sites for professionals.",
    longDesc: "Designed for architects, coaches, consultants, doctors, designers, and freelancers to establish undeniable authority. Your resume is transformed into an animated, highly atmospheric, and premium web story.",
    iconName: "Briefcase",
    timeline: "3-5 Days",
    features: [
      "Interactive animated work displays and achievements",
      "Elegant floating testimonials slider",
      "Integrated booking calendar / direct consultation channels",
      "Downloadable resume/portfolio assets",
      "One-click direct voice/WhatsApp calls"
    ],
    benefits: [
      "Secures higher-paying freelance projects and consulting roles",
      "Pristine typography paired with stunning interactive layouts"
    ],
    startingPrice: "₹1499"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website Development",
    shortDesc: "Turn clicks into secure transactions with elegant and conversion-focused checkout structures.",
    longDesc: "Launch a digital storefront specialized in frictionless experiences. From catalogs to fast inventory showcases and smooth cart configurations, we build the engine that powers your local or global e-commerce growth.",
    iconName: "ShoppingBag",
    timeline: "14-21 Days",
    features: [
      "Intuitive and crisp category & product sorting catalog",
      "Seamless and highly responsive cart & checkout experience",
      "Local payment getaway integrations (UPI, Cards, Wallets)",
      "Dedicated merchant dashboard to oversee sales and invoices",
      "Live order dispatch tracking and notification hooks"
    ],
    benefits: [
      "Double your order values with slick recommended products panels",
      "Easily upload products and update prices within seconds"
    ],
    startingPrice: "₹9999"
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    shortDesc: "Laser-focused single pages tuned for maximum conversion and ad efficiency.",
    longDesc: "Whether running Facebook Ads, Instagram Ads, or Google Campaigns, a standard website leaks traffic. Our landing pages are engineered on deep psychology, engaging copy hierarchies, and zero-distraction calls-to-action.",
    iconName: "FileText",
    timeline: "2-4 Days",
    features: [
      "AIDA psychological structure layout optimized for modern attention spans",
      "Scroll-triggered animations and interactive comparison tables",
      "Instant synchronization to Firestore or custom lead hubs",
      "Zero-latency loading speeds via advanced build-time assets purging",
      "Integrated trust badges and live WhatsApp/Call channels"
    ],
    benefits: [
      "Slash your advertising cost-per-lead (CPL) instantly",
      "Generate continuous high-intent business inquiries"
    ],
    startingPrice: "₹1499"
  },
  {
    id: "custom-webapps",
    title: "Custom Web Applications",
    shortDesc: "Bespoke SaaS architectures, admin dashboards, and specialized business tools.",
    longDesc: "When generic solutions fall short, we sculpt server-authoritative web apps. Complete with custom databases, automated dashboards, subscription capabilities, and interactive charts, we build digital solutions for your unique scale.",
    iconName: "Cpu",
    timeline: "15-30 Days",
    features: [
      "Express, Node, and React-fueled modular architecture",
      "Secure role-based account logins (Admin, Staff, Customer)",
      "Dynamic interactive data dashboards with Recharts/D3",
      "CSV & PDF generation with automated weekly reports",
      "Real-time live sync modules and third-party API webhooks"
    ],
    benefits: [
      "Automate manual business reporting, cutting admin overhead by 80%",
      "Proprietary code system ready to undergo investor audits"
    ],
    startingPrice: "₹9999"
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    shortDesc: "Futuristic interactive mockups, design systems, and visual guidelines.",
    longDesc: "We create immersive and ultra-modern user interfaces. By detailing client visual journeys, testing wireframes, and building fully responsive screens, we shape experiences that are both beautiful and intuitive.",
    iconName: "Palette",
    timeline: "4-7 Days",
    features: [
      "Atmospheric typography and visual pairing system",
      "Full interactive screen prototyping and clickable mockups",
      "Mobile-optimized micro-interactions guidance",
      "Comprehensive asset bundle export (Icons, Fonts, Palettes)",
      "Design-system alignment ensuring rapid coding conversion"
    ],
    benefits: [
      "Visualize your final product before starting expensive development stages",
      "Delight end users with frictionless interface usability"
    ],
    startingPrice: "₹2999"
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    shortDesc: "Continuous speed monitoring, emergency patches, and code updates.",
    longDesc: "Free up your valuable business resources. We cover your software hosting, domain management, regular database audits, broken assets checks, security compliance, speed optimization, and dynamic copywriting requests on demand.",
    iconName: "ShieldCheck",
    timeline: "Ongoing",
    features: [
      "24/7 server uptime monitoring and instant warning pings",
      "Weekly secure off-site cloud database backups",
      "On-demand text changes, image updates, and design tweaks",
      "Continuous runtime speed optimization adjustments",
      "SSL certificate management and security vulnerability audits"
    ],
    benefits: [
      "Zero downtime worries, leaving your schedule fully uninterrupted",
      "Instant emergency priority support within 4 hours"
    ],
    startingPrice: "₹1499/mo"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    shortDesc: "Dominate search engine results and generate continuous organic leads.",
    longDesc: "High organic search placements beat ad campaigns. We audit, rewrite, and reconstruct your on-page copy, metadata, schema structures, and crawling configurations to lift your regional or national rankings on Google.",
    iconName: "TrendingUp",
    timeline: "5-7 Days",
    features: [
      "Localized Google Business Profile advanced ranking optimization",
      "Detailed structural Schema Markup (JSON-LD) implementation",
      "Competitor keyword gap analysis and optimization guide",
      "Targeted speed boost to comply with Core Web Vitals targets",
      "XML site mapping and forced search engine index pings"
    ],
    benefits: [
      "Be the first business customers see when searching locally in MP",
      "Sustain consistent monthly phone calls and inquiries without ads spend"
    ],
    startingPrice: "₹1499"
  },
  {
    id: "digital-presence",
    title: "Digital Presence Setup",
    shortDesc: "Establish a trusted brand identity across social search channels.",
    longDesc: "Ensure unified brand trust everywhere. We configure, link, and style your business layout on Google Maps, Instagram, LinkedIn, and Facebook, aligning search results to look like an established, premium brand.",
    iconName: "Layers",
    timeline: "3 Days",
    features: [
      "Google Maps / Google Business Setup & Verification help",
      "Cohesive profile logo alignments and matching hero banners",
      "LinkedIn corporate page creation & profile optimization",
      "Instagram business setup with call-to-action buttons",
      "Unified contact layout and automated greeting responders"
    ],
    benefits: [
      "Double your business social proof and look established instantly",
      "Capture leads directly via Instagram, Facebook, and Maps seamlessly"
    ],
    startingPrice: "₹1499"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "morena-clinic",
    title: "Advanced Care Clinic Website",
    category: "Business Websites",
    description: "Modern, trust-evoking clinic website for a local multispecialty healthcare practitioner.",
    longDescription: "A comprehensive digital space for a premier Morena medical clinic. Features simple online doctor appointment booking, intuitive patient registration sheets, clean services directories, and verified user reviews. Designed to lower entry anxiety and boost community trust.",
    clientName: "Dr. R. K. Sharma, MD",
    location: "Morena, Madhya Pradesh",
    featuresUsed: ["Patient Booking Portal", "Responsive Doctor Calendars", "Local Google Business Integration", "Interactive Health Blog"],
    beforeImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=40&w=600", // outdated healthcare template
    afterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200", // spectacular premium medical clinic UI
    liveUrl: "#clinic-live-demo",
    stats: [
      { label: "Lead Inquiries", value: "+210% MoM" },
      { label: "Page Load Velocity", value: "0.4s" },
      { label: "Mobile Bounce Rate", value: "-45%" }
    ]
  },
  {
    id: "chambal-academy",
    title: "Chambal Elite Academy Portal",
    category: "Educational Websites",
    description: "High-performance education portal with interactive syllabus, faculties and lead capture structure.",
    longDescription: "Chambal Elite Academy needed an elite online portal to showcase coaching courses, expert faculty, and facilitate student inquiry enrollments. We built an extremely clean, visual portal showcasing past toppers, batch timelines, and online callback requests.",
    clientName: "Chambal Academy",
    location: "Morena, MP",
    featuresUsed: ["Batch Schedule Grid", "Dynamic Topper Wall", "Inquiry Form Hub", "Animated Course Syllabuses"],
    beforeImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=40&w=600", // default unformatted bulletin
    afterImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200", // beautiful clean digital educational UI
    liveUrl: "#academy-demo",
    stats: [
      { label: "Monthly Student Leads", value: "480+" },
      { label: "Search Ranking", value: "#1 Local" },
      { label: "User Trust Rating", value: "4.9/5" }
    ]
  },
  {
    id: "gwalior-bazaar",
    title: "Gwalior Organic Hub E-Store",
    category: "E-Commerce",
    description: "Premium wellness and organic materials custom WooCommerce e-store with payment gateways.",
    longDescription: "A boutique regional online store specializing in chemical-free foods, local grains, and wellness items. Built with instant UPI scans via WhatsApp, streamlined products grids, high-fidelity checkouts, and clean category tabs.",
    clientName: "Organic Hub Co.",
    location: "Gwalior Region",
    featuresUsed: ["UPI Fast Checkout", "WhatsApp Order Push", "Mobile Optimized Catalog", "Admin Sales Tracker"],
    beforeImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=40&w=600", // cluttered local shop
    afterImage: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=1200", // spectacular elegant organic boutique
    liveUrl: "#bazaar-demo",
    stats: [
      { label: "Online Revenue", value: "₹4.5L+ Mo" },
      { label: "Add to Cart Rate", value: "8.4%" },
      { label: "Direct UPI Sales", value: "72%" }
    ]
  },
  {
    id: "pankaj-consulting",
    title: "Wealth Growth Partners Website",
    category: "Portfolio Sites",
    description: "Atmospheric and authoritative personal branding portfolio for a financial consultant.",
    longDescription: "Transforming the physical presence of a leading private consultant into an elite digital resume. Integrates video summaries, interactive client stories, financial calculation calculators, and high-conversion consultation forms.",
    clientName: "Pankaj Singhal, CFA",
    location: "Madhya Pradesh",
    featuresUsed: ["Authoritative Headshot Grid", "Interactive Case Studies", "Direct Consultation Scheduler", "Fin-Calculator Integration"],
    beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=40&w=600", // dry boring text list
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", // modern slick wealth dashboard style
    liveUrl: "#portfolio-demo",
    stats: [
      { label: "Consultation Requests", value: "+340%" },
      { label: "Client Retainers", value: "+40%" },
      { label: "Page Speed Score", value: "98" }
    ]
  },
  {
    id: "gwalior-fit",
    title: "Force Fitness Gym Landing Page",
    category: "Landing Pages",
    description: "High-conversion single page built to capture active local fitness signups.",
    longDescription: "A striking, high-impact landing page combining robust typography, bold dark tones, and glassmorphism. Highlights membership perks, trainer videos, and features a frictionless call-to-action form with limited-time discount counters.",
    clientName: "Force Fitness Morena",
    location: "Morena, MP",
    featuresUsed: ["Glassmorphic Plan Cards", "Daily Countdown Timer", "Direct Lead Storage", "Google Maps Embed"],
    beforeImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=40&w=600", // generic boring text table
    afterImage: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?auto=format&fit=crop&q=80&w=1200", // intense cybernetic workout visuals
    liveUrl: "#fitness-demo",
    stats: [
      { label: "New Member Leads", value: "240/Mo" },
      { label: "Conversion Rate", value: "12.8%" },
      { label: "Ad CPC Reduced By", value: "35%" }
    ]
  },
  {
    id: "jain-bakers-panel",
    title: "SweetBites Order Engine",
    category: "Web Apps",
    description: "Internal custom CRM and order tracking panel for a busy local bakery store chains.",
    longDescription: "A custom web application that replaced disorganized paper registers. Allows local bakery staff to input orders, track cake delivery schedules, send automated tracking pings, and view financial graphs from an elegant admin board.",
    clientName: "Jain Bakers & Confectioners",
    location: "Morena City",
    featuresUsed: ["Express API Backend", "Recharts Profit Tracker", "SMS Delivery Integration", "Inventory Logs Grid"],
    beforeImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=40&w=600", // chaotic paper bills
    afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", // ultra slick dark statistics panel
    liveUrl: "#dashboard-demo",
    stats: [
      { label: "Hours Saved/Wk", value: "14 hrs" },
      { label: "Order Errors Reduced", value: "99.2%" },
      { label: "Monthly Revenue Tracked", value: "₹3.2L+" }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-1",
    name: "One Page Rocket",
    price: "1,499",
    originalPrice: "2,999",
    period: "one-time",
    popular: false,
    tagline: "Perfect for physical local shops, doctors, freelancers, and establishing your first digital identity.",
    features: [
      "Stunning 1-Page Responsive Desktop/Mobile Website",
      "Google Business Profile (Google Maps) integration helper",
      "Dynamic high-speed Contact & Lead Capture Form",
      "One-Click Direct WhatsApp & Phone Call button",
      "Social Media platform linking",
      "Secure hosting setup guidance",
      "Free SSL Certificate configured"
    ],
    ctaText: "Get Started Rocket"
  },
  {
    id: "plan-2",
    name: "Professional Launch",
    price: "2,999",
    originalPrice: "5,999",
    period: "one-time",
    popular: false,
    tagline: "Designed for small services, consulting agencies, local restaurants, and coaching centers.",
    features: [
      "Slick 2-3 Pages Responsive Custom Designed Website",
      "Google Business Profile (Google Maps) full setup & advice",
      "Atmospheric dynamic Lead Capture with Email notification",
      "Detailed visual Services Directory",
      "Integrated Testimonials Carousel",
      "Social Profiles visual pairing",
      "1 Month Priority Maintenance & Bug support"
    ],
    ctaText: "Choose Professional Launch"
  },
  {
    id: "plan-3",
    name: "Business Catalyst",
    price: "4,999",
    originalPrice: "9,999",
    period: "one-time",
    popular: true,
    badge: "Most Popular",
    tagline: "Ultimate scaling setup for growing businesses demanding a distinct presence and internal custom control.",
    features: [
      "Dynamic Multi-Page Complete Corporate Website",
      "Premium, responsive visual layout designed from scratch",
      "Personalized, easy-to-use Custom Admin Control Panel",
      "Google Business Profile (Google Maps) verify assist",
      "Professional Instagram & LinkedIn page setup",
      "Robust on-page custom SEO structure (Ready for Google search)",
      "High-speed performance (Vite/Tailwind Purged code)",
      "3 Months Comprehensive Maintenance & changes support"
    ],
    ctaText: "Choose Business Catalyst"
  },
  {
    id: "plan-4",
    name: "Enterprise E-Commerce",
    price: "9,999",
    originalPrice: "19,999",
    period: "one-time",
    popular: false,
    badge: "Best Value",
    tagline: "Heavy-duty custom portals, online stores, digital booking engines, or comprehensive SEO frameworks.",
    features: [
      "Full E-Commerce Product Catalog / High-Fidelity Booking system",
      "Slick Shopping Cart & checkout workflow",
      "Seamless UPI QR Scan / Online Payments gateway integration",
      "Advanced administrative control center & sales logs",
      "Professional Google Analytics setup (Oversee visitor metrics)",
      "In-depth local + search terms Advanced SEO implementation",
      "Comprehensive social setups across Instagram, Facebook, LinkedIn, YouTube, X",
      "6 Months Comprehensive Premium Maintenance & emergency fixes"
    ],
    ctaText: "Choose Enterprise Value"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How are the prices at WOWX Technologies so affordable?",
    answer: "Our core mission is to make high-quality professional websites accessible to local businesses and startups. As a passionate technology startup based in Morena, MP, we keep our operating overhead low and utilize modern automated compilation systems (like Vite, React, and Tailwind) to craft custom interfaces ultra-efficiently without sacrificing premium visual and functional quality.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you offer custom designs from scratch, or templates?",
    answer: "Every single portfolio piece and client project we ship is custom-designed and coded. We do not use bloated, generic, slow-loading templates. Our designs are custom engineered from scratch to reflect your exact brand essence and deliver exceptionally fast mobile loading speeds (90+ Google Performance Score).",
    category: "Services"
  },
  {
    id: "faq-3",
    question: "Are there any hidden costs (like monthly software subscription or updates)?",
    answer: "None! Our pricing plans are honest, flat, and one-time payments for development. You only pay for your annual domain name and fast server hosting (typically around ₹800 to ₹1500 per year, which we host directly on Google Cloud or your preferred registrar). We set it up directly in your name so you retain 100% ownership.",
    category: "Pricing"
  },
  {
    id: "faq-4",
    question: "What is the typical completion time for a standard website?",
    answer: "A standard Landing Page or One-Page Rocket website (Plan 1) is delivered in 2-4 days. Professional Multi-page business sites (Plan 2 & 3) typically require 5 to 10 days. Complex dynamic E-Commerce platforms or SaaS dashboards (Plan 4) take between 12 and 21 days, including comprehensive diagnostic test runs.",
    category: "Timeline"
  },
  {
    id: "faq-5",
    question: "Can I edit and add images, prices, or new items myself later?",
    answer: "Absolutely! For Plan 3 and Plan 4, we build an extremely intuitive, friendly custom Admin Panel. This dashboard lets you upload new photos, change written copy, record product inventories, or view user inquiries directly in a single click, with zero coding knowledge required.",
    category: "Services"
  },
  {
    id: "faq-6",
    question: "How do I get started?",
    answer: "Simply use our 'Get Free Consultation' button, speak direct on WhatsApp/Call on +91 9479627447, or send us a prompt inquiry through our contact form. Our interactive AI Assistant is also active 24/7 on the bottom corner of our site to construct your project scoping estimate right now!",
    category: "General"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. R. K. Sharma",
    role: "Multispecialty Health Specialist",
    company: "Advanced Care Clinic Morena",
    content: "WOWX Technologies built an exceptional clinic website for my practice. Local patients can now find clinic coordinates instantly on Google Maps and book callbacks seamlessly. Our local inquiries surged threefold within just thirty days. Sincerely recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "t2",
    name: "Sanjay Parmar",
    role: "Academic Director",
    company: "Chambal Elite Academy",
    content: "Fabulous coding efficiency. Our coaching syllabus, top scores updates, and direct student inquiries are completely handled by the dynamic student portal they deployed. The page updates are incredibly fast. WOWX stands out as the finest tech agency in Morena.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "t3",
    name: "Mrs. Megha Jain",
    role: "Lead Baker & Owner",
    company: "SweetBites Cake Studio",
    content: "I selected their Business Catalyst Plan (Plan 3) and it transformed my business. Our Custom Admin Panel lets my crew manage cake catering delivery calendars without errors. Absolute value for money!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120"
  }
];

export const TECH_STACK = [
  { name: "React", description: "Modern responsive UI rendering", iconName: "Layers", rating: 98 },
  { name: "Tailwind CSS", description: "Clean utility-first luxury styling", iconName: "Palette", rating: 95 },
  { name: "Framer Motion", description: "Smooth immersive micro-interactions", iconName: "Award", rating: 90 },
  { name: "TypeScript", description: "Robust type stability preventing errors", iconName: "Cpu", rating: 96 },
  { name: "Vite JS", description: "Sub-second production compiling speeds", iconName: "Zap", rating: 99 },
  { name: "Node / Express", description: "Heavy-duty server-side API engines", iconName: "Server", rating: 94 },
  { name: "Firebase Firestore", description: "Secure cloud database for persistent leads", iconName: "Database", rating: 95 },
  { name: "Google Analytics & SEO", description: "Google organic search ranking boosters", iconName: "TrendingUp", rating: 92 }
];
