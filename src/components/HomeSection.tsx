import { SERVICES, PROJECTS, TESTIMONIALS } from "../data";
import { ArrowRight, Flame, Shield, Award, Users, Search, Code, CheckCircle, Zap } from "lucide-react";
import AINetworkCanvas from "./AINetworkCanvas";

interface HomeSectionProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function HomeSection({ onNavigate, onOpenConsultation }: HomeSectionProps) {
  return (
    <div id="section-home" className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Futuristic glowing grids & canvas */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-slate-900 to-slate-950 z-0"></div>
        <AINetworkCanvas />

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Hero text items */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-950/80 border border-cyan-800/65 rounded-full text-xs font-semibold tracking-wider text-cyan-300 uppercase mx-auto lg:mx-0 animate-bounce">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              Morena's Premier Tech Agency
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans">
              Transforming Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Powerful Digital
              </span>{" "}
              Experiences
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional websites, tailored web applications, and premium digital solutions custom-engineered to expand your local business online. Accessibility meets cutting-edge innovation.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                id="hero-free-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
              <button
                id="hero-view-projects-btn"
                onClick={() => onNavigate("projects")}
                className="w-full sm:w-auto px-8 py-4 bg-slate-905/85 hover:bg-slate-800 text-slate-100 font-bold rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer flex items-center justify-center"
              >
                View Handcrafted Projects
              </button>
            </div>

            {/* Social Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-4 border-t border-slate-800/60 max-w-lg mx-auto lg:mx-0 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-cyan-400" />
                <span>Standard compliance audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-purple-400" />
                <span>Responsive micro-renders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-blue-400" />
                <span>Local Support & Hosting</span>
              </div>
            </div>
          </div>

          {/* Right Floating Dashboard Preview Illustration Component */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] h-[380px] rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-700/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden group">
              {/* Inner glowing effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

              {/* Fake Window Controls */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-850">
                <div className="w-3 h-3 rounded-full bg-rose-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/60"></div>
                <span className="text-[10px] font-mono text-slate-500 ml-2 tracking-widest">WOWX_CORE_RUNNING</span>
              </div>

              {/* Scoping stats display */}
              <div className="space-y-4 py-4 flex-1 flex flex-col justify-center">
                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1 transform group-hover:translate-x-1 transition-transform">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Core Framework</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-200">React + Vite SPA</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-400 rounded-full font-bold border border-cyan-900">ACTIVE</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1 transform group-hover:-translate-x-1 transition-transform">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">SEO indexing benchmark</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-200">Mobile LCP metric</span>
                    <span className="font-mono text-xs font-black text-emerald-400">99 / 100</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1 transform group-hover:translate-y-1 transition-transform">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Frictionless checkouts</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-200">UPI Fast Gateway</span>
                    <span className="text-xs font-bold text-slate-300">₹1499 Starter tier</span>
                  </div>
                </div>
              </div>

              {/* Simulated active node count footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-850 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  Node sync ok
                </span>
                <span className="font-mono text-slate-500">Morena MP 476001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section / Regional Pride */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 block">Trust & Reliability</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-200">Empowering Regional Businesses & Coaches</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-85 text-slate-400 font-mono text-xs text-center font-bold">
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-850/60 w-full hover:border-slate-700 hover:text-white transition-colors">
              🏥 CARE MEDICAL CLINICS
            </div>
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-850/60 w-full hover:border-slate-700 hover:text-white transition-colors">
              🎓 CHAMBAL COACHING
            </div>
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-850/60 w-full hover:border-slate-700 hover:text-white transition-colors">
              💼 wealth growth partners
            </div>
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-850/60 w-full hover:border-slate-700 hover:text-white transition-colors">
              🍰 JAIN SWEETS & BAKERY
            </div>
          </div>
        </div>
      </section>

      {/* Stat counters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "48+", label: "Regional Clients Live", desc: "Local clinics, shops, and institutions" },
            { value: "99.9%", label: "Uptime Performance SLA", desc: "Supervised high-velocity hosting" },
            { value: "3.5x", label: "Average Traffic Expansion", desc: "Through structured local SEO setup" },
            { value: "30 Mins", label: "Estimated Inquiry Response", desc: "Rapid consultation chat review" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl hover:border-slate-700/80 transition-all text-center md:text-left space-y-1.5"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-400 leading-normal">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Premium Services Engine</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We pack maximum value and custom coding craftsmanship into every digital deployment. No shortcuts, just robust code.
            </p>
          </div>
          <button
            id="view-all-services-btn"
            onClick={() => onNavigate("services")}
            className="text-cyan-400 hover:text-cyan-300 font-bold self-start md:self-auto flex items-center gap-1.5 group cursor-pointer text-sm"
          >
            Explore All 9 Services
            <ArrowRight className="w-5.5 h-5.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.shortDesc}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Timeline: <span className="text-slate-300 font-bold">{item.timeline}</span></span>
                <button
                  id={`learn-more-${item.id}`}
                  onClick={() => onNavigate("services")}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Features
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose WOWX Page details */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Showcase Box info */}
          <div className="relative p-1 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[340px] flex items-center justify-center">
            {/* Visual background grids */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-slate-900 to-transparent z-0"></div>
            <div className="relative text-center p-8 space-y-6 z-10 max-w-md">
              <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-mono px-3 py-1 bg-cyan-950 border border-cyan-900 rounded-full font-bold">
                CRAFT OVER DEFAULT
              </span>
              <h3 className="text-2xl font-black text-white">We Build For High Conversion Rate</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Most agencies drop bulk generic templates. We inspect your local competition, sculpt unique copy structures, block uncompressed assets weight, and ping Google directly to maximize indexation.
              </p>
              <div className="flex justify-center gap-4 text-xs font-mono text-slate-400">
                <div className="px-3 py-1 bg-slate-950/60 rounded border border-slate-850">99+ Pagespeed</div>
                <div className="px-3 py-1 bg-slate-950/60 rounded border border-slate-850">0.4s First Render</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">Startup Vision</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Coded For Growth, Pricing For Accessibility</h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                WOWX Technologies brings futuristic SaaS engineering into regional enterprise settings. We are the architects of your digital transformation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "No Subscription Lock-In", desc: "You maintain 100% control of your domain and host keys. No hidden software billing or arbitrary termination penalties." },
                { title: "SEO-Friendly Structural Marking", desc: "We map standard JSON-LD Schema on every deployment, ensuring local searches for doctors, bakeshops, or academies show your listing first." },
                { title: "UPI Scan Checkouts Activated", desc: "We integrate UPI dynamic QR configurations so customers can checkout seamlessly using standard Indian payment apps like PhonePe, GPay, or Paytm." },
              ].map((adv, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-slate-905/30 border border-slate-850 rounded-xl hover:border-slate-850 transition-all">
                  <div className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0 text-cyan-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">{adv.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">Implementation Timeline</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">How We Deploy Your Platform</h2>
          <p className="text-slate-400 text-xs md:text-sm">
            Our step-by-step pipeline guarantees strict quality adherence, fast feedback loops, and transparent milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Strategy Scoping", desc: "We review your service target keywords, finalize pricing models, and map out the sitemap flow." },
            { step: "02", title: "Atmospheric Wireframe", desc: "Our squad designs high-fidelity UI layout mockups, aligning beautiful typography and colors." },
            { step: "03", title: "Custom Code Assembly", desc: "We compile responsive JSX arrays using Vite, Tailwind, and local in-memory storage elements." },
            { step: "04", title: "Google Launch & Sync", desc: "We register your Google maps listing, publish sitemaps to web crawler hubs, and sync lead engines." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-900/40 border border-slate-850 rounded-xl relative group hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-4xl font-black text-cyan-400/20 mb-4 group-hover:text-cyan-400/40 transition-colors">{item.step}</div>
              <h4 className="font-bold text-base text-slate-100 mb-2">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">The Coding Engine</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Modern Tech Stack Architecture</h2>
          <p className="text-slate-400 text-xs md:text-sm">
            We avoid slow Wordpress drag-and-drop. We code directly using premium modern frameworks ensuring secure, lightweight, and durable deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "React 19 & Vite", rate: "Fast Load Time" },
            { name: "Tailwind CSS v4", rate: "Adaptive Styling" },
            { name: "Node.js Express", rate: "Solid Web APIs" },
            { name: "Firebase backend", rate: "Client-safe Sync" },
            { name: "Framer Motion", rate: "Immersive Micro-interactions" },
            { name: "Google Analytics", rate: "User Behavior Metrics" },
            { name: "Schema JSON-LD", rate: "SEO Search Rank Boost" },
            { name: "TypeScript", rate: "Secure Error Prevention" }
          ].map((tech, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-900/50 hover:bg-slate-850 border border-slate-800 rounded-xl flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">{tech.rate}</span>
              <h4 className="text-sm font-semibold text-slate-200 mt-2">{tech.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative p-8 md:p-16 bg-gradient-to-r from-slate-900 to-cyan-950/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-center space-y-8">
          {/* Subtle decoration nodes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block animate-pulse">Let's Construct Your Digital Presence</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Ready to Double Your Local Customers?</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Inquire today and get a personalized, fast-loading, SEO-ready mockup customized for your target physical store, clinic, or consulting business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
            <button
              id="cta-get-free-consult-btn"
              onClick={onOpenConsultation}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer text-sm"
            >
              Get Free Consultation
            </button>
            <button
              id="cta-call-direct-btn"
              onClick={() => {
                window.location.href = "tel:9479627447";
              }}
              className="w-full px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-slate-200 font-bold border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer text-sm"
            >
              Call Direct: +91 9479627447
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
