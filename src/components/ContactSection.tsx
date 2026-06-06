import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Loader2, Sparkles, AlertCircle, CheckCircle } from "lucide-react";
import GoogleMapsEmbed from "./GoogleMapsEmbed";

interface ContactSectionProps {
  initialServiceSelected?: string;
}

export default function ContactSection({ initialServiceSelected = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceRequired: "Business Website Development",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync with initial selection from other sections
  useEffect(() => {
    if (initialServiceSelected) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: initialServiceSelected,
      }));
    }
  }, [initialServiceSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    // Dynamic field validation
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please complete Name, Email, and Phone fields.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || "Thank you! Your project request has been captured successfully.");
        // Clear non-critical inputs
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          serviceRequired: "Business Website Development",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "An error occurred. Please verify form details.");
      }
    } catch (err) {
      console.error("Lead submission exception:", err);
      setErrorMsg("Our system is undergoing maintenance. Please reach out to us at +91 9479627447.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="section-contact" className="space-y-16 pb-16">
      {/* Page Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block font-mono">SECURE INTAKE GATEWAY</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Initiate Your Custom Project
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Submit your requirements checklist to our system. We analyze your local competition and get back with a premium blueprint mockup within 24 hours.
        </p>
      </section>

      {/* Main Contact Grid layout */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Coordinates & Quick Actions */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Office Coordinates
            </h3>
            <p className="text-slate-405 text-xs sm:text-sm leading-relaxed font-sans">
              Our core software developers are stationed right in Morena. Get in touch for high fidelity website updates, system diagnostic audits, or offline project negotiations.
            </p>
          </div>

          {/* Quick Info Deck */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="p-4 bg-slate-905/45 border border-slate-850 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-900 flex items-center justify-center text-cyan-400 shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono text-slate-500 block">Mobile Infoline</span>
                <a href="tel:9479627447" className="text-sm font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                  +91 9479627447
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 bg-slate-905/45 border border-slate-850 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-900 flex items-center justify-center text-purple-400 shrink-0">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono text-slate-500 block">E-mail Correspondence</span>
                <a href="mailto:wowxtechnologies@gmail.com" className="text-sm font-bold text-slate-200 hover:text-purple-400 transition-colors">
                  wowxtechnologies@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 bg-slate-905/45 border border-slate-850 rounded-xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-900 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-mono text-slate-500 block">Headquarters Address</span>
                <address className="text-xs text-slate-300 not-italic leading-relaxed font-sans">
                  Pooja Studio, M. L. A. Road,<br />
                  Uttam Pura, Morena,<br />
                  Madhya Pradesh - 476001
                </address>
              </div>
            </div>
          </div>

          {/* Quick Communication Actions buttons */}
          <div className="p-5 bg-slate-950/40 rounded-2xl border border-slate-850 text-center space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider block font-mono">Immediate Communication Rails</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold">
              <a
                href="tel:9479627447"
                className="p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-slate-100 text-center cursor-pointer transition-colors"
                id="quick-action-call"
              >
                📞 Call Developer
              </a>
              <a
                href="https://wa.me/919479627447"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-900 rounded-xl text-emerald-400 text-center transition-colors"
                id="quick-action-whatsapp"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Intake contact Form */}
        <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-1 pb-4 border-b border-slate-850">
            <h3 className="text-lg font-bold text-slate-100">Project Scoping Worksheet</h3>
            <p className="text-slate-450 text-xs">Fill in your physical store, clinic, or consulting coordinates setup.</p>
          </div>

          {/* Feedback toasts */}
          {successMsg && (
            <div className="p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-xl flex items-start gap-3 text-xs text-emerald-400">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <p className="leading-relaxed font-sans font-medium">{successMsg}</p>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 bg-rose-950/60 border border-rose-800/80 rounded-xl flex items-start gap-3 text-xs text-rose-400">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="leading-relaxed font-sans">{errorMsg}</p>
            </div>
          )}

          {/* Contact form body entries */}
          <form id="wowx-intake-form" onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5 animate-fade-in">
                <label htmlFor="form-name-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Your Name *</label>
                <input
                  id="form-name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sanjay Parmar"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="form-email-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Email Address *</label>
                <input
                  id="form-email-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sanjay@chambalacademy.com"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="form-phone-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Mobile/WhatsApp No *</label>
                <input
                  id="form-phone-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>

              {/* Business Name */}
              <div className="space-y-1.5">
                <label htmlFor="form-business-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Business Name (Optional)</label>
                <input
                  id="form-business-input"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Chambal Coaching"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Service Selection dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="form-service-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Service Required</label>
              <select
                id="form-service-input"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="Business Website Development">Business Website Development</option>
                <option value="Portfolio Website Development">Portfolio Website Development</option>
                <option value="E-Commerce Website Development">E-Commerce Website Development</option>
                <option value="Landing Page Development">Landing Page Development</option>
                <option value="Custom Web Applications">Custom Web Applications</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Digital Presence Setup">Digital Presence Setup</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="form-message-input" className="text-[10px] font-mono text-slate-400 uppercase font-black">Project Requirements Description</label>
              <textarea
                id="form-message-input"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Give details about your physical store catalog size, timeline expectation, or custom goals..."
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none resize-none transition-colors font-sans"
              ></textarea>
            </div>

            {/* Submit btn */}
            <div className="pt-2">
              <button
                id="form-submit-btn"
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 tracking-wider shadow-lg hover:shadow-cyan-500/20 disabled:opacity-40 transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    Transmitting leads sheets...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-200 shrink-0" />
                    Transmit Scoping Worksheet Now
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Embed Google Map iframe */}
      <section className="max-w-7xl mx-auto px-6 space-y-6 pt-4">
        <div className="text-left space-y-1 max-w-xl">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide">Interactive Location Coordinates</h4>
          <p className="text-slate-405 text-xs">Pooja Studio, M. L. A. Road, Uttam Pura, Morena, Madhya Pradesh.</p>
        </div>
        <GoogleMapsEmbed />
      </section>
    </div>
  );
}
