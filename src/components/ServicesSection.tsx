import React, { useState } from "react";
import { SERVICES } from "../data";
import { Check, Clipboard, Clock, CheckCircle2, ChevronRight, MessageSquareCode, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenConsultation: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenConsultation, onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div id="section-services" className="space-y-16 pb-16">
      {/* Services Title Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">Expertise Directory</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          SaaS-Quality Digital Capabilities
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          From basic dynamic landing pages to heavy-duty custom web backends, we deliver high-velocity, lightweight solutions tuned strictly for growth.
        </p>
      </section>

      {/* Services Main Workspace Drawer */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Services List Navigation */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block px-2 mb-2">
            SELECT A CAPABILITY:
          </span>
          <div className="space-y-1.5">
            {SERVICES.map((srv) => (
              <button
                key={srv.id}
                id={`srv-nav-btn-${srv.id}`}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`w-full text-left p-4 rounded-xl flex items-center justify-between border cursor-pointer transition-all duration-200 group ${
                  selectedServiceId === srv.id
                    ? "bg-slate-900 border-cyan-500/50 text-cyan-400 shadow-[0_4px_20px_rgba(6,182,212,0.15)]"
                    : "bg-slate-950/40 border-slate-900 text-slate-300 hover:bg-slate-900/60 hover:border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-150 ${
                    selectedServiceId === srv.id ? "bg-cyan-400" : "bg-slate-600"
                  }`}></span>
                  <span className="text-xs md:text-sm font-bold tracking-wide">{srv.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Service Blueprint Panel */}
        <div className="lg:col-span-8 p-6 md:p-10 bg-slate-900/40 backdrop-blur border border-slate-800 rounded-2xl space-y-8 relative overflow-hidden">
          {/* Subtle decoration bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600"></div>

          {/* Service Profile Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h2>
              {activeService.startingPrice && (
                <div className="px-4 py-1.5 bg-cyan-950 border border-cyan-800/80 rounded-full font-mono text-xs font-bold text-cyan-300">
                  Starts at {activeService.startingPrice}
                </div>
              )}
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {activeService.longDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-850">
            {/* Features list */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Clipboard className="w-4 h-4 text-cyan-400" />
                Key Deliverables Block
              </h4>
              <ul className="space-y-2.5">
                {activeService.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-slate-300 items-start">
                    <Check className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Enterprise Benefits
              </h4>
              <ul className="space-y-2.5">
                {activeService.benefits.map((ben, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-slate-300 items-start">
                    <Check className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>

              {/* Development schedule */}
              <div className="mt-6 p-4 bg-slate-950/40 rounded-xl border border-slate-850 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Estimated Timeline</div>
                  <div className="text-xs font-bold text-slate-200">{activeService.timeline}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual CTA Panel */}
          <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-xs">
              Need modifications or custom APIs? We tailor exactly to order.
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                id="srv-book-service-btn"
                onClick={() => {
                  onSelectService(activeService.title);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg text-xs cursor-pointer transition-all duration-200"
              >
                Inquire Form Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services grid layout for mobile convenience */}
      <section className="max-w-7xl mx-auto px-6 pt-8">
        <div className="p-8 bg-slate-950/60 rounded-3xl border border-slate-855 text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-200">
            Let's discuss your project parameters
          </h3>
          <p className="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
            Not sure which architecture is required? Chat with our AI Consultant instantly or lock in a free diagnostics call directly with our Morena headquarters team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-slate-900 border border-slate-750 hover:border-slate-650 hover:bg-slate-850 rounded-xl text-cyan-400 cursor-pointer transition-colors duration-200"
            >
              Request Scoping Audit
            </button>
            <a
              href="https://wa.me/919479627447"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-emerald-900/20 hover:bg-emerald-900/30 border border-emerald-800/80 rounded-xl text-emerald-400 transition-colors"
            >
              Direct WhatsApp chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
