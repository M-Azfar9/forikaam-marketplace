"use client";

import { useState } from "react";

interface CityInfo {
  name: string;
  status: "active" | "planned" | "upcoming";
  phase: string;
  launchMonth: string;
  targetText: string;
  color: string;
  glowClass: string;
}

export default function PakistanMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const cities: CityInfo[] = [
    {
      name: "Karachi & South Zone",
      status: "active",
      phase: "Phase 1 - Pilot",
      launchMonth: "Month 4",
      targetText: "Target: 500 verified workers in 60 days. Launch region core.",
      color: "#00FF87",
      glowClass: "bg-emerald-400 shadow-[0_0_20px_#00FF87]",
    },
    {
      name: "Punjab & Central Hubs",
      status: "planned",
      phase: "Phase 2 - Expansion",
      launchMonth: "Month 8",
      targetText: "Target: 2,000 workers. Pakistan's largest urban economy.",
      color: "#00A651",
      glowClass: "bg-emerald-600 shadow-[0_0_15px_#00A651]",
    },
    {
      name: "Rawalpindi / Islamabad",
      status: "planned",
      phase: "Phase 2 - Expansion",
      launchMonth: "Month 8",
      targetText: "Target: 1,000 workers. Capital region services.",
      color: "#00A651",
      glowClass: "bg-emerald-600 shadow-[0_0_15px_#00A651]",
    },
    {
      name: "Faisalabad & Tier-2 Cities",
      status: "upcoming",
      phase: "Phase 3 - Scale",
      launchMonth: "Year 3",
      targetText: "Future expansion across Punjab, Sindh, KPK & Quetta.",
      color: "#1E293B",
      glowClass: "bg-slate-700 shadow-none",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      {/* City Listing Cards */}
      <div className="lg:col-span-5 space-y-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
              hoveredCity === city.name
                ? "bg-slate-900/60 border-emerald-500/50 scale-[1.02]"
                : "bg-slate-950/40 border-slate-800"
            }`}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  {city.status === "active" && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-3 w-3`}
                    style={{ backgroundColor: city.color }}
                  ></span>
                </span>
                <h4 className="font-subdisplay font-bold text-white text-lg">{city.name}</h4>
              </div>
              <span
                className={`text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded uppercase ${
                  city.status === "active"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : city.status === "planned"
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {city.launchMonth}
              </span>
            </div>
            
            <p className="text-xs text-emerald-400 font-mono mb-2">{city.phase}</p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{city.targetText}</p>
          </div>
        ))}
      </div>

      {/* Styled Interactive SVG Map Area */}
      <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] sm:min-h-[440px] rounded-2xl bg-slate-950/30 border border-slate-800/50 p-6 overflow-hidden">
        {/* Glow grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,166,81,0.06)_0%,transparent_60%)]" />
        
        {/* Map Vector Overlay */}
        <svg
          className="w-full h-full max-h-[420px] max-w-sm"
          viewBox="0 0 400 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Conceptual Stylized Outline of Pakistan */}
          {/* Main borders simplified for a tech style */}
          <path
            d="M50,390 L100,380 L130,410 L160,400 L180,415 L220,380 L230,340 L260,335 L300,310 L320,320 L350,280 L330,220 L360,180 L340,110 L310,60 L280,70 L265,50 L250,90 L240,110 L200,160 L180,180 L160,200 L110,210 L80,240 L60,265 L100,285 L85,320 L50,350 Z"
            fill="#101026"
            stroke="#1E1E3F"
            strokeWidth="3"
            opacity="0.8"
          />
          <path
            d="M50,390 L100,380 L130,410 L160,400 L180,415 L220,380 L230,340 L260,335 L300,310 L320,320 L350,280 L330,220 L360,180 L340,110 L310,60 L280,70 L265,50 L250,90 L240,110 L200,160 L180,180 L160,200 L110,210 L80,240 L60,265 L100,285 L85,320 L50,350 Z"
            stroke="#00A651"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            opacity="0.35"
          />

          {/* Activity Curves */}
          {/* Central to South curve */}
          <path
            d="M 285,245 Q 220,310 180,390"
            stroke="url(#arcGradientGreen)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            opacity={hoveredCity === "Punjab & Central Hubs" || hoveredCity === "Karachi & South Zone" ? "0.9" : "0.4"}
          />
          
          {/* Central to Capital curve */}
          <path
            d="M 285,245 Q 280,180 275,115"
            stroke="url(#arcGradientOrange)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            opacity={hoveredCity === "Punjab & Central Hubs" || hoveredCity === "Rawalpindi / Islamabad" ? "0.9" : "0.4"}
          />

          {/* Gradients definitions for curves */}
          <defs>
            <linearGradient id="arcGradientGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF87" />
              <stop offset="100%" stopColor="#00A651" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="arcGradientOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF87" />
              <stop offset="100%" stopColor="#00A651" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Glowing City Dots */}
          {/* Southern Zone Dot (Active - Phase 1 Pilot) */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCity("Karachi & South Zone")}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <circle cx="180" cy="390" r="18" fill="#00A651" opacity="0.25" className="animate-ping" style={{ animationDuration: '2s' }} />
            <circle cx="180" cy="390" r="8" fill="#00FF87" />
            <circle cx="180" cy="390" r="11" stroke="#00FF87" strokeWidth="1.5" opacity="0.8" />
            
            {/* Pulsing signal arcs on launch city */}
            <path d="M 180,370 A 20,20 0 0,1 200,390" stroke="#00FF87" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-pulse" />
            <path d="M 160,390 A 20,20 0 0,1 180,410" stroke="#00FF87" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-pulse" />

            <text x="180" y="420" fill="#00FF87" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SOUTH ZONE</text>
          </g>

          {/* Central Zone Dot (Planned - Phase 2 Expansion) */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCity("Punjab & Central Hubs")}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <circle cx="285" cy="245" r="14" fill="#00A651" opacity="0.15" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="285" cy="245" r="7" fill="#00A651" />
            <circle cx="285" cy="245" r="9" stroke="#00A651" strokeWidth="1" opacity="0.6" />
            
            <text x="285" y="225" fill="#34D399" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CENTRAL ZONE</text>
          </g>

          {/* Capital Dot */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHoveredCity("Rawalpindi / Islamabad")}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <circle cx="275" cy="115" r="14" fill="#00A651" opacity="0.15" className="animate-ping" style={{ animationDuration: '3.5s' }} />
            <circle cx="275" cy="115" r="6" fill="#00A651" />
            <circle cx="275" cy="115" r="8" stroke="#00A651" strokeWidth="1" opacity="0.6" />
            <text x="325" y="120" fill="#34D399" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CAPITAL ZONE</text>
          </g>

          {/* Simulated Activity indicators */}
          {hoveredCity === "Karachi & South Zone" && (
            <circle cx="160" cy="360" r="3" fill="#00FF87" className="animate-bounce" />
          )}
        </svg>

        {/* Floating tooltip */}
        {hoveredCity && (
          <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-lg border border-emerald-500/20 pointer-events-none">
            <span className="text-[10px] font-mono tracking-wider text-emerald-400 block uppercase">
              Map Focus: {hoveredCity}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
