import { useState } from "react";
import { Menu, X, Rocket, Sparkles, Code, MessageSquare } from "lucide-react";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ activePage, onPageChange, onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { key: "home", label: "Home" },
    { key: "services", label: "Services" },
    { key: "projects", label: "Projects" },
    { key: "pricing", label: "Pricing" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact Space" },
  ];

  const handleLinkClick = (key: string) => {
    onPageChange(key);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-sticky-navigation"
      className="fixed top-0 inset-x-0 z-40 bg-slate-950/75 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* LOGO */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-2 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div>
            <span className="font-extrabold text-white tracking-widest text-sm block">WOWX</span>
            <span className="text-[10px] text-slate-500 block font-mono">TECHNOLOGIES</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.key}
              id={`nav-link-${link.key}`}
              onClick={() => handleLinkClick(link.key)}
              className={`text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                activePage === link.key
                  ? "text-cyan-400 font-bold"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Quick action consultation trigger */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-action-consult-btn"
            onClick={onOpenConsultation}
            className="px-4.5 py-2.5 bg-cyan-950/60 border border-cyan-800/80 rounded-xl hover:bg-cyan-950/90 text-cyan-400 text-xs font-bold tracking-wide transition-all uppercase cursor-pointer"
          >
            Free consultation
          </button>
        </div>

        {/* Mobile Navigation Drawer trigger */}
        <button
          id="nav-mobile-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer transition-colors"
        >
          <span className="sr-only">Toggle navigation drawer</span>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation slider */}
      {isOpen && (
        <div id="nav-mobile-drawer" className="md:hidden bg-slate-950 border-b border-slate-900 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <button
                key={link.key}
                id={`nav-mobile-link-${link.key}`}
                onClick={() => handleLinkClick(link.key)}
                className={`text-left py-2 text-sm font-bold uppercase tracking-wide cursor-pointer transition-colors ${
                  activePage === link.key ? "text-cyan-400" : "text-slate-405 hover:text-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-900 flex flex-col gap-2">
            <button
              id="nav-mobile-consult-btn"
              onClick={() => {
                onOpenConsultation();
                setIsOpen(false);
              }}
              className="w-full text-center py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xs text-white rounded-xl uppercase tracking-wide cursor-pointer"
            >
              Free consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
