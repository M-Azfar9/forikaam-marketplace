"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AuctionCityScene from "../components/AuctionCityScene";
import PhoneMockupScene from "../components/PhoneMockupScene";
import ShieldParticles from "../components/ShieldParticles";
import PakistanMap from "../components/PakistanMap";
import WaitlistForm from "../components/WaitlistForm";
import { translations, Locale } from "../lib/translations";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  // Custom numeric counter states for the impact section
  const [metric1, setMetric1] = useState(0);
  const [metric2, setMetric2] = useState(0);
  const [metric3, setMetric3] = useState(0);
  const [metric4, setMetric4] = useState(0);

  // Trigger counters on load
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setMetric1(Math.min(Math.round((80.8 / steps) * stepCount * 10) / 10, 80.8));
      setMetric2(Math.min(Math.round((52 / steps) * stepCount), 52));
      setMetric3(Math.min(Math.round((25 / steps) * stepCount), 25));
      setMetric4(Math.min(Math.round((600 / steps) * stepCount), 600));

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const t = translations[locale];
  const isUrdu = locale === "ur";

  const stepsContent = [
    {
      title: isUrdu ? "1۔ کام کی تفصیلی تفصیل بتائیں" : "1. Post a Parameterized Job",
      tagline: isUrdu ? "کام پوسٹ کرنے سے پہلے مکمل تفصیل" : "Clarity before a single bid is placed.",
      description: isUrdu 
        ? "ہماری ایپ کا مراحل وار سوالنامہ مبہم درخواستوں کو ختم کرتا ہے۔ مثال: پلمبر سروسز -> پائپ لیک -> کچن سنک -> تقریباً 1 گھنٹہ -> مٹیریل کی ضرورت نہیں ہے۔ کاریگروں کے ساتھ اضافی پیسوں پر بحث کا مکمل خاتمہ۔"
        : "Our structured job decision tree eliminates vague requests. Example: Plumbing → Leaking Pipe → Kitchen → Under-sink → ~1 hour → Materials not needed. No more arguing with workers about scope creep.",
    },
    {
      title: isUrdu ? "2۔ قیمت کا تعیّن کریں" : "2. AI Suggests a Fair Price Range",
      tagline: isUrdu ? "پاکستان کے مول بھاؤ کلچر کو ڈیجیٹل بنانا" : "Digitizing the culture of bargaining.",
      description: isUrdu
        ? "آپ کے محلے میں اسی نوعیت کے حالیہ کاموں کی تاریخ کو مدنظر رکھتے ہوئے فوریکام ایپ ایک مناسب قیمت تجویز کرتی ہے۔ آپ اس رینج کے مطابق اپنی آفر سیٹ کرتے ہیں۔"
        : "Based on real transaction data from your neighborhood, job type, and time of day, ForiKaam shows you a fair market suggestion. You set your offered price in or around this band.",
    },
    {
      title: isUrdu ? "3۔ کاریگروں کی لائیو بولیاں دیکھیں" : "3. Verified Workers Bid in Real Time",
      tagline: isUrdu ? "قریبی 5 کلومیٹر کے دائرے میں کام بھیجا جائے گا" : "Your job geofenced within 5km.",
      description: isUrdu
        ? "آپ کے 5 کلومیٹر کے دائرے میں موجود تمام نادرا تصدیق شدہ کاریگروں کو فوری طور پر کام کا الرٹ موصول ہوتا ہے۔ وہ اپنے موبائل سے براہِ راست بولی لگاتے یا قبول کرتے ہیں۔"
        : "Every NADRA-verified Karigar in your radius receives your job card instantly. They can accept, counter-offer, or decline right from their phone. Watch live bids arrive on your screen.",
    },
    {
      title: isUrdu ? "4۔ کاریگر منتخب کریں۔ وہ پہنچ جائے گا" : "4. You Choose. They Arrive.",
      tagline: isUrdu ? "حفاظت، ریٹنگ اور مکمل شفافیت" : "Safety, reputation, and transparency.",
      description: isUrdu
        ? "کاریگر کی ریٹنگ، پچھلے کاموں کا ریکارڈ اور شناختی کارڈ کی تصدیق کی تفصیلات دیکھیں۔ اپنی مرضی سے انتخاب کے بعد نقشے پر کاریگر کے آنے کا وقت لائیو دیکھیں۔"
        : "Review real-time bids alongside worker ratings, completion history, and biometric badge details. Once selected, watch the worker's ETA count down on a live map.",
    },
    {
      title: isUrdu ? "5۔ کام مکمل۔ ادائیگی ریلیز کریں" : "5. Job Done. Cash Released.",
      tagline: isUrdu ? "موبائل والٹ کے ذریعے محفوظ ادائیگی" : "Secure wallet payout & feedback loop.",
      description: isUrdu
        ? "کام مکمل ہونے کی تصدیق کریں، جاز کیش، ایزی پیسہ یا نقد ادائیگی کریں۔ پلیٹ فارم 90 فیصد رقم کاریگر کو منتقل کر دیتا ہے۔ ایک دوسرے کو ریٹنگ دینا نہ بھولیں۔"
        : "Confirm completion, pay via JazzCash, Easypaisa, or Cash. The platform releases 90% directly to the worker. Rate each other to build mutual trust and future priority rankings.",
    },
  ];

  return (
    <div 
      dir={isUrdu ? "rtl" : "ltr"}
      className={`relative min-h-screen bg-[#0A0A1A] overflow-x-hidden ${isUrdu ? "font-urdu" : "font-sans"} selection:bg-emerald-500 selection:text-black`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-hero-radial pointer-events-none -z-10" />
      <div className="absolute top-[180vh] right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[350vh] left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[520vh] right-[10%] w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* 1. NAVIGATION HEADER */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#0A0A1A]/80 backdrop-blur-md border-b border-slate-900/60 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className={`flex items-center gap-3 group ${isUrdu ? "flex-row-reverse text-right" : "text-left"}`}>
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500 transition-all">
              <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-widest text-white leading-none">
                FORIKAAM<span className="text-emerald-500">.</span>
              </span>
              <span className={`font-urdu font-normal text-xs text-slate-400 tracking-normal ${isUrdu ? "text-left" : "text-right"} -mt-0.5`}>
                فوری کام
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center gap-8 ${isUrdu ? "flex-row-reverse" : ""}`}>
            <a href="#how-it-works" className="text-sm font-subdisplay font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.navHowItWorks}</a>
            <a href="#homeowners" className="text-sm font-subdisplay font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.navHomeowners}</a>
            <a href="#karigar" className="text-sm font-subdisplay font-medium text-slate-300 hover:text-emerald-400 transition-colors">{t.navKarigars}</a>
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-3.5 py-1.5 rounded-lg border border-slate-800 bg-slate-950/40 text-xs font-mono font-bold tracking-wider hover:border-emerald-500 hover:text-emerald-400 transition-all uppercase cursor-pointer"
            >
              {locale === "en" ? "اردو" : "English"}
            </button>

            <a href="#waitlist" className="px-5 py-2.5 rounded-full bg-fori-flash glow-green text-black font-display font-black tracking-wider text-xs uppercase hover:scale-105 transition-all">
              {t.navJoinWaitlist}
            </a>
          </div>

          {/* Mobile Menu Toggle & Switcher */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950/40 text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase cursor-pointer"
            >
              {locale === "en" ? "اردو" : "EN"}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#0A0A1A] border-b border-slate-900 p-6 flex flex-col gap-5 z-40 animate-fade-in md:hidden text-center">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-200 hover:text-emerald-400"
            >
              {t.navHowItWorks}
            </a>
            <a 
              href="#homeowners" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-200 hover:text-emerald-400"
            >
              {t.navHomeowners}
            </a>
            <a 
              href="#karigar" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-200 hover:text-emerald-400"
            >
              {t.navKarigars}
            </a>
            <a 
              href="#waitlist" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-fori-flash text-black font-display font-black text-sm uppercase"
            >
              {t.navJoinWaitlist}
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className={`lg:col-span-6 flex flex-col text-center ${isUrdu ? "lg:text-right" : "lg:text-left"}`}>
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter leading-none uppercase mb-4">
              {t.heroTitleLine1}<br />
              <span className="text-emerald-500">{t.heroTitleLine2}</span>
            </h1>

            <p className="font-subdisplay font-bold text-xl sm:text-2xl text-slate-300 tracking-wide mb-6">
              {t.heroTagline}
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              {t.heroDescription}
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isUrdu ? "lg:justify-start lg:flex-row-reverse" : "lg:justify-start"} mb-12`}>
              <a 
                href="#waitlist" 
                className="px-8 py-4.5 rounded-full bg-fori-flash glow-green text-black font-display font-black tracking-wider text-sm uppercase hover:scale-[1.03] transition-all text-center cursor-pointer"
              >
                {t.heroCtaHomeowner}
              </a>
              <a 
                href="#waitlist" 
                className="px-8 py-4.5 rounded-full border-2 border-emerald-500 text-emerald-400 font-display font-black tracking-wider text-sm uppercase hover:bg-emerald-500/10 transition-all text-center cursor-pointer"
              >
                {t.heroCtaKarigar}
              </a>
            </div>


          </div>

          {/* Right 3D Visualizer Canvas Column */}
          <div className="lg:col-span-6 h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden glass-card relative">
            <AuctionCityScene />
          </div>
        </div>
      </section>

      {/* 3. PROBLEM STATEMENT */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.probEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.probTitleLine1}<br />
            <span className="text-slate-500">{t.probTitleLine2}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.probDescription}
          </p>
        </div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold mb-6 text-xl">
              ✕
            </div>
            <h3 className="font-subdisplay font-bold text-xl text-white mb-3">{t.probCard1Title}</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.probCard1Desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold mb-6 text-xl">
              ✕
            </div>
            <h3 className="font-subdisplay font-bold text-xl text-white mb-3">{t.probCard2Title}</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.probCard2Desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold mb-6 text-xl">
              ✕
            </div>
            <h3 className="font-subdisplay font-bold text-xl text-white mb-3">{t.probCard3Title}</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.probCard3Desc}
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold mb-6 text-xl">
              ✕
            </div>
            <h3 className="font-subdisplay font-bold text-xl text-white mb-3">{t.probCard4Title}</h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.probCard4Desc}
            </p>
          </div>
        </div>

        {/* HIES Pull-quote */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-slate-900 bg-slate-950/40 text-center relative">
          <p className="text-lg sm:text-2xl text-slate-300 font-medium italic leading-relaxed mb-4">
            &ldquo;{t.probQuote}&rdquo;
          </p>
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            {t.probQuoteSource}
          </span>
        </div>
      </section>

      {/* 4. THE SOLUTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.solEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.solTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.solDescription}
          </p>
        </div>

        {/* 4 Solution Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 font-bold">
              🛡
            </div>
            <h4 className="font-subdisplay font-bold text-lg text-white mb-2">{t.solPillar1Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.solPillar1Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 font-bold">
              📍
            </div>
            <h4 className="font-subdisplay font-bold text-lg text-white mb-2">{t.solPillar2Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.solPillar2Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 font-bold">
              ⚡
            </div>
            <h4 className="font-subdisplay font-bold text-lg text-white mb-2">{t.solPillar3Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.solPillar3Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 font-bold">
              📋
            </div>
            <h4 className="font-subdisplay font-bold text-lg text-white mb-2">{t.solPillar4Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.solPillar4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60 bg-slate-950/20 rounded-3xl my-10 border border-slate-900/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.howEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.howTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.howDescription}
          </p>
        </div>

        {/* 3D Phone and Steps Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Phone Display Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[320px] aspect-[9/18]">
              <PhoneMockupScene activeStep={activeStep} locale={locale} />
            </div>
          </div>

          {/* Interactive Step Clickers Column */}
          <div className="lg:col-span-7 space-y-4">
            {stepsContent.map((step, idx) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex gap-4 cursor-pointer ${
                  isUrdu ? "flex-row-reverse text-right" : "text-left"
                } ${
                  activeStep === idx
                    ? "bg-slate-900 border-emerald-500/50 scale-[1.01]"
                    : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Step indicator circular bubble */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-lg ${
                  activeStep === idx 
                    ? "bg-emerald-500 text-black glow-green" 
                    : "bg-slate-800 text-slate-400"
                }`}>
                  0{idx + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-subdisplay font-bold text-lg mb-1 ${activeStep === idx ? "text-emerald-400" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mb-2 uppercase tracking-wide">{step.tagline}</p>
                  {activeStep === idx && (
                    <p className="text-slate-300 text-sm leading-relaxed animate-fade-in">
                      {step.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUST LAYER (NADRA BIOMETRIC INTEGRATION) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60 bg-trust-layer rounded-3xl my-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left info content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
              {t.trustEyebrow}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">
              {t.trustTitle}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {t.trustDescription}
            </p>

            {/* Step list verification */}
            <div className="space-y-4 mb-8">
              <div className={`flex gap-3 ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                <span className="text-emerald-400 font-bold font-mono">1.</span>
                <p className="text-slate-300 text-sm sm:text-base">{t.trustStep1}</p>
              </div>
              <div className={`flex gap-3 ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                <span className="text-emerald-400 font-bold font-mono">2.</span>
                <p className="text-slate-300 text-sm sm:text-base">{t.trustStep2}</p>
              </div>
              <div className={`flex gap-3 ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                <span className="text-emerald-400 font-bold font-mono">3.</span>
                <p className="text-slate-300 text-sm sm:text-base">{t.trustStep3}</p>
              </div>
            </div>

            {/* Safety quote */}
            <div className="p-5 border-l-4 border-emerald-500 bg-emerald-500/5 rounded-r-xl max-w-xl">
              <p className="text-emerald-400 font-urdu text-xl text-right mb-2">
                {t.trustUrduQuote}
              </p>
              <p className="text-slate-400 text-xs italic">
                &ldquo;{t.trustQuoteDesc}&rdquo;
              </p>
            </div>
          </div>

          {/* Right 3D Particle scanner Column */}
          <div className="lg:col-span-5 h-[350px] sm:h-[400px] rounded-2xl overflow-hidden glass-card relative flex items-center justify-center">
            <ShieldParticles />
          </div>
        </div>
      </section>

      {/* 7. FOR HOMEOWNERS */}
      <section id="homeowners" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.homeEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.homeTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.homeDescription}
          </p>
        </div>

        {/* 2x3 App Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4">📋</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard1Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard1Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4">🗺️</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard2Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard2Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4">🛡</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard3Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard3Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4">💬</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard4Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard4Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4">💳</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard5Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard5Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl transition-all duration-300 border-red-500/20 hover:border-red-500/40">
            <div className="text-xl mb-4">🆘</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.homeCard6Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.homeCard6Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 8. FOR KARIGAR WORKERS */}
      <section id="karigar" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.workEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.workTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.workDescription}
          </p>
        </div>

        {/* 2x3 App Features Grid - Emerald Tinted */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">⚡</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard1Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard1Desc}
            </p>
          </div>

          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">Urdu</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard2Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard2Desc}
            </p>
          </div>

          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">💰</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard3Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard3Desc}
            </p>
          </div>

          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">📱</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard4Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard4Desc}
            </p>
          </div>

          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">🎓</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard5Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard5Desc}
            </p>
          </div>

          <div className="glass-card-orange p-6 rounded-xl transition-all duration-300">
            <div className="text-xl mb-4 text-emerald-400">💸</div>
            <h4 className="font-subdisplay font-bold text-white text-lg mb-2">{t.workCard6Title}</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.workCard6Desc}
            </p>
          </div>
        </div>

        {/* Income Impact callout */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase block mb-2">
            {t.workImpactEyebrow}
          </span>
          <p className="text-2xl sm:text-3xl text-white font-display font-black uppercase mb-3">
            {t.workImpactTitle}
          </p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {t.workImpactDesc}
          </p>
        </div>
      </section>

      {/* 9. COMPETITIVE EDGE */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.compEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.compTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.compDescription}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-900 mb-16">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-950/80 border-b border-slate-900">
                <th className="p-4 sm:p-5 font-subdisplay font-bold text-slate-300 text-sm uppercase">{t.compTablePlatform}</th>
                <th className="p-4 sm:p-5 font-subdisplay font-bold text-slate-300 text-sm uppercase">{t.compTablePricing}</th>
                <th className="p-4 sm:p-5 font-subdisplay font-bold text-slate-300 text-sm uppercase">{t.compTableOnboarding}</th>
                <th className="p-4 sm:p-5 font-subdisplay font-bold text-slate-300 text-sm uppercase">{t.compTableWeakness}</th>
                <th className="p-4 sm:p-5 font-subdisplay font-bold text-emerald-400 text-sm uppercase">{t.compTableAdvantage}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900/60 bg-slate-950/20">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Mahir Company</td>
                <td className="p-4 sm:p-5 text-red-400 text-xs sm:text-sm">{isUrdu ? "❌ فکسڈ / فلیٹ ریٹ" : "❌ Fixed / Standard Pricing"}</td>
                <td className="p-4 sm:p-5 text-slate-400 text-xs sm:text-sm">{isUrdu ? "فزیکل ویریفکیشن (سست عمل)" : "Manual verification (Slow)"}</td>
                <td className="p-4 sm:p-5 text-slate-400 text-xs sm:text-sm">{isUrdu ? "قیمتوں کی سختی صارفین کو دور کرتی ہے" : "Price rigidity alienates users"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-semibold text-xs sm:text-sm">{isUrdu ? "باہمی بولی اور فلیکسیبل ریٹ" : "Dynamic reverse-auction pricing"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">KaamKrew</td>
                <td className="p-4 sm:p-5 text-red-400 text-xs sm:text-sm">{isUrdu ? "❌ فکسڈ قیمتیں" : "❌ Fixed / Rigid Unit rates"}</td>
                <td className="p-4 sm:p-5 text-slate-400 text-xs sm:text-sm">{isUrdu ? "6-مراحل کے فزیکل چیک" : "6-step manual checks"}</td>
                <td className="p-4 sm:p-5 text-slate-400 text-xs sm:text-sm">{isUrdu ? "رجسٹریشن میں بہت تاخیر" : "Onboarding bottlenecks"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-semibold text-xs sm:text-sm">{isUrdu ? "60 سیکنڈ میں بائیومیٹرک شناختی چیک" : "60-sec biometric API verification"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Supertasker (defunct)</td>
                <td className="p-4 sm:p-5 text-emerald-400 text-xs sm:text-sm">{isUrdu ? "✅ اوپن بولی سسٹم" : "✅ Open Bidding"}</td>
                <td className="p-4 sm:p-5 text-red-400 text-xs sm:text-sm">{isUrdu ? "❌ صرف شناختی کارڈ فوٹو اپ لوڈ" : "❌ CNIC photo upload only"}</td>
                <td className="p-4 sm:p-5 text-red-400 text-xs sm:text-sm">{isUrdu ? "مبہم کاموں کی وجہ سے بگاڑ" : "Unstructured jobs caused chaos"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-semibold text-xs sm:text-sm">{isUrdu ? "مراحل وار ڈیٹا فارم سے درستگی" : "Decision tree eliminates ambiguity"}</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">inDrive</td>
                <td className="p-4 sm:p-5 text-emerald-400 text-xs sm:text-sm">{isUrdu ? "✅ ریورس اوکشن بولی سسٹم" : "✅ Reverse Auction Bidding"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 text-xs sm:text-sm">{isUrdu ? "ڈرائیور تصدیق" : "Driver API checks"}</td>
                <td className="p-4 sm:p-5 text-red-400 text-xs sm:text-sm">{isUrdu ? "❌ ہوم سروسز کیٹیگری موجود نہیں" : "❌ No home services vertical"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-semibold text-xs sm:text-sm">{isUrdu ? "خاص طور پر سروسز کے لیے بنایا گیا" : "Dedicated focus on physical trades"}</td>
              </tr>
              <tr className="bg-emerald-500/5">
                <td className="p-4 sm:p-5 font-black text-emerald-400">FORIKAAM</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-bold text-xs sm:text-sm">{isUrdu ? "✅ لائیو بولی سسٹم" : "✅ Real-Time Auction"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-bold text-xs sm:text-sm">{isUrdu ? "✅ 60 سیکنڈ بائیومیٹرک تصدیق" : "✅ 60-Sec Biometric API"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-bold text-xs sm:text-sm">{isUrdu ? "کوئی نہیں" : "None"}</td>
                <td className="p-4 sm:p-5 text-emerald-400 font-black text-xs sm:text-sm">{isUrdu ? "مکمل اور محفوظ ہوم سروسز مارکیٹ" : "Complete labor ecosystem match"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* The Three Moats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl border-emerald-500/20">
            <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Moat 01</h4>
            <h3 className="font-subdisplay font-bold text-lg text-white mb-2">{t.compMoat1Title}</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.compMoat1Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border-emerald-500/20">
            <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Moat 02</h4>
            <h3 className="font-subdisplay font-bold text-lg text-white mb-2">{t.compMoat2Title}</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.compMoat2Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl border-emerald-500/20">
            <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Moat 03</h4>
            <h3 className="font-subdisplay font-bold text-lg text-white mb-2">{t.compMoat3Title}</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.compMoat3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 10. IMPACT NUMBERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60 bg-[#0c0c24]/20 rounded-3xl my-10 border border-slate-900/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.numEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.numTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.numDescription}
          </p>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-2xl text-center border-slate-800">
            <span className="font-mono font-black text-5xl sm:text-6xl text-emerald-400 block mb-2">{metric1}%</span>
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1">{t.numCard1Label}</span>
            <p className="text-slate-400 text-xs">{t.numCard1Desc}</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center border-slate-800">
            <span className="font-mono font-black text-5xl sm:text-6xl text-emerald-400 block mb-2">{metric2}M</span>
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1">{t.numCard2Label}</span>
            <p className="text-slate-400 text-xs">{t.numCard2Desc}</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center border-slate-800">
            <span className="font-mono font-black text-5xl sm:text-6xl text-emerald-400 block mb-2">{metric3}M</span>
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1">{t.numCard3Label}</span>
            <p className="text-slate-400 text-xs">{t.numCard3Desc}</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center border-slate-800">
            <span className="font-mono font-black text-4xl sm:text-5xl text-emerald-400 block mb-2">{isUrdu ? "Rs. " + metric4 + "M" : `Rs. ${metric4}M`}</span>
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1">{t.numCard4Label}</span>
            <p className="text-slate-400 text-xs">{t.numCard4Desc}</p>
          </div>
        </div>
      </section>

      {/* 11. MARKET OPPORTUNITY (MAP) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.mapEyebrow}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.mapTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.mapDescription}
          </p>
        </div>

        {/* Interactive Map Component assembly */}
        <PakistanMap />
      </section>

      {/* 12. WAITLIST SIGNUP (DUAL FORM) */}
      <section id="waitlist" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900/60 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase block mb-3">
            {t.waitEyebrow}
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-4">
            {t.waitTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.waitDescription}
          </p>
        </div>

        {/* Embed Waitlist Form */}
        <WaitlistForm locale={locale} />
      </section>

      {/* 14. FOOTER */}
      <footer className="py-16 px-6 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 text-left">
          {/* Branding Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500 transition-all">
                <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-widest text-white leading-none">
                  FORIKAAM<span className="text-emerald-500">.</span>
                </span>
                <span className="font-urdu font-normal text-xs text-slate-400 tracking-normal text-right -mt-0.5">
                  فوری کام
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-urdu">
              {t.footDescription}
            </p>
            <span className="text-xs text-slate-500 block">Contact Us: muhammadazfar716@gmail.com</span>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">{t.footCompany}</span>
              <a href="#how-it-works" className="text-xs text-slate-400 hover:text-white transition-colors">{t.navHowItWorks}</a>
              <a href="#homeowners" className="text-xs text-slate-400 hover:text-white transition-colors">{t.navHomeowners}</a>
              <a href="#karigar" className="text-xs text-slate-400 hover:text-white transition-colors">{t.navKarigars}</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">{t.footLegal}</span>
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Worker Agreement</a>
            </div>
          </div>

          {/* Social Icons Column */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">{t.footConnect}</span>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/muhammad-azfar-687304288" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all group" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/M-Azfar9" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all group" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="mailto:muhammadazfar716@gmail.com" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all group" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className={`max-w-7xl mx-auto pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 ${isUrdu ? "sm:flex-row-reverse" : ""}`}>
          <span>{t.footCopyright}</span>
        </div>
      </footer>
    </div>
  );
}
