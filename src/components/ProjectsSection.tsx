import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Eye, Sliders, ExternalLink, X, MapPin, Layers, Settings, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

type CategoryFilter = "All" | "Business Websites" | "Educational Websites" | "E-Commerce" | "Portfolio Sites" | "Landing Pages" | "Web Apps";

export default function ProjectsSection({ onOpenConsultation }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Business Websites",
    "Educational Websites",
    "E-Commerce",
    "Portfolio Sites",
    "Landing Pages",
    "Web Apps"
  ];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div id="section-projects" className="space-y-16 pb-16">
      {/* Page Title */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8">
        <span className="text-xs uppercase font-black tracking-widest text-cyan-400 block">HANDCRAFTED BUILDS</span>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Pristine Project Deployments
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Explore our real-world implementations for medical clinics, local bakeries, fitness clubs, and academies. Drag the before/after handles inside each item to view visual transformations.
        </p>
      </section>

      {/* Category Filter Horizontal Rails */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold cursor-pointer transition-all duration-200 border ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent text-white shadow-[0_4px_15px_rgba(6,182,212,0.25)]"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Projects Cards Catalog */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Header / Sliding Comparison Box preview */}
            <div className="p-3">
              <BeforeAfterSlider
                beforeImage={proj.beforeImage}
                afterImage={proj.afterImage}
                beforeLabel="Legacy Site"
                afterLabel="WOWX Upgrade"
                height="h-[200px]"
              />
            </div>

            {/* Profile body entries */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 bg-cyan-950 border border-cyan-900 rounded-full">
                  {proj.category}
                </span>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors pt-2">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
              </div>

              {/* Action indicators */}
              <div className="pt-4 border-t border-slate-850/60 flex items-center justify-between">
                <div className="text-[10px] text-slate-500 font-sans">
                  Location: <span className="text-slate-300">{proj.location || "Madhya Pradesh"}</span>
                </div>
                <button
                  id={`open-detail-${proj.id}`}
                  onClick={() => setSelectedProject(proj)}
                  className="px-3.5 py-1.5 bg-slate-950 hover:bg-slate-850 text-slate-200 font-bold rounded-lg border border-slate-800 hover:border-slate-700 text-xs cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  View Metrics
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-12 p-8 bg-slate-950/40 rounded-2xl border border-slate-900 text-slate-400">
            No projects deployed under this category yet. Select "All" to browse our custom portfolio active systems.
          </div>
        )}
      </section>

      {/* Projects Modal Details Overlay Display */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto"
        >
          <div
            id="modal-card"
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Header Title with quick X */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 font-mono">
                  Case Study Analysis
                </span>
                <h3 className="text-xl font-bold text-slate-100">{selectedProject.title}</h3>
              </div>
              <button
                id="close-modal-btn"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 hover:bg-slate-850 text-slate-400 hover:text-white rounded-lg cursor-pointer transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable contents panel */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual slider & before label */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel="Outdated Legacy Site"
                    afterLabel="Final WOWX Deployment"
                    height="h-[280px]"
                  />
                </div>
                <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-850/60 font-medium text-xs text-slate-400 leading-relaxed">
                  💡 In our diagnostic process, we replace insecure outdated designs with blazing fast systems. Our websites compile within <span className="text-slate-200">0.4s</span> and pass complete <span className="text-slate-200">W3C validation</span> rules.
                </div>
              </div>

              {/* Right Column: Case study parameters */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 bg-cyan-950 border border-cyan-900 rounded-full inline-block">
                    {selectedProject.category}
                  </span>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed pt-2">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Metrics statistics comparison */}
                {selectedProject.stats && (
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Growth Performance metrics</h5>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="p-3 bg-slate-950/70 border border-slate-850 rounded-lg text-center">
                          <div className="text-sm font-bold text-emerald-400">{stat.value}</div>
                          <div className="text-[9px] text-slate-500 font-medium leading-normal mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metadata parameters checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 grid grid-cols-2 gap-y-2 leading-relaxed">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-mono">Client Account</span>
                      <span className="text-slate-200 font-semibold">{selectedProject.clientName || "Regional Enterprise"}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase font-mono">Location Coordinates</span>
                      <span className="text-slate-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {selectedProject.location || "Madhya Pradesh, India"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope features used */}
                {selectedProject.featuresUsed && (
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Coded Capabilities</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.featuresUsed.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] px-2 py-1 bg-slate-950 border border-slate-800 rounded font-semibold text-slate-300">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer triggers */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">Need something similar for your startup?</span>
              <div className="flex items-center gap-3">
                <button
                  id="modal-request-consult-btn"
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation();
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Book consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
