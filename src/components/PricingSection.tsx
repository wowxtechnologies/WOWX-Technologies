import { useState } from "react";
import { PRICING_PLANS, FAQS } from "../data";
import { Check, X, ShieldAlert, Award, ArrowRight, HelpCircle, ChevronRight, ChevronDown, CheckCircle2 } from "lucide-react";

interface PricingSectionProps {
  onOpenConsultation: () => void;
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onOpenConsultation, onSelectPlan }: PricingSectionProps) {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // Toggle FAQ accordion
  const toggleFaq = (faqId: string) => {
    setActiveFaqId(activeFaqId === faqId ? null : faqId);
  };

  const featureRows = [
    { name: "Responsive Dynamic Web Design", p1: true, p2: true, p3: true, p4: true },
    { name: "Google Maps Coordinates Assist", p1: true, p2: true, p3: true, p4: true },
    { name: "Frictionless Inline Lead Capture", p1: true, p2: true, p3: true, p4: true },
    { name: "Additional Pages", p1: "1 Page Only", p2: "2-3 Pages", p3: "Multi Page", p4: "Dynamic E-store Pages" },
    { name: "Custom Admin Panel Control Dashboard", p1: false, p2: false, p3: true, p4: true },
    { name: "Instagram Strategy Setup", p1: false, p2: false, p3: true, p4: true },
    { name: "LinkedIn Profile Design", p1: false, p2: false, p3: true, p4: true },
    { name: "Google Analytics Metrics Dashboard", p1: false, p2: false, p3: false, p4: true },
    { name: "Advanced Search Rank Optimization SEO", p1: "Basic Only", p2: "Basic Only", p3: "Standard Setup", p4: "Advanced Local Keywords Study" },
    { name: "UPI Scanner & Checkouts", p1: false, p2: false, p3: false, p4: "Direct Unified UPI checks" },
    { name: "Priority Site Maintenance Support", p1: "1 Week", p2: "1 Month Team Support", p3: "3 Months Support SLA", p4: "6 Months Full Emergency Support" },
  ];

  return (
    <div id="section-pricing" className="space-y-16 pb-16">
      {/* Page Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block font-mono">DEVELOPMENT INVESTMENTS</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Accessible, Fully Transparent Pricing
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Choose the ideal digital engine crafted strictly for your scale. No recurring lock-ins, zero monthly maintenance fees.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 bg-slate-900/60 rounded-2xl border transition-all duration-350 flex flex-col justify-between group ${
              plan.popular
                ? "border-cyan-500 bg-slate-900/80 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-102"
                : "border-slate-800 hover:border-slate-700"
            }`}
          >
            {/* Best Badge overlay */}
            {plan.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-sans text-[10px] font-black uppercase text-white tracking-widest shadow-md">
                🎉 {plan.badge}
              </span>
            )}

            <div className="space-y-6">
              {/* Header profile */}
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-100">{plan.name}</h3>
                <p className="text-slate-400 text-xs leading-normal font-sans">
                  {plan.tagline}
                </p>
              </div>

              {/* Price Tag entry */}
              <div className="py-2 flex items-baseline">
                <span className="text-xs font-bold text-slate-400 mr-1 font-mono">₹</span>
                <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight">{plan.price}</span>
                {plan.originalPrice && (
                  <span className="text-xs font-semibold text-slate-500 line-through ml-2 font-mono">
                    ₹{plan.originalPrice}
                  </span>
                )}
                <span className="text-xs font-semibold text-slate-400 ml-1">/ {plan.period}</span>
              </div>

              {/* Bullet Features Checklist */}
              <div className="space-y-3 pt-4 border-t border-slate-850">
                <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Included features:</h5>
                <ul className="space-y-2.5">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-slate-300 items-start">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA action button */}
            <div className="pt-8">
              <button
                id={`cta-pay-${plan.id}`}
                onClick={() => {
                  onSelectPlan(plan.name);
                  onOpenConsultation();
                }}
                className={`w-full py-3 rounded-xl font-bold text-xs cursor-pointer flex items-center justify-center gap-1 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg"
                    : "bg-slate-950 hover:bg-slate-850 text-slate-200 border border-slate-850 hover:border-slate-750"
                }`}
              >
                {plan.ctaText}
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Feature Comparison Table Section */}
      <section className="max-w-7xl mx-auto px-6 hidden md:block">
        <div className="p-8 bg-slate-900/40 backdrop-blur border border-slate-800 rounded-3xl space-y-6">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">GRANULAR COMPARISON</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-200">Side-by-Side Features Breakdown</h2>
          </div>

          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-slate-850 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                <th className="py-4">Detailed Capability</th>
                <th className="py-4 text-center">Plan ₹1499</th>
                <th className="py-4 text-center">Plan ₹2999</th>
                <th className="py-4 text-center">Plan ₹4999</th>
                <th className="py-4 text-center">Plan ₹9999</th>
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-850/60 hover:bg-slate-905/30 transition-colors">
                  <td className="py-4 font-medium text-slate-200">{row.name}</td>
                  <td className="py-4 text-center font-bold">
                    {typeof row.p1 === "boolean" ? (row.p1 ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4.5 h-4.5 text-slate-600 mx-auto" />) : <span className="text-[10px] text-slate-400">{row.p1}</span>}
                  </td>
                  <td className="py-4 text-center font-bold">
                    {typeof row.p2 === "boolean" ? (row.p2 ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4.5 h-4.5 text-slate-600 mx-auto" />) : <span className="text-[10px] text-slate-400">{row.p2}</span>}
                  </td>
                  <td className="py-4 text-center font-bold">
                    {typeof row.p3 === "boolean" ? (row.p3 ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4.5 h-4.5 text-slate-600 mx-auto" />) : <span className="text-[10px] text-slate-400 font-bold text-cyan-300">{row.p3}</span>}
                  </td>
                  <td className="py-4 text-center font-bold">
                    {typeof row.p4 === "boolean" ? (row.p4 ? <Check className="w-4.5 h-4.5 text-cyan-400 mx-auto" /> : <X className="w-4.5 h-4.5 text-slate-600 mx-auto" />) : <span className="text-[10px] text-slate-400 font-bold text-purple-300">{row.p4}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ accordion section */}
      <section className="max-w-4xl mx-auto px-6 space-y-8 pt-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block font-mono">COMMUNITY QUERIES</span>
          <h2 className="text-2xl md:text-3.5xl font-extrabold text-white">Frequently Answered Parameters</h2>
          <p className="text-slate-400 text-xs leading-normal">
            Understand how our deployment pipeline, server hosting configuration, and code delivery operates.
          </p>
        </div>

        {/* FAQs Accordion Cards list */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isActive = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-750 transition-all"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <HelpCircle className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-slate-950 flex items-center justify-center border border-slate-800 shrink-0">
                    {isActive ? (
                      <ChevronDown className="w-4.5 h-4.5 text-cyan-400 transform rotate-180 transition-transform" />
                    ) : (
                      <ChevronRight className="w-4.5 h-4.5 text-slate-400 transition-transform" />
                    )}
                  </div>
                </button>

                {isActive && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-350 leading-relaxed border-t border-slate-850 bg-slate-950/20 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
