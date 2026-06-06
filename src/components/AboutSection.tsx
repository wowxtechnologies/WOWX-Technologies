import { Award, Compass, Heart, ShieldCheck, Flame, User, Rocket, Calendar } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      title: "Authentic Accountability",
      desc: "No mock templates or hidden software fees. We deliver flat-rate premium codes with entire master file handovers.",
      icon: ShieldCheck,
      color: "text-cyan-400 bg-cyan-950/60 border-cyan-900"
    },
    {
      title: "Localized Accessibility",
      desc: "Bringing SaaS-grade, sub-second latency software systems to small merchants and clinics in Madhya Pradesh at affordable entry rates.",
      icon: Compass,
      color: "text-purple-400 bg-purple-950/60 border-purple-900"
    },
    {
      title: "Clean Speed Optimization",
      desc: "Every assembly line we compile registers 95+ light scores. Quick loads increase patient bookings and sales conversions.",
      icon: Flame,
      color: "text-amber-400 bg-amber-950/60 border-amber-900"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Foundational Spark",
      desc: "Initially formed as a private elite consultancy, scoping custom scripts and SEO hacks for local schools and clinics."
    },
    {
      year: "2025",
      title: "WOWX System Launch",
      desc: "Officially registered WOWX Technologies in Morena. Assembled our core team and deployed our local in-memory Lead Engine."
    },
    {
      year: "2026",
      title: "Scaling New Heights",
      desc: "Currently managing 48+ active regional setups. Launching our custom interactive AI Consultant to assist clients 24/7."
    }
  ];

  return (
    <div id="section-about" className="space-y-16 pb-16">
      {/* Title Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block font-mono">OUR CHRONICLE</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Pioneering Regional Innovation
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          The story, principles, and software leaders driving the next generation of web experience layouts from Morena, India.
        </p>
      </section>

      {/* Main Core Story Profile */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">WHY WE STARTED</span>
            <h2 className="text-2.5xl md:text-3.5xl font-bold text-white tracking-tight">
              Bypassing Bloated Templates for True Craftsmanship
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans space-y-4">
            Most digital agencies sell expensive WordPress platforms stuffed with third-party tracking scripts and bulky templates that crawl on mobile networks. Outdated layouts lead directly to dropped customer bookings and wasted marketing expenditures.
            <br /><br />
            WOWX Technologies was founded by tech visionaries in Morena, Madhya Pradesh, to bridge this divide. We engineer blazing-fast, hand-coded, responsive websites and dynamic panels that look premium, rank first on Google, and function on any mobile speed.
          </p>

          {/* Mission & Vision Twin Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-850 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">MISSION STATEMENT</span>
              <h4 className="text-base font-bold text-slate-100">Elevate Local Business Presence</h4>
              <p className="text-slate-450 text-xs leading-normal">
                To hand-code elite, secure, and SEO-optimized software architectures accessible and extremely affordable for small regional enterprises.
              </p>
            </div>

            <div className="p-5 bg-slate-950/40 rounded-xl border border-slate-850 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase">CORPORATE VISION</span>
              <h4 className="text-base font-bold text-slate-100">Become the Trust Capital of MP</h4>
              <p className="text-slate-450 text-xs leading-normal">
                To create a unified digital ecosystem where physical brick-and-mortar stores sync checkouts using seamless UPI qr layouts.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Founder & Office visual profile */}
        <div className="lg:col-span-5 p-6 bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>

          <div className="relative rounded-xl overflow-hidden h-[240px] border border-slate-805">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
              alt="WOWX Technologies Founder Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter saturate-75 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-base font-bold text-slate-100">Senior Team Lead</h4>
              <p className="text-[10px] font-semibold text-cyan-400 tracking-wider font-mono">WOWX TECHNOLOGIES CORE FOUNDER</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-200">A Message from Regional Leadership</h4>
            <p className="text-slate-400 text-xs leading-relaxed italic font-sans">
              "We believe our local clinic practitioners, retail stores, academies, and private coaches deserve premium web layouts that look exactly like futuristic Silicon Valley setups. We code with pride."
            </p>
            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5 pt-2">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              Morena Headquarters Staff Integration
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <h3 className="text-xl md:text-2xl font-black text-white text-center">Our Core Operating Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-905/45 border border-slate-850 rounded-xl space-y-4 hover:border-slate-750 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 ${val.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-base text-slate-100">{val.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline growth Journey Section */}
      <section className="max-w-4xl mx-auto px-6 space-y-12 pt-8">
        <h3 className="text-xl md:text-2xl font-black text-white text-center">Our Evolution Journey</h3>

        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-[2px] before:bg-slate-800">
          {milestones.map((mil, idx) => (
            <div
              key={idx}
              className="relative pl-10 space-y-2 group"
            >
              {/* Dot decoration */}
              <div className="absolute left-[11px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors z-10 shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
              
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-black text-cyan-400 font-mono tracking-wide">{mil.year}</span>
                <h4 className="text-base font-bold text-slate-200">{mil.title}</h4>
              </div>
              <p className="text-slate-450 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                {mil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
