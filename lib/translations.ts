export type Locale = "en" | "ur";

export const translations = {
  en: {
    // Navigation
    navHowItWorks: "How It Works",
    navHomeowners: "For Homeowners",
    navKarigars: "For Karigars",
    navJoinWaitlist: "Join Waitlist",

    // Hero Section
    heroEyebrow: "",
    heroTitleLine1: "KAAM FORI.",
    heroTitleLine2: "DAAM SAHI.",
    heroTagline: "Fast Work. Fair Price. Done.",
    heroDescription: "Pakistan's first parameterized reverse-auction labor marketplace. Connect with verified, NADRA-authenticated skilled workers near you in real time. Name your price, watch workers bid, and book safely.",
    heroCtaHomeowner: "I Need Work Done →",
    heroCtaKarigar: "I'm a Karigar →",
    heroBadgeNadra: "NADRA Verified",
    heroBadgeBidding: "Live Bidding",
    heroBadgeMiddlemen: "No Middlemen",
    heroBadgeCity: "Pakistan Launch",

    // Problem Section
    probEyebrow: "The Problem We Are Solving",
    probTitleLine1: "Pakistan's Labor Market Is Broken.",
    probTitleLine2: "And Everyone Knows It.",
    probDescription: "Over 80% of Pakistan's workforce is informal. Yet discovering, verifying, and pricing physical labor remains unsafe, opaque, and archaic.",
    probCard1Title: "No Identity & Safety Trust",
    probCard1Desc: "You cannot safely invite a complete stranger into your home with zero background check. Middle-class households—especially those with women at home—simply will not risk hiring unverified labor.",
    probCard2Title: "Inefficient Chowk Discovery",
    probCard2Desc: "In 2026, people still physically walk to a street chowk to find a plumber or electrician. Pakistan's rapidly growing young population lacks legacy contractor contacts and has zero digital alternatives.",
    probCard3Title: "Arbitrary Pricing & Opacity",
    probCard3Desc: "Neither side knows the fair market rate. Homeowners overpay out of desperation, while workers are heavily exploited by middlemen (thekedar) who extract 30–50% of their earnings for a simple introduction.",
    probCard4Title: "Invisible Skill Credentials",
    probCard4Desc: "A 15-year veteran electrician and a day-laborer who picked up a screwdriver last week stand at the same chowk on identical terms. Without visible records or ratings, quality professionals cannot stand out.",
    probQuote: "Urban households spend around 26% of their income on housing and utilities—yet there is no trusted digital channel to hire the people who service those needs.",
    probQuoteSource: "— Pakistan Household Integrated Economic Survey (HIES)",

    // Solution Section
    solEyebrow: "The ForiKaam Way",
    solTitle: "Digitizing the Pakistan bargaining culture.",
    solDescription: "Think inDrive, but for physical labor. Homeowners name their price, local workers bid directly, and the state confirms their identity. Simple, transparent, and secure.",
    solPillar1Title: "Biometric NADRA Verification",
    solPillar1Desc: "Every worker biometric-matches their CNIC using NADRA's API in under 60 seconds. You invite a verified citizen, not a stranger.",
    solPillar2Title: "Geofenced Local Discovery",
    solPillar2Desc: "Post a job and reach verified service workers within a 5km radius instantly. No travel, no directory calling.",
    solPillar3Title: "Dynamic Reverse Auction",
    solPillar3Desc: "State your offer. Workers accept, counter-offer, or decline. You select the best bid based on price, rating, and speed.",
    solPillar4Title: "Parameterized Jobs",
    solPillar4Desc: "Guided decision trees specify materials, tasks, and hours before bidding. Kills ambiguity and protects job quality.",

    // How It Works Section
    howEyebrow: "Interaction Flow",
    howTitle: "From Posting to Worker at Your Door. In Under an Hour.",
    howDescription: "Click on each step below to watch the live app screen flow simulation on the 3D phone model in real time.",

    // Trust Layer
    trustEyebrow: "The Security Moat",
    trustTitle: "Every Karigar Is NADRA Biometric Verified.",
    trustDescription: "ForiKaam partners with NADRA's Nishan Pakistan API (launched Feb 2026) to provide instant, contactless biometric identification. We are Pakistan's first labor marketplace utilizing state CNIC records to match identity checks dynamically.",
    trustStep1: "Selfie & CNIC Scan: Worker uploads CNIC photos and captures a live facial selfie.",
    trustStep2: "Real-Time Matching: ForiKaam calls Nishan Pakistan API to run Demographics & Biometric facial mapping.",
    trustStep3: "Instant Badge: Verification confirms identity details in under 60 seconds at just Rs. 20 cost.",
    trustUrduQuote: "ہر کاریگر نادرا سے تصدیق شدہ۔ گھر کے لیے محفوظ۔",
    trustQuoteDesc: "Designed with Pakistani households—especially women at home—in mind. Safety first, zero compromises.",

    // For Homeowners Section
    homeEyebrow: "For Homeowners",
    homeTitle: "Ghar Ki Zaroorat? ForiKaam Par Post Karo.",
    homeDescription: "Hire confirmed, state-verified professionals at transparent, negotiated rates. No search struggles, no phone favors.",
    homeCard1Title: "Guided Decision Tree",
    homeCard1Desc: "Post detailed job parameters with zero confusion. Guided layouts ensure you list materials, height, and hours for accurate worker bidding.",
    homeCard2Title: "Live Bidding Radar Map",
    homeCard2Desc: "Watch real-time worker quotes land directly on a radar map of your neighborhood. Accept the best fit, tracking their ETA live.",
    homeCard3Title: "NADRA Verified Badge",
    homeCard3Desc: "Browse profiles displaying official verification seals. Check customer ratings, jobs completed, and comments before opening your door.",
    homeCard4Title: "Secure In-App Chat",
    homeCard4Desc: "Discuss parameters, share photos of leaks, and coordinate arrivals safely inside the app without sharing your private phone number.",
    homeCard5Title: "Flexible Mobile Wallets",
    homeCard5Desc: "Pay digital or traditional cash. Integrates JazzCash, Easypaisa, or Cash transactions directly, protecting unbanked populations.",
    homeCard6Title: "One-Tap Emergency SOS",
    homeCard6Desc: "High-priority panic triggers instantly share GPS tracks and job details with emergency contacts and neighborhood response teams.",

    // For Karigar Section
    workEyebrow: "Are You a Karigar?",
    workTitle: "Kaam Dhundo. Sahi Daam Pao. Thekedar Ko Bhool Jao.",
    workDescription: "Stop losing 30–50% of your daily earnings to middleman contractors. On ForiKaam, you bid directly and keep 90% of every rupee.",
    workCard1Title: "One-Tap Easy Bidding",
    workCard1Desc: "Receive nearby job cards on your screen. Tap to accept at customer rates, submit your custom counter-bid, or decline in seconds.",
    workCard2Title: "Urdu Voice Readout Alert",
    workCard2Desc: "Optimized for accessibility. App reads out job descriptions and pricing in Urdu, allowing workers to understand parameters instantly.",
    workCard3Title: "Full Earnings Dashboard",
    workCard3Desc: "Track daily transactions, pending payouts, and cash-outs. Total transparent audit trail details your platform score and earnings.",
    workCard4Title: "Works on Any Android Device",
    workCard4Desc: "Lightweight build under 15MB. Heavily optimized to prevent crashes on entry-level Android devices (Tecno, Itel, Samsung Go).",
    workCard5Title: "Public Rating & Skill Badges",
    workCard5Desc: "Earn ratings, verified trades badges, and skill certifications that help your profile stand out and double your bid success rates.",
    workCard6Title: "Instant Wallet Cashouts",
    workCard6Desc: "Withdraw earnings directly to JazzCash or Easypaisa instantly. No weekly wait queues or office verification protocols required.",
    workImpactEyebrow: "Supply Side Impact",
    workImpactTitle: "Boost monthly income from Rs. 15,000 → Rs. 60,000+",
    workImpactDesc: "Eliminating the middleman tax lets skilled laborers retain 90% of job transactions. Direct digital reputation building creates long-term financial growth.",

    // Competitive Edge Section
    compEyebrow: "Why ForiKaam Wins",
    compTitle: "Every Competitor Solved One Problem. ForiKaam Solves All Four.",
    compDescription: "Other apps failed due to pricing rigidity, slow onboarding, or unstructured bidding loops. We engineered the architecture to correct these flaws.",
    compTablePlatform: "Platform",
    compTablePricing: "Pricing Model",
    compTableOnboarding: "Onboarding/Verification",
    compTableWeakness: "Core Weakness",
    compTableAdvantage: "ForiKaam Advantage",
    compMoat1Title: "Parameterized Decision Trees",
    compMoat1Desc: "Correcting Supertasker's fatal flaw. By forcing clients to specify task parameters beforehand, bids match real requirements. No blind pricing guess loops.",
    compMoat2Title: "NADRA Nishan API Access",
    compMoat2Desc: "Official biometric partner integration. Scaling onboarding is fully automated, creating instant verified database entries within 60 seconds of registration.",
    compMoat3Title: "Proven Behavioral Sync",
    compMoat3Desc: "Pakistanis love negotiating. inDrive's 40% rides growth in Pakistan validates the cultural reverse-auction framework. We scale it to physical services.",

    // Impact Numbers Section
    numEyebrow: "The Market Opportunity",
    numTitle: "This Is Not a Small Problem. It is Pakistan's Largest Untapped Segment.",
    numDescription: "Connecting 52 million invisible physical service professionals with the 25 million households needing them daily.",
    numCard1Label: "Informal Workforce",
    numCard1Desc: "of Pakistan's labor pool (LFS 24-25)",
    numCard2Label: "Skilled Karigars",
    numCard2Desc: "operating with zero digital trace",
    numCard3Label: "Urban Households",
    numCard3Desc: "seeking daily home maintenance",
    numCard4Label: "Year 3 Revenue",
    numCard4Desc: "conservative baseline projections",

    // Launch City Section
    mapEyebrow: "Where We Launch",
    mapTitle: "Starting in Pakistan's Three Largest Cities. Then Expanding Nationwide.",
    mapDescription: "Establishing supply density and liquidity loops in metropolitan hubs first to prove the model.",

    // Waitlist Form
    waitEyebrow: "Join The Movement",
    waitTitle: "ForiKaam Is Coming. Be First.",
    waitDescription: "We are building something Pakistan has never seen before. Join the waitlist now and get priority notifications.",

    // Footer
    footDescription: "Pakistan's first parameterized reverse-auction labor marketplace. Name your price. Get the right price. Fast work, fair price, done.",
    footCompany: "Company",
    footLegal: "Legal",
    footConnect: "Connect With Us",
    footCopyright: "© 2026 ForiKaam (Pvt.) Ltd. · Pakistan"
  },
  ur: {
    // Navigation
    navHowItWorks: "کام کیسے کرتا ہے",
    navHomeowners: "گھر والوں کے لیے",
    navKarigars: "کاریگروں کے لیے",
    navJoinWaitlist: "ویٹ لسٹ جوائن کریں",

    // Hero Section
    heroEyebrow: "",
    heroTitleLine1: "کام فوری۔",
    heroTitleLine2: "دام صحیح۔",
    heroTagline: "فوری کام، مناسب قیمت، بہترین سروس۔",
    heroDescription: "پاکستان کی پہلی ریورس بولی والی لیبر مارکیٹ۔ اپنے قریب موجود نادرا سے تصدیق شدہ ہنر مند کاریگروں سے رابطہ کریں۔ اپنی قیمت بتائیں، کاریگروں کی بولیاں دیکھیں اور محفوظ طریقے سے کام کروائیں۔",
    heroCtaHomeowner: "مجھے کام کروانا ہے ←",
    heroCtaKarigar: "میں کاریگر ہوں ←",
    heroBadgeNadra: "نادرا تصدیق شدہ",
    heroBadgeBidding: "لائیو بولی سسٹم",
    heroBadgeMiddlemen: "کوئی مڈل مین نہیں",
    heroBadgeCity: "پاکستان لانچ",

    // Problem Section
    probEyebrow: "مسئلہ جس کا ہم حل پیش کرتے ہیں",
    probTitleLine1: "پاکستان میں کاریگر ڈھونڈنے کا طریقہ کار خراب ہے۔",
    probTitleLine2: "اور سب یہ جانتے ہیں۔",
    probDescription: "پاکستان کی 80 فیصد سے زائد ورک فورس غیر رسمی سیکٹر میں ہے۔ اس کے باوجود کاریگروں کی تلاش، تصدیق اور مناسب دام کا طے ہونا اب بھی ایک غیر محفوظ اور مشکل عمل ہے۔",
    probCard1Title: "حفاظت اور اعتماد کا فقدان",
    probCard1Desc: "آپ نادرا تصدیق کے بغیر کسی بھی اجنبی کو اپنے گھر نہیں بلا سکتے۔ متوسط طبقے کے گھرانے—خاص طور پر وہ جہاں خواتین گھر پر ہوں—بغیر تصدیق کے کاریگر بلانے کا خطرہ مول نہیں لیتے۔",
    probCard2Title: "چوک پر جا کر کاریگر کی تلاش",
    probCard2Desc: "2026 میں بھی لوگ پلمبر یا الیکٹریشن ڈھونڈنے کے لیے چوک پر جاتے ہیں۔ پاکستان کی تیزی سے بڑھتی ہوئی نوجوان نسل کے پاس پرانے کاریگروں کے نمبر نہیں ہیں اور کوئی ڈیجیٹل حل بھی موجود نہیں ہے۔",
    probCard3Title: "قیمتوں میں ہیرا پھیری",
    probCard3Desc: "کسی کو نہیں معلوم کہ کام کا صحیح ریٹ کیا ہے۔ گھر والے مجبوری میں زیادہ پیسے دے دیتے ہیں، جبکہ ٹھیکیدار کاریگروں کی اجرت کا 30 سے 50 فیصد کمیشن کی شکل میں ہڑپ کر جاتے ہیں۔",
    probCard4Title: "ہنر کی قدر نہ ہونا",
    probCard4Desc: "ایک 15 سالہ تجربہ کار الیکٹریشن اور ایک نوآموز مزدور چوک پر ایک ہی ریٹ پر کام ڈھونڈ رہے ہوتے ہیں۔ اچھے اور برے کاریگر میں تمیز کرنے کا کوئی ریکارڈ یا ریٹنگ سسٹم موجود نہیں ہے۔",
    probQuote: "شہری گھرانے اپنی آمدنی کا تقریباً 26 فیصد رہائش اور یوٹیلیٹیز پر خرچ کرتے ہیں—پھر بھی کوئی ایسا قابل اعتماد ڈیجیٹل ذریعہ نہیں ہے جہاں سے وہ ان کاموں کے لیے کاریگر ہائر کر سکیں۔",
    probQuoteSource: "— پاکستان ہاؤس ہولڈ انٹیگریٹڈ اکنامک سروے (HIES)",

    // Solution Section
    solEyebrow: "فوریکام کا طریقہ کار",
    solTitle: "پاکستان کے مول بھاؤ کلچر کو ڈیجیٹل بنانا۔",
    solDescription: "ان ڈرائیو کی طرح، لیکن کاریگروں کے لیے۔ گھر والے اپنی قیمت بتاتے ہیں، کاریگر براہِ راست بولی لگاتے ہیں، اور نادرا سے ان کی شناخت کی تصدیق کی جاتی ہے۔ آسان، شفاف اور محفوظ۔",
    solPillar1Title: "نادرا بائیومیٹرک تصدیق",
    solPillar1Desc: "ہر کاریگر نادرا Nishan API کے ذریعے 60 سیکنڈ میں اپنے انگوٹھے اور شناختی کارڈ کی تصدیق کرواتا ہے۔ آپ ایک تصدیق شدہ شہری کو گھر بلاتے ہیں۔",
    solPillar2Title: "5 کلومیٹر کے دائرے میں تلاش",
    solPillar2Desc: "کام پوسٹ کریں اور فوری طور پر اپنے 5 کلومیٹر کے دائرے میں موجود تصدیق شدہ کاریگروں تک پہنچیں۔ چوک پر جانے کی اب کوئی ضرورت نہیں۔",
    solPillar3Title: "ریورس اوکشن (لائیو بولی)",
    solPillar3Desc: "اپنی مناسب قیمت بتائیں۔ کاریگر آپ کی قیمت کو قبول، مسترد یا اپنی جوابی پیشکش کر سکتے ہیں۔ آپ اپنی مرضی سے کاریگر منتخب کریں۔",
    solPillar4Title: "تفصیلی کام کی فہرست",
    solPillar4Desc: "بولی شروع ہونے سے پہلے کام، مٹیریل اور وقت کا تعین کریں۔ اس سے بعد میں بحث اور اضافی پیسوں کا جھنجھٹ ختم ہو جاتا ہے۔",

    // How It Works Section
    howEyebrow: "استعمال کا طریقہ",
    howTitle: "کام پوسٹ کرنے سے کاریگر کے گھر پہنچنے تک۔ ایک گھنٹے کے اندر۔",
    howDescription: "نیچے دیے گئے مراحل پر کلک کریں اور 3D فون ماڈل پر لائیو سکرین اور کام کا طریقہ کار دیکھیں۔",

    // Trust Layer
    trustEyebrow: "حفاظت اور سیکیورٹی",
    trustTitle: "ہر کاریگر نادرا بائیومیٹرک سے تصدیق شدہ ہے۔",
    trustDescription: "فوریکام نادرا کے Nishan Pakistan API کے ساتھ منسلک ہے۔ ہر کاریگر کی رجسٹریشن کے وقت اس کے شناختی کارڈ اور چہرے کا ملان نادرا کے قومی ڈیٹابیس سے 60 سیکنڈ میں کیا جاتا ہے۔",
    trustStep1: "چہرہ اور شناختی کارڈ کی تصویر: کاریگر اپنے شناختی کارڈ اور لائیو تصویر اپ لوڈ کرتا ہے۔",
    trustStep2: "نادرا ڈیٹابیس سے ملاپ: فوریکام نادرا سسٹم کے ذریعے بائیومیٹرک اور ڈیموگرافک ڈیٹا کی تصدیق کرتا ہے۔",
    trustStep3: "تصدیق شدہ بیج: تصدیق مکمل ہونے پر کاریگر کو فوریکام تصدیق شدہ کا نیلا شیلڈ بیج دیا جاتا ہے۔",
    trustUrduQuote: "ہر کاریگر نادرا سے تصدیق شدہ۔ گھر کے لیے محفوظ۔",
    trustQuoteDesc: "پاکستانی گھرانوں بالخصوص خواتین کی حفاظت کو مدنظر رکھتے ہوئے تیار کیا گیا ہے۔ سیکیورٹی پر کوئی سمجھوتہ نہیں۔",

    // For Homeowners Section
    homeEyebrow: "گھر والوں کے لیے",
    homeTitle: "گھر کی ضرورت؟ فوریکام پر پوسٹ کرو۔",
    homeDescription: "واضح اور باہمی رضامندی سے طے شدہ قیمتوں پر نادرا سے تصدیق شدہ کاریگر ہائر کریں۔ کوئی لمبی تلاش یا سفارش کی ضرورت نہیں۔",
    homeCard1Title: "مراحل وار کام کی تفصیل",
    homeCard1Desc: "بغیر کسی الجھن کے تفصیلی کام پوسٹ کریں۔ ہماری ایپ مٹیریل اور متوقع وقت کا پہلے ہی تعین کروا دیتی ہے۔",
    homeCard2Title: "لائیو بولی کا نقشہ",
    homeCard2Desc: "اپنے علاقے کے نقشے پر کاریگروں کی بولیاں لائیو دیکھیں۔ سب سے موزوں کاریگر کا انتخاب کریں اور اس کے آنے کا لائیو وقت دیکھیں۔",
    homeCard3Title: "نادرا تصدیق شدہ بیج",
    homeCard3Desc: "ایپ میں کاریگروں کے پروفائلز پر نادرا بیج دیکھیں۔ ہائر کرنے سے پہلے ان کا تجربہ اور پچھلی ریٹنگز لازمی دیکھیں۔",
    homeCard4Title: "محفوظ ان ایپ چیٹ",
    homeCard4Desc: "اپنا ذاتی موبائل نمبر شیئر کیے بغیر ایپ کے اندر کام کی تفصیلات طے کریں اور تصویریں شیئر کریں۔",
    homeCard5Title: "جاز کیش / ایزی پیسہ",
    homeCard5Desc: "جاز کیش، ایزی پیسہ یا نقد رقم کے ذریعے ادائیگی کریں۔ ایپ ان تمام آپشنز کو سپورٹ کرتی ہے۔",
    homeCard6Title: "ون ٹیپ ایمرجنسی SOS",
    homeCard6Desc: "کام کے دوران کسی بھی ہنگامی صورتحال میں بٹن دباتے ہی آپ کی لوکیشن اور کام کی تفصیلات سیکیورٹی ٹیم کو چلی جاتی ہیں۔",

    // For Karigar Section
    workEyebrow: "کیا آپ کاریگر ہیں؟",
    workTitle: "کام ڈھونڈو۔ صحیح دام پاؤ۔ ٹھیکیدار کو بھول جاؤ۔",
    workDescription: "اپنی کمائی کا 30 سے 50 فیصد ٹھیکیداروں کو دینا بند کریں۔ فوریکام پر براہِ راست اپنی قیمت بتائیں اور 90 فیصد رقم اپنے پاس رکھیں۔",
    workCard1Title: "آسان ون ٹیپ بولی لگائیے",
    workCard1Desc: "اپنے قریبی کاموں کے الرٹ موبائل پر حاصل کریں۔ گاہک کے ریٹ پر ہاں کریں یا اپنی قیمت لکھ کر بھیجیں۔",
    workCard2Title: "اردو آواز والا الرٹ سسٹم",
    workCard2Desc: "پڑھنے لکھنے میں دشواری ہے؟ ہماری ایپ تمام کاموں کی تفصیلات آپ کو اردو میں بول کر سنائے گی۔",
    workCard3Title: "کمائی کا مکمل حساب کتاب",
    workCard3Desc: "روزانہ کی کمائی، پینڈنگ کام اور کیش آؤٹ کا مکمل ریکارڈ اپنے موبائل پر دیکھیں۔ کوئی کٹوتی چھپی ہوئی نہیں ہوگی۔",
    workCard4Title: "ہر اینڈرائیڈ موبائل پر چلے گی",
    workCard4Desc: "صرف 15MB سے کم سائز۔ پرانے اور سستے اینڈرائیڈ فونز پر بھی بغیر رکے اور بغیر ہینگ ہوئے چلے گی۔",
    workCard5Title: "ریٹنگز اور ہنر کے بیجز",
    workCard5Desc: "اچھا کام کر کے 5 سٹار ریٹنگ حاصل کریں اور سرٹیفیکیشن بیجز پائیں تاکہ زیادہ گاہک آپ کا انتخاب کریں۔",
    workCard6Title: "جازکیش اور ایزی پیسہ نکلوانا",
    workCard6Desc: "اپنا کمایا ہوا پیسہ جازکیش یا ایزی پیسہ کے ذریعے فوراً نکالیں۔ کسی دفتر جانے یا انتظار کی ضرورت نہیں۔",
    workImpactEyebrow: "کاریگروں کی آمدنی پر اثر",
    workImpactTitle: "ماہانہ آمدنی 15,000 سے 60,000+ روپے تک بڑھائیں",
    workImpactDesc: "ٹھیکیدار کا بھاری کمیشن ختم ہونے سے کاریگر ہر کام کا 90 فیصد خود وصول کرتا ہے۔ ریٹنگز سے کام میں مسلسل اضافہ ہوتا ہے۔",

    // Competitive Edge Section
    compEyebrow: "فوریکام کی کامیابی کی وجہ",
    compTitle: "باقی ایپس نے ایک مسئلہ حل کیا، فوریکام تمام مسائل حل کرتا ہے۔",
    compDescription: "فکس ریٹ، رجسٹریشن میں تاخیر یا بغیر تفصیلات کے بولی لگانے کی وجہ سے دوسری ایپس ناکام ہوئیں۔ فوریکام نے ان تمام خامیوں کو دور کیا ہے۔",
    compTablePlatform: "پلیٹ فارم",
    compTablePricing: "قیمت طے کرنے کا طریقہ",
    compTableOnboarding: "کاریگروں کی تصدیق",
    compTableWeakness: "بڑی خامی",
    compTableAdvantage: "فوریکام کا فائدہ",
    compMoat1Title: "مراحل وار تفصیلی کام کی رجسٹریشن",
    compMoat1Desc: "سپر ٹاسکر کی خامی کا مستقل علاج۔ کام کی مکمل تفصیلات پہلے طے ہونے سے بولیاں بالکل صحیح آتی ہیں اور بعد میں جھگڑا نہیں ہوتا۔",
    compMoat2Title: "نادرا Nishan API انٹیگریشن",
    compMoat2Desc: "شناخت کی تصدیق کا خودکار بائیومیٹرک نظام۔ بغیر کسی دفتر یا فزیکل ویریفکیشن کے کاریگر فوری رجسٹر ہو کر کام شروع کر سکتا ہے۔",
    compMoat3Title: "باہمی مول بھاؤ کا کلچر",
    compMoat3Desc: "ان ڈرائیو کی پاکستان میں زبردست کامیابی اس بات کا ثبوت ہے کہ یہاں کے لوگ خود قیمت طے کرنا پسند کرتے ہیں۔ ہم اسی ماڈل کو سروسز پر لا رہے ہیں۔",

    // Impact Numbers Section
    numEyebrow: "مارکیٹ کا بڑا موقع",
    numTitle: "یہ کوئی چھوٹا مسئلہ نہیں ہے۔ یہ پاکستان کی سب سے بڑی غیر دستاویزی مارکیٹ ہے۔",
    numDescription: "5 کروڑ 20 لاکھ کاریگروں کو روزانہ کام کروانے والے ڈھائی کروڑ خاندانوں سے جوڑنا۔",
    numCard1Label: "غیر رسمی ورک فورس",
    numCard1Desc: "پاکستان کی مجموعی لیبر فورس کا حصہ (LFS 24-25)",
    numCard2Label: "ہنرمند کاریگر",
    numCard2Desc: "جو کسی ڈیجیٹل سسٹم پر رجسٹرڈ نہیں ہیں",
    numCard3Label: "شہری گھرانے",
    numCard3Desc: "جنہیں روزانہ گھر کے کاموں کے لیے کاریگر چاہیے",
    numCard4Label: "تیسرے سال کی متوقع آمدنی",
    numCard4Desc: "انتہائی محتاط اندازوں کے مطابق پلیٹ فارم ریونیو",

    // Launch City Section
    mapEyebrow: "آغاز اور وسعت",
    mapTitle: "پاکستان کے 3 بڑے شہروں سے آغاز۔ پھر ملک گیر نیٹ ورک۔",
    mapDescription: "پہلے مرحلے میں میٹروپولیٹن شہروں میں نیٹ ورک بنا کر ماڈل کی کامیابی کو یقینی بنانا۔",

    // Waitlist Form
    waitEyebrow: "ہمارے ساتھ شامل ہوں",
    waitTitle: "فوریکام آپ کے شہر آ رہا ہے۔ سب سے پہلے شامل ہوں۔",
    waitDescription: "ہم پاکستان کے لیے ایک جدید اور محفوظ نیٹ ورک بنا رہے ہیں۔ ابھی ویٹ لسٹ جوائن کریں اور ترجیحی ممبر بنیں۔",

    // Footer
    footDescription: "پاکستان کی پہلی ریورس بولی والی لیبر مارکیٹ۔ کام فوری، دام صحیح۔ فوری کام، مناسب قیمت، بہترین سروس۔",
    footCompany: "کمپنی",
    footLegal: "قانونی معلومات",
    footConnect: "ہم سے رابطہ کریں",
    footCopyright: "© 2026 فوریکام (پرائیویٹ) لمیٹڈ · پاکستان"
  }
};
