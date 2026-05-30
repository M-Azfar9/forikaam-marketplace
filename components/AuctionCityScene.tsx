"use client";

import { useState, useEffect } from "react";

export default function AuctionCityScene() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [role, setRole] = useState<"homeowner" | "karigar">("homeowner");
  const [tickerItems, setTickerItems] = useState([
    { id: 1, text: "AC Tech requested in Clifton, Karachi · Suggested Rs. 2,200", time: "Just now" },
    { id: 2, text: "Electrician hired in DHA Phase 6 · Saved 18% via bidding", time: "2m ago" },
    { id: 3, text: "Plumber biometric verified by NADRA Nishan API", time: "5m ago" },
    { id: 4, text: "Washing Machine Repair posted in KDA Scheme · 5 bids live", time: "8m ago" },
  ]);

  // Autoplay simulation
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Simulated ticks for live feed activity
  useEffect(() => {
    const feeds = [
      "Plumber requested in Karachi South Zone · Suggested Rs. 1,500",
      "Electrician verified in Karachi Central · NADRA Biometric Clear",
      "Painter hired in Clifton · Hired at Rs. 3,500 (down from Rs. 4,200)",
      "Carpenter posted in DHA Phase 5 · Seeking furniture polish",
      "AC Maintenance booked in Karachi South · 4.9★ Karigar Sajid Ali",
    ];

    const interval = setInterval(() => {
      const randomFeed = feeds[Math.floor(Math.random() * feeds.length)];
      setTickerItems((prev) => [
        { id: Date.now(), text: randomFeed, time: "Just now" },
        ...prev.slice(0, 3),
      ]);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[450px] md:min-h-[500px] flex flex-col justify-between p-6 bg-slate-950/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl overflow-hidden selection:bg-emerald-500 selection:text-black">
      {/* Top Header Dashboard HUD */}
      <div className="flex items-center justify-between border-b border-slate-900/80 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2w h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400">
            ForiKaam Bidding Hub
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setRole("homeowner")}
            className={`px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-md border transition-all cursor-pointer ${
              role === "homeowner"
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                : "border-slate-800 text-slate-500 hover:text-slate-300"
            }`}
          >
            Homeowner View
          </button>
          <button
            onClick={() => setRole("karigar")}
            className={`px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-md border transition-all cursor-pointer ${
              role === "karigar"
                ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                : "border-slate-800 text-slate-500 hover:text-slate-300"
            }`}
          >
            Karigar View
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Dynamic Mobile App Interface Simulator */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <div className="relative w-full max-w-[270px] aspect-[9/18.5] bg-[#070715] rounded-[36px] border-4 border-slate-900 p-2 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Speaker & Camera notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
              <div className="w-10 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* Screen Header */}
            <div className="pt-4 pb-2 px-3 border-b border-slate-900/60 flex items-center justify-between text-[9px] text-slate-500 font-mono">
              <span>FORIKAAM</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Bidding
              </span>
            </div>

            {/* Screen Content Wrapper */}
            <div className="flex-1 py-3 px-2 overflow-hidden flex flex-col justify-between">
              
              {/* Homeowner Flow View */}
              {role === "homeowner" && (
                <div className="flex-1 flex flex-col justify-between gap-2 h-full">
                  {/* STEP 0: Posting a job */}
                  {activeStep === 0 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">Step 1: Request</span>
                        <h4 className="text-white text-xs font-bold font-subdisplay leading-tight">AC Installation & Leak Repair</h4>
                        
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[10px] space-y-1">
                          <div className="flex justify-between text-slate-400">
                            <span>Category:</span>
                            <span className="text-white font-semibold">Electrician</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>Suggested Range:</span>
                            <span className="text-emerald-400 font-bold">Rs. 1,800 - 2,200</span>
                          </div>
                        </div>

                        <div className="text-center py-2 border border-dashed border-emerald-500/20 rounded-xl bg-emerald-950/10">
                          <p className="text-[9px] text-slate-400">Your Offered Budget</p>
                          <p className="text-lg font-mono font-black text-emerald-400">Rs. 2,000</p>
                        </div>
                      </div>

                      <div className="w-full py-2 bg-emerald-500 text-black text-center text-[10px] font-bold uppercase rounded-lg shadow-lg animate-pulse">
                        Posting to Network...
                      </div>
                    </div>
                  )}

                  {/* STEP 1: Geofencing radar search */}
                  {activeStep === 1 && (
                    <div className="flex-1 flex flex-col justify-center items-center space-y-3 animate-fade-in">
                      <div className="relative w-20 h-20 rounded-full border border-emerald-500/30 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-ping" />
                        <div className="absolute w-12 h-12 rounded-full border border-emerald-500/40 animate-pulse" />
                        <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="text-white text-xs font-bold">Locating Nearby Karigars</h4>
                        <p className="text-[9px] text-slate-400">Geofencing to 5km radius...</p>
                        <p className="text-[10px] font-mono text-emerald-400 font-bold">34 Electricians active</p>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Live bids coming in */}
                  {activeStep === 2 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono text-emerald-400">Live Bids Received</span>
                          <span className="text-[9px] bg-emerald-950 px-1.5 py-0.5 rounded text-emerald-400 animate-pulse">2 active</span>
                        </div>

                        {/* Bid Card 1 */}
                        <div className="p-2 rounded-xl bg-slate-900 border border-emerald-500/30 relative overflow-hidden transition-all duration-300">
                          <div className="flex justify-between items-center">
                            <span className="text-[11px] font-bold text-white">Sajid Ali</span>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">Rs. 2,100</span>
                          </div>
                          <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                            <span>★ 4.9 (124 jobs)</span>
                            <span>1.2 km away</span>
                          </div>
                          <div className="absolute top-0 right-0 w-1.5 h-full bg-emerald-500" />
                        </div>

                        {/* Bid Card 2 */}
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden opacity-85">
                          <div className="flex justify-between items-center">
                            <span className="text-[11px] font-bold text-white">Kamran Khan</span>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">Rs. 1,950</span>
                          </div>
                          <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                            <span>★ 4.8 (89 jobs)</span>
                            <span>2.4 km away</span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-center text-[10px] font-bold uppercase rounded-lg">
                        Select Best Bid
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Selecting and NADRA Scan */}
                  {activeStep === 3 && (
                    <div className="flex-1 flex flex-col justify-center items-center space-y-3 animate-fade-in">
                      <div className="relative w-16 h-16 rounded-full border border-emerald-500 flex items-center justify-center bg-slate-900">
                        {/* Fingerprint laser scanner bar */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-emerald-400 animate-bounce" />
                        <svg className="w-8 h-8 text-emerald-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2v-7z M8 11c0-2.2 1.8-4 4-4s4 1.8 4 4v7c0 2.2-1.8 4-4 4s-4-1.8-4-4v-7z" />
                        </svg>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
                          <span>NISHAN PAKISTAN API</span>
                        </div>
                        <h4 className="text-white text-xs font-bold">Verifying Karigar Identity</h4>
                        <p className="text-[9px] text-slate-400">Calling biometric record databases...</p>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Hired & Travelling */}
                  {activeStep === 4 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <div className="p-2 rounded-xl bg-slate-900 border border-emerald-500/20 text-center">
                          <p className="text-[9px] text-slate-400">Verified Karigar Dispatched</p>
                          <p className="text-xs font-bold text-white">Kamran Khan is on the way</p>
                          <p className="text-[10px] font-mono text-emerald-400 font-bold mt-1">ETA: 10 mins</p>
                        </div>

                        {/* Interactive mini chat bubble */}
                        <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-900 flex flex-col gap-1">
                          <span className="text-[8px] font-mono text-slate-500">Kamran Khan (Karigar)</span>
                          <p className="text-[10px] text-slate-200 font-urdu text-right leading-relaxed">بیا، میں اوزار لے کر نکل رہا ہوں۔</p>
                          <p className="text-[9px] text-slate-400">"I am coming with my tools."</p>
                        </div>
                      </div>

                      <div className="py-2 bg-emerald-500 text-black text-center text-[10px] font-bold uppercase rounded-lg">
                        Karigar Arrived
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Karigar Flow View */}
              {role === "karigar" && (
                <div className="flex-1 flex flex-col justify-between gap-2 h-full">
                  {/* STEP 0: Receiving job card */}
                  {activeStep === 0 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">New Job Alert</span>
                        <h4 className="text-white text-xs font-bold">Washing Machine Repair</h4>
                        <p className="text-[10px] text-slate-400">DHA Phase 4 · 2.5 km away</p>

                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[9px] space-y-1">
                          <p className="text-slate-400 leading-tight">"Machine is leaking from the bottom during spin cycles."</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[8px] text-slate-400 text-center font-mono">Suggested: Rs. 1,500</p>
                        <div className="py-2 bg-emerald-500 text-black text-center text-[10px] font-bold uppercase rounded-lg">
                          Tap to Bid Rs. 1,600
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 1: Biometric Verification */}
                  {activeStep === 1 && (
                    <div className="flex-1 flex flex-col justify-center items-center space-y-3 animate-fade-in">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h4 className="text-white text-xs font-bold">NADRA Verified Profile</h4>
                        <p className="text-[9px] text-slate-400">Required to unlock high-budget jobs</p>
                        <span className="mt-2 inline-block text-[9px] bg-emerald-950/60 px-2 py-0.5 rounded text-emerald-400 font-mono">Status: Verified</span>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Custom Bidding */}
                  {activeStep === 2 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <h4 className="text-white text-xs font-bold">Place Your Bid</h4>
                        <p className="text-[9px] text-slate-400">Offer counters or match client budget.</p>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-slate-900 rounded-lg text-center border border-slate-800">
                            <span className="text-[8px] text-slate-500">Client Budget</span>
                            <span className="block text-[11px] font-bold text-white">Rs. 2,000</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded-lg text-center border border-emerald-500/20">
                            <span className="text-[8px] text-emerald-500 font-bold">Counter Offer</span>
                            <span className="block text-[11px] font-bold text-emerald-400">Rs. 1,900</span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 bg-emerald-500 text-black text-center text-[10px] font-bold uppercase rounded-lg">
                        Submit Counter Bid
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Win state / Match alert */}
                  {activeStep === 3 && (
                    <div className="flex-1 flex flex-col justify-center items-center space-y-3 animate-fade-in">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 text-xl font-bold animate-bounce">
                        ✓
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="text-white text-xs font-bold">Bid Accepted!</h4>
                        <p className="text-[9px] text-slate-400">Hired at Rs. 1,900</p>
                        <p className="text-[9px] text-emerald-400 font-mono">Commission: Rs. 190 (10%)</p>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Job details & Navigation map */}
                  {activeStep === 4 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-2">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          <span className="text-[8px] text-slate-500">Destination</span>
                          <p className="text-[10px] text-white font-bold leading-tight">Clifton Block 5, Karachi</p>
                        </div>
                        
                        <div className="p-2 bg-emerald-950/20 border border-emerald-500/10 rounded-xl">
                          <p className="text-[9px] text-slate-300">Earnings after platform fee:</p>
                          <p className="text-base font-mono font-black text-emerald-400">Rs. 1,710</p>
                        </div>
                      </div>

                      <div className="py-2 bg-emerald-500 text-black text-center text-[10px] font-bold uppercase rounded-lg">
                        Start Trip Navigator
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Simulated iPhone home indicator */}
            <div className="pb-1 flex justify-center z-20">
              <div className="w-20 h-1 bg-slate-800 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Side: Features Tracker & Live Feed */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between h-full">
          
          {/* Active Flow Step Details */}
          <div className="glass-card p-5 rounded-xl border border-emerald-500/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500">
                Interactive Walkthrough
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {activeStep + 1} / 5
              </span>
            </div>

            {/* Title & Desc based on flow step */}
            <div className="space-y-1">
              <h3 className="text-white text-base font-bold font-subdisplay leading-tight">
                {activeStep === 0 && "1. Post Parameterized Request"}
                {activeStep === 1 && "2. geofenced Matchmaking"}
                {activeStep === 2 && "3. Real-time Bids Ledger"}
                {activeStep === 3 && "4. 60-Sec Biometric Check"}
                {activeStep === 4 && "5. Transparent Tracking"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeStep === 0 && "Homeowners enter detailed job parameters. Our AI logic calculates current localized averages to guide fair baseline budgets instantly."}
                {activeStep === 1 && "Request alerts broadcast dynamically to certified workers inside a 5km radius. Ensures prompt arrivals and localized liquidity."}
                {activeStep === 2 && "Workers bid, accept, or counter offered budgets. Homeowners choose based on ratings, bid pricing, and ETA in real time."}
                {activeStep === 3 && "Identity matching via NADRA Nishan API verifies worker CNIC data automatically. Contactless facial validation inside 60 seconds."}
                {activeStep === 4 && "Dispatched workers route directly to client locations. Safe in-app chat eliminates phone privacy vulnerabilities."}
              </p>
            </div>

            {/* HUD dot step tracker */}
            <div className="flex gap-1.5 pt-1">
              {[0, 1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => {
                    setActiveStep(step);
                    setIsPlaying(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeStep === step
                      ? "bg-emerald-500 scale-125 shadow-[0_0_8px_#00ff87]"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Real-time local network activity ticker */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Live Network Activity
            </span>
            <div className="space-y-2">
              {tickerItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-[10px] p-2 bg-slate-900/40 rounded-lg border border-slate-900/60 animate-fade-in"
                >
                  <span className="text-slate-300 truncate max-w-[200px] sm:max-w-xs">{item.text}</span>
                  <span className="text-emerald-500 font-mono shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Simulator HUD Control Bar */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-900/80">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <>
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Pause Demo</span>
              </>
            ) : (
              <>
                <span className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-emerald-500 border-b-[5px] border-b-transparent" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-emerald-400">Play Demo</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveStep(0);
              setIsPlaying(true);
            }}
            className="text-[10px] font-mono uppercase font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>

        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          ForiKaam Bidding Engine v1.2
        </span>
      </div>
    </div>
  );
}
