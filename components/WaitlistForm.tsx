"use client";

import { useState, useRef, useEffect } from "react";
import { Locale } from "../lib/translations";

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
}

interface WaitlistFormProps {
  locale: Locale;
}

export default function WaitlistForm({ locale }: WaitlistFormProps) {
  const [activeTab, setActiveTab] = useState<"homeowner" | "karigar">("homeowner");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Confetti Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Lahore");
  const [trade, setTrade] = useState("Electrician");

  // Local translations dictionary
  const isUrdu = locale === "ur";
  
  const text = {
    tabHomeowner: isUrdu ? "مجھے کام کروانا ہے (ہوم اونر)" : "I Need Work Done (Homeowner)",
    tabKarigar: isUrdu ? "میں کاریگر ہوں (ورکر)" : "I'm a Karigar (Worker)",
    labelName: isUrdu ? "مکمل نام (اردو یا انگریزی)" : "Full Name (Urdu or English)",
    placeholderName: isUrdu ? "مثال: محمد آصف" : "e.g., Muhammad Asif",
    labelPhone: isUrdu ? "موبائل نمبر (واٹس ایپ ترجیحی)" : "Mobile Number (WhatsApp Preferred)",
    placeholderPhone: isUrdu ? "مثال: 03001234567" : "e.g., 03001234567",
    labelTrade: isUrdu ? "اپنے بنیادی ہنر یا پیشے کا انتخاب کریں" : "Select Your Main Skill / Trade",
    labelCity: isUrdu ? "اپنا لانچ سٹی منتخب کریں" : "Select Your Launch City",
    
    cityLahore: isUrdu ? "لاہور" : "Lahore",
    cityKarachi: isUrdu ? "کراچی" : "Karachi",
    cityIslamabad: isUrdu ? "اسلام آباد / راولپنڈی" : "Islamabad / Rawalpindi",
    cityOther: isUrdu ? "دوسرا شہر" : "Other City",
    
    btnSubmitHomeowner: isUrdu ? "ہوم اونر ویٹ لسٹ جوائن کریں ←" : "Join Homeowner Waitlist →",
    btnSubmitKarigar: isUrdu ? "بطور کاریگر رجسٹریشن کریں ←" : "Register as Karigar →",
    btnSubmitting: isUrdu ? "فہرست میں شامل ہو رہا ہے..." : "Joining list...",
    
    errName: isUrdu ? "براہ کرم اپنا نام درج کریں۔" : "Please enter your name.",
    errPhone: isUrdu ? "براہ کرم درست پاکستانی موبائل نمبر درج کریں (مثال: 03001234567)" : "Please enter a valid Pakistani mobile number (e.g., 03001234567).",
    errGeneric: isUrdu ? "کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔" : "Something went wrong. Please try again.",
    errNetwork: isUrdu ? "نیٹ ورک کا مسئلہ۔ انٹرنیٹ کنکشن چیک کریں۔" : "Network error. Please check your connection.",
    
    successTitle: isUrdu ? "شکریہ! 🎉" : "Shukriya! 🎉",
    successSubtitle: isUrdu ? "آپ فوریکام کی ویٹ لسٹ میں شامل ہو چکے ہیں۔" : "You are officially on the ForiKaam Waitlist.",
    successDescHomeowner: isUrdu 
      ? "ہم سروسز شروع کرتے ہی آپ سے واٹس ایپ یا ایس ایم ایس کے ذریعے رابطہ کریں گے۔" 
      : "We will contact you via SMS or WhatsApp as soon as we start boarding verified workers in your city.",
    successDescKarigar: isUrdu
      ? "ہم رجسٹریشن شروع کرتے ہی آپ سے رابطہ کریں گے۔ اپنا شناختی کارڈ تیار رکھیں۔"
      : "We will reach out to you via SMS or WhatsApp to complete your biometric NADRA check when Karigar registration opens in your area.",
    
    btnShareWA: isUrdu ? "واٹس ایپ پر شیئر کریں" : "Share on WhatsApp",
    btnCopyLink: isUrdu ? "لنک کاپی کریں" : "Copy Link",
    copiedMsg: isUrdu ? "لنک کاپی کر لیا گیا ہے!" : "Waitlist link copied to clipboard!"
  };

  // Validate Pakistani mobile number: 03xxxxxxxxx (11 digits)
  const validatePhone = (p: string) => {
    const regex = /^03\d{9}$/;
    return regex.test(p.replace(/[-\s]/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg(text.errName);
      return;
    }
    if (!validatePhone(phone)) {
      setErrorMsg(text.errPhone);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: activeTab,
          name,
          phone,
          city,
          trade: activeTab === "karigar" ? trade : undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        triggerConfetti();
      } else {
        setErrorMsg(data.error || text.errGeneric);
      }
    } catch {
      setErrorMsg(text.errNetwork);
    } finally {
      setLoading(false);
    }
  };

  // Canvas Confetti logic
  const triggerConfetti = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = canvas.parentElement?.clientWidth || 500;
    canvas.height = canvas.parentElement?.clientHeight || 450;

    const colors = ["#00A651", "#00FF87", "#FF6B35", "#FFB347", "#FFFFFF", "#1A1A2E"];
    const particles: ConfettiParticle[] = [];

    // Spawn 120 particles from the bottom center or scattered
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height - 20,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 15 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        alpha: 1,
      });
    }

    particlesRef.current = particles;

    const ctx = canvas.getContext("2d")!;
    const animateConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.vx *= 0.98; // Friction
        p.alpha -= 0.012; // Fade

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
          ctx.fill();
          ctx.restore();
        }
      });

      if (alive) {
        animationFrameRef.current = requestAnimationFrame(animateConfetti);
      }
    };

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animateConfetti();
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleShareWhatsApp = () => {
    const shareText = isUrdu 
      ? `میں نے فوریکام (ForiKaam) کی ویٹ لسٹ جوائن کر لی ہے! پاکستان میں نادرا سے تصدیق شدہ کاریگر اب مناسب قیمت پر ہائر کریں۔ یہاں کلک کر کے شامل ہوں: ${window.location.origin}`
      : `I just joined the waitlist for ForiKaam — Pakistan's first NADRA-verified reverse-auction labor marketplace! Get the right price for plumbing, electrical work, and more. Join here: ${window.location.origin}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="relative w-full p-8 md:p-12 text-center rounded-2xl glass-card border-emerald-500/30 overflow-hidden flex flex-col justify-center items-center min-h-[400px]">
        {/* Canvas overlays for confetti animation */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 text-2xl font-bold glow-green animate-bounce">
          ✓
        </div>
        
        <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-wider mb-2">
          {text.successTitle}
        </h3>
        <p className="text-emerald-400 font-subdisplay font-bold text-lg mb-4">
          {text.successSubtitle}
        </p>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed mb-8">
          {activeTab === "homeowner" ? text.successDescHomeowner : text.successDescKarigar}
          <br />
          <span className="font-mono text-emerald-400 block mt-2">{phone} ({city})</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 z-20">
          <button
            onClick={handleShareWhatsApp}
            className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {text.btnShareWA}
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert(text.copiedMsg);
            }}
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900 text-slate-300 font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
          >
            {text.btnCopyLink}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl glass-card overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-slate-800/80 bg-slate-950/40">
        <button
          type="button"
          onClick={() => { setActiveTab("homeowner"); setErrorMsg(""); }}
          className={`flex-1 py-4 text-center font-subdisplay font-bold text-sm transition-all cursor-pointer ${
            activeTab === "homeowner"
              ? isUrdu
                ? "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5 font-urdu"
                : "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          {text.tabHomeowner}
        </button>
        <button
          type="button"
          onClick={() => { setActiveTab("karigar"); setErrorMsg(""); }}
          className={`flex-1 py-4 text-center font-subdisplay font-bold text-sm transition-all cursor-pointer ${
            activeTab === "karigar"
              ? isUrdu
                ? "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5 font-urdu"
                : "text-emerald-400 border-b-2 border-emerald-500 bg-emerald-500/5"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          {text.tabKarigar}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 text-left">
        {errorMsg && (
          <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-red-400 text-xs sm:text-sm">
            ⚠️ {errorMsg}
          </div>
        )}

        <div>
          <label htmlFor="fullName" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
            {text.labelName}
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={text.placeholderName}
            className="w-full rounded-xl border border-slate-800 bg-[#0c0c1f] px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
            {text.labelPhone}
          </label>
          <input
            id="mobileNumber"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={text.placeholderPhone}
            className="w-full rounded-xl border border-slate-800 bg-[#0c0c1f] px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>

        {activeTab === "karigar" && (
          <div>
            <label htmlFor="workerTrade" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
              {text.labelTrade}
            </label>
            <select
              id="workerTrade"
              value={trade}
              onChange={(e) => setTrade(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-[#0c0c1f] px-4 py-3.5 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
            >
              <option value="Electrician">{isUrdu ? "الیکٹریشن (بجلی والا)" : "Electrician"}</option>
              <option value="Plumber">{isUrdu ? "پلمبر (پائپ والا)" : "Plumber"}</option>
              <option value="Carpenter">{isUrdu ? "کارپینٹر (لکڑی والا)" : "Carpenter"}</option>
              <option value="AC Technician">{isUrdu ? "اے سی ٹیکنیشن" : "AC/Fridge Technician"}</option>
              <option value="Welder">{isUrdu ? "ویلڈر (لوہے والا)" : "Welder"}</option>
              <option value="Painter">{isUrdu ? "پینٹر (رنگ والا)" : "Painter / Polish Worker"}</option>
              <option value="Mason">{isUrdu ? "راج مستری (مستری)" : "Mason / Raj Mistri"}</option>
              <option value="Other">{isUrdu ? "دوسرا پیشہ (ہنر)" : "Other Trade"}</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="signupCity" className="block text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
            {text.labelCity}
          </label>
          <select
            id="signupCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-[#0c0c1f] px-4 py-3.5 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all cursor-pointer"
          >
            <option value="Lahore">{text.cityLahore}</option>
            <option value="Karachi">{text.cityKarachi}</option>
            <option value="Islamabad">{text.cityIslamabad}</option>
            <option value="Other">{text.cityOther}</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full text-white font-display font-black tracking-wider uppercase text-base sm:text-lg transition-all duration-300 cursor-pointer bg-fori-flash glow-green hover:brightness-110 disabled:opacity-50"
          >
            {loading 
              ? text.btnSubmitting 
              : activeTab === "homeowner" 
                ? text.btnSubmitHomeowner 
                : text.btnSubmitKarigar
            }
          </button>
        </div>
      </form>
    </div>
  );
}

