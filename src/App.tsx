import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import AIConsultantWidget from "./components/AIConsultantWidget";
import { ArrowUp, Sparkles, X, CheckCircle, ChevronDown, MessageSquare, Loader2, PlaySquare } from "lucide-react";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [initialServiceSelected, setInitialServiceSelected] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to trigger "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth top scroller
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to handle selective service navigation
  const handleSelectService = (serviceName: string) => {
    setInitialServiceSelected(serviceName);
    setActivePage("contact");
    scrollToTop();
  };

  // Select a plan inside pricing columns
  const handleSelectPlan = (planName: string) => {
    setInitialServiceSelected(planName + " Package Build");
    setActivePage("contact");
    scrollToTop();
  };

  // Switch current page view tab
  const handlePageChange = (page: string) => {
    setActivePage(page);
    setInitialServiceSelected("");
    scrollToTop();
  };

  // Quick launch consultation with default selection
  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  // Form hooks inside separate consultation overlay
  const [modalFormData, setModalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "Business Website Development",
    message: "",
  });
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);
  const [modalSuccessMsg, setModalSuccessMsg] = useState<string | null>(null);

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalSubmitting(true);
    setModalSuccessMsg(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modalFormData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setModalSuccessMsg(data.message || "Thank you! Our project engineers are analyzing your request.");
        setModalFormData({
          name: "",
          email: "",
          phone: "",
          serviceRequired: 'Business Website Development',
          message: "",
        });
      }
    } catch (e) {
      console.error(e);
      setModalSuccessMsg("Requirements registered successfully offline. Call us on +91 9479627447!");
    } finally {
      setIsModalSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dynamic Header */}
      <Navbar
        activePage={activePage}
        onPageChange={handlePageChange}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Primary Page Canvas (Render Section dynamically based on active tab) */}
      <main id="main-content" className="flex-1 pt-16 sm:pt-20">
        <div id="page-router-wrapper" className="transition-opacity duration-300">
          {activePage === "home" && (
            <HomeSection
              onNavigate={handlePageChange}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {activePage === "services" && (
            <ServicesSection
              onOpenConsultation={handleOpenConsultation}
              onSelectService={handleSelectService}
            />
          )}

          {activePage === "projects" && (
            <ProjectsSection
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {activePage === "pricing" && (
            <PricingSection
              onOpenConsultation={handleOpenConsultation}
              onSelectPlan={handleSelectPlan}
            />
          )}

          {activePage === "about" && <AboutSection />}

          {activePage === "contact" && (
            <ContactSection
              initialServiceSelected={initialServiceSelected}
            />
          )}
        </div>
      </main>

      {/* Back to Top button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-cyan-400 rounded-full shadow-lg transition-all duration-300 transform scale-100 hover:scale-110 cursor-pointer"
          title="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive AI Agent Widget */}
      <AIConsultantWidget />

      {/* Shared Corporate Footer */}
      <Footer onNavigate={handlePageChange} />

      {/* FREE CONSULTATION OVERLAY MODAL */}
      {isConsultationOpen && (
        <div
          id="consultation-modal-backpack"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
        >
          <div
            id="consultation-modal-card"
            className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <h3 className="text-base font-extrabold text-slate-100 uppercase tracking-wider font-sans">
                  Free Scoping Consultation
                </h3>
              </div>
              <button
                id="close-consultation-modal"
                onClick={() => {
                  setIsConsultationOpen(false);
                  setModalSuccessMsg(null);
                }}
                className="p-1 text-slate-400 hover:text-white rounded-md cursor-pointer transition-colors"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Success panel or Form */}
            {modalSuccessMsg ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-900/30 border border-emerald-800 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-lg text-slate-100">Consultation Booked Successfully!</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto font-sans">
                    {modalSuccessMsg}
                  </p>
                </div>
                <button
                  id="modal-success-close-btn"
                  onClick={() => {
                    setIsConsultationOpen(false);
                    setModalSuccessMsg(null);
                  }}
                  className="px-6 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="p-6 space-y-4">
                <p className="text-xs text-slate-400 leading-relaxed pb-2 font-sans">
                  Complete this micro-requirements card. Our team based in Pooja Studio, Morena, MP, will reach back shortly with structural analysis mockups.
                </p>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="modal-name-input" className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">Your Name *</label>
                  <input
                    id="modal-name-input"
                    type="text"
                    placeholder="e.g. Sanjay Parmar"
                    value={modalFormData.name}
                    onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="modal-email-input" className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">Email ID *</label>
                    <input
                      id="modal-email-input"
                      type="email"
                      placeholder="e.g. sanjay@chambal.com"
                      value={modalFormData.email}
                      onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="modal-phone-input" className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">WhatsApp/Mobile *</label>
                    <input
                      id="modal-phone-input"
                      type="tel"
                      placeholder="e.g. 9479627447"
                      value={modalFormData.phone}
                      onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service dropdown selection */}
                <div className="space-y-1">
                  <label htmlFor="modal-service-input" className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">Service Line</label>
                  <select
                    id="modal-service-input"
                    value={modalFormData.serviceRequired}
                    onChange={(e) => setModalFormData({ ...modalFormData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none cursor-pointer"
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
                <div className="space-y-1">
                  <label htmlFor="modal-message-input" className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">Brief Concept Details</label>
                  <textarea
                    id="modal-message-input"
                    rows={3}
                    placeholder="e.g. I need an interactive portfolio for my consulting practice, ready in 5 days."
                    value={modalFormData.message}
                    onChange={(e) => setModalFormData({ ...modalFormData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl text-xs text-slate-200 focus:outline-none resize-none transition-colors font-sans"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex gap-3">
                  <button
                    id="modal-sumbit-btn"
                    type="submit"
                    disabled={isModalSubmitting}
                    className="flex-1 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl text-xs cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-40 transition-all duration-200"
                  >
                    {isModalSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting requirements...
                      </>
                    ) : (
                      "Lock In Free consultation Call"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
