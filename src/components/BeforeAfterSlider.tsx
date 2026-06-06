import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Typical Local Site",
  afterLabel = "WOWX Premium Build",
  height = "h-[320px]"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle touch and mouse mechanics
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative ${height} w-full rounded-xl overflow-hidden border border-slate-700 select-none group cursor-ew-resize`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Outdated layout) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={beforeImage}
          alt="Outdated typical layout mockup"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale opacity-90 contrast-90"
        />
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 text-xs text-slate-300 font-mono rounded border border-slate-700/60 font-semibold uppercase tracking-wider z-10 transition-transform">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Slick cyan gradient themed coded layout) */}
      <div
        className="absolute inset-y-0 left-0 h-full overflow-hidden transition-all duration-75"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
          <img
            src={afterImage}
            alt="Spectacular premium custom craft by WOWX Technologies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter saturate-100"
          />
        </div>
        <div className="absolute top-4 right-4 bg-cyan-950/90 backdrop-blur px-3 py-1 text-xs text-cyan-300 font-mono rounded border border-cyan-800/80 font-bold uppercase tracking-wider z-10 whitespace-nowrap">
          ✨ {afterLabel}
        </div>
      </div>

      {/* Vertical Slider Bar Divider line */}
      <div
        className="absolute inset-y-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Glowing Center circular grip handle button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] z-30 transition-transform group-hover:scale-110">
          <span className="sr-only">Position slider</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-cyan-400"
          >
            <path d="m9 18-6-6 6-6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Drag instructive prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/70 backdrop-blur px-4 py-1.5 rounded-full text-[11px] text-slate-300 font-medium tracking-wide border border-slate-800 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        Drag handle to compare build transformations
      </div>
    </div>
  );
}
