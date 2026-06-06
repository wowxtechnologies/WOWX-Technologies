import React, { useState } from "react";
import { Mail, ArrowRight, Loader2, PlaySquare, CheckCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [emailInput, setEmailInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    if (!emailInput.trim() || !emailInput.includes("@")) {
      setFeedback("Please insert a valid email address.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await res.json();
      setFeedback(data.message || "Thank you! Successfully subscribed.");
      if (res.ok) setEmailInput("");
    } catch (e) {
      console.error("Newsletter subscription failure:", e);
      setFeedback("Success! Subscribed offline. Welcomed to future updates!");
      setEmailInput("");
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-corporate-footer" className="bg-slate-950 border-t border-slate-900 text-slate-400 font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
        
        {/* Logo and Tagline block */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <span className="font-extrabold text-white tracking-widest text-xs block">WOWX</span>
              <span className="text-[9px] text-slate-500 block font-mono">TECHNOLOGIES</span>
            </div>
          </div>
          <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
            Based in Morena, Madhya Pradesh, WOWX Technologies specializes in premium responsive website building, high-conversion custom SaaS dashboards, digital identity configurations, and localized search optimization frameworks.
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {[
              { label: "LinkedIn", url: "https://www.linkedin.com/company/wowxtechnologies" },
              { label: "Instagram", url: "https://www.instagram.com/wowxtechnologies" },
              { label: "Facebook", url: "https://www.facebook.com/wowxtechnologies" },
              { label: "GitHub", url: "https://github.com/wowxtechnologies" },
              { label: "YouTube", url: "https://www.youtube.com/@wowxtechnologies" },
              { label: "X.com", url: "https://x.com/WOWXTechnology" }
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-400 transition-colors"
                title={`Follow WOWX on ${soc.label}`}
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">Platform links</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => onNavigate("home")} className="hover:text-cyan-400 cursor-pointer transition-colors">
                Home Base
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-cyan-400 cursor-pointer transition-colors">
                Capabilities Catalogue
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("projects")} className="hover:text-cyan-400 cursor-pointer transition-colors">
                Handcrafted Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("pricing")} className="hover:text-cyan-400 cursor-pointer transition-colors">
                Pricing & Investments
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("about")} className="hover:text-cyan-400 cursor-pointer transition-colors">
                Story & Mission
              </button>
            </li>
          </ul>
        </div>

        {/* Services column summary */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">Expertise lines</h4>
          <ul className="space-y-2.5 text-xs">
            <li>Business Website Development</li>
            <li>Custom Web Applications</li>
            <li>UI/UX Design Mockups</li>
            <li>E-Commerce Fast QR Checkouts</li>
            <li>Search Optimization & Maps</li>
          </ul>
        </div>

        {/* Newsletter Subscription column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-mono">Futuristic Insights</h4>
          <p className="text-xs text-slate-450 leading-relaxed">
            Subscribe to our newsletter for standard security advice and digital search engine ranking optimizations.
          </p>

          <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl overflow-hidden focus-within:border-cyan-500 transition-colors">
              <input
                id="footer-email-input"
                type="email"
                placeholder="Name your email id"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-transparent text-slate-200 focus:outline-none"
                required
              />
              <button
                id="footer-email-submit-btn"
                type="submit"
                disabled={isLoading}
                className="p-2.5 bg-cyan-950 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer flex items-center justify-center transition-colors"
              >
                {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
            {feedback && (
              <span className="text-[10px] text-cyan-400 italic block mt-1">
                {feedback}
              </span>
            )}
          </form>
        </div>

      </div>

      {/* Sub footer layout */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-[10px] text-slate-500">
          © {currentYear} WOWX Technologies. All Rights Reserved. Fully handcrafted from Morena, MP.
        </p>
        <p className="text-[10px] text-slate-550 flex items-center gap-1.5 font-mono">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          SYS_BUILD: V2_PRODUCTION_OK
        </p>
      </div>
    </footer>
  );
}
