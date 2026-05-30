"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Locale } from "../lib/translations";

interface PhoneMockupSceneProps {
  activeStep: number; // 0 to 4
  locale: Locale;
}

export default function PhoneMockupScene({ activeStep, locale }: PhoneMockupSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // Keep track of activeStep and locale in refs to use in the animation loop
  const activeStepRef = useRef(activeStep);
  const localeRef = useRef(locale);
  
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      if (!support) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00a651, 1.5);
    dirLight.position.set(2, 5, 5);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xff6b35, 0.8);
    backLight.position.set(-2, -5, -5);
    scene.add(backLight);

    // Phone Container Group
    const phoneGroup = new THREE.Group();
    scene.add(phoneGroup);

    // Phone Frame (3D Rounded Box Geometry Simulation)
    const frameWidth = 2.4;
    const frameHeight = 4.8;
    const frameDepth = 0.18;
    
    // Create the phone backing & sides
    const phoneGeometry = new THREE.BoxGeometry(frameWidth, frameHeight, frameDepth);
    const phoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x111122,
      roughness: 0.4,
      metalness: 0.8,
    });
    const phoneMesh = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phoneGroup.add(phoneMesh);

    // Bezel border (thin overlay)
    const bezelGeom = new THREE.BoxGeometry(frameWidth + 0.04, frameHeight + 0.04, 0.02);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x00a651,
      roughness: 0.5,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7,
    });
    const bezelMesh = new THREE.Mesh(bezelGeom, bezelMat);
    bezelMesh.position.z = 0.081;
    phoneGroup.add(bezelMesh);

    // 2D Dynamic Canvas for Phone Screen Texture
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 512;
    screenCanvas.height = 1024;
    const ctx = screenCanvas.getContext("2d")!;

    // Create Canvas Texture from screenCanvas
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    // Screen Mesh
    const screenGeom = new THREE.PlaneGeometry(frameWidth - 0.08, frameHeight - 0.16);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenMesh = new THREE.Mesh(screenGeom, screenMat);
    screenMesh.position.z = 0.092; // Slightly in front of phone mesh
    phoneGroup.add(screenMesh);

    // Function to draw screen UI on screenCanvas
    const drawScreenUI = (step: number, currentLocale: Locale) => {
      const isUrdu = currentLocale === "ur";
      
      // Setup Text Direction and align
      ctx.direction = isUrdu ? "rtl" : "ltr";
      const startX = isUrdu ? 482 : 30;
      const endX = isUrdu ? 30 : 482;
      ctx.textAlign = isUrdu ? "right" : "left";

      // Background dark theme
      ctx.fillStyle = "#0A0A1A";
      ctx.fillRect(0, 0, 512, 1024);

      // Status Bar
      ctx.fillStyle = "#161633";
      ctx.fillRect(0, 0, 512, 55);
      
      ctx.fillStyle = "#A1A1AA";
      ctx.font = "bold 20px Arial";
      if (isUrdu) {
        ctx.fillText("فوریکام موبائل", 482, 36);
        ctx.textAlign = "left";
        ctx.fillText("12:00 PM", 30, 36);
        ctx.textAlign = "right";
      } else {
        ctx.fillText("ForiKaam Mobile", 25, 36);
        ctx.textAlign = "right";
        ctx.fillText("12:00 PM", 487, 36);
        ctx.textAlign = "left";
      }

      // App Header Banner
      ctx.fillStyle = "#00A651";
      ctx.fillRect(0, 55, 512, 110);
      
      ctx.fillStyle = "#FFFFFF";
      ctx.font = isUrdu ? "bold 32px Arial" : "bold 34px Arial";
      ctx.fillText(isUrdu ? "فوری کام · ForiKaam" : "فوری کام · ForiKaam", startX, 110);
      ctx.font = "18px Arial";
      ctx.fillText(isUrdu ? "ابھی لگاؤ، صحیح دام پاؤ" : "Abhi Lagao, Sahi Daam Pao", startX, 140);

      // Render Screen based on step
      switch (step) {
        case 0:
          // Step 1: Parameterized Job Post Tree
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 30px Arial" : "bold 32px Arial";
          ctx.fillText(isUrdu ? "1۔ کام کی تفصیل بتائیں" : "1. Describe Your Job", startX, 230);

          ctx.fillStyle = "#A1A1AA";
          ctx.font = "24px Arial";
          ctx.fillText(isUrdu ? "منتخب شدہ کیٹیگری:" : "Category Selected:", startX, 280);
          ctx.fillStyle = "#00FF87";
          ctx.fillText(isUrdu ? "پلمبر سروسز > پائپ لیک" : "Plumbing Services > Leaks", startX, 315);

          // Tree structure choices
          ctx.fillStyle = "#1E1E3F";
          ctx.fillRect(30, 370, 452, 90);
          ctx.fillRect(30, 485, 452, 90);
          ctx.fillRect(30, 600, 452, 90);

          // Draws checks and details
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 24px Arial" : "bold 26px Arial";
          ctx.fillText(isUrdu ? "جگہ: کچن سنک" : "Location: Kitchen Sink", startX, 420);
          ctx.fillText(isUrdu ? "کام کا وقت: تقریباً 1 گھنٹہ" : "Job Duration: ~1 Hour", startX, 535);
          ctx.fillText(isUrdu ? "سامان: ضرورت نہیں ہے" : "Materials: Not Required", startX, 650);

          ctx.fillStyle = "#00A651";
          ctx.beginPath();
          // Draw check circles on opposite sides based on alignment
          const circleX = isUrdu ? 65 : 447;
          ctx.arc(circleX, 415, 18, 0, 2 * Math.PI);
          ctx.arc(circleX, 530, 18, 0, 2 * Math.PI);
          ctx.arc(circleX, 645, 18, 0, 2 * Math.PI);
          ctx.fill();
          
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 22px Arial";
          ctx.textAlign = "center";
          ctx.fillText("✓", circleX, 423);
          ctx.fillText("✓", circleX, 538);
          ctx.fillText("✓", circleX, 653);
          ctx.textAlign = isUrdu ? "right" : "left";

          // CTA
          ctx.fillStyle = "#00A651";
          ctx.fillRect(30, 780, 452, 85);
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 28px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "صحیح دام تجویز کریں ←" : "Suggest Fair Price →", 256, 833);
          ctx.textAlign = isUrdu ? "right" : "left";
          break;

        case 1:
          // Step 2: AI Price Recommendation
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 30px Arial" : "bold 32px Arial";
          ctx.fillText(isUrdu ? "2۔ قیمت کا تعین کریں" : "2. Set Offered Price", startX, 230);

          ctx.fillStyle = "#A1A1AA";
          ctx.font = "22px Arial";
          ctx.fillText(isUrdu ? "علاقہ: ڈی ایچ اے فیز 5، پاکستان" : "Neighborhood: DHA Phase 5, Pakistan", startX, 280);

          // Price suggestion bounds
          ctx.fillStyle = "#1E1E3F";
          ctx.fillRect(30, 330, 452, 180);
          
          ctx.fillStyle = "#FF6B35";
          ctx.font = "bold 22px Arial";
          ctx.fillText(isUrdu ? "تجویز کردہ مارکیٹ قیمت" : "AI SUGGESTED MARKET PRICE", startX, 380);
          ctx.fillStyle = "#00FF87";
          ctx.font = "bold 44px Arial";
          ctx.fillText(isUrdu ? "800 - 1,400 روپے" : "Rs. 800 - 1,400", startX, 445);
          ctx.font = "18px Arial";
          ctx.fillStyle = "#A1A1AA";
          ctx.fillText(isUrdu ? "قریبی 23 کاموں کے ریٹ کے مطابق" : "Based on 23 recent jobs nearby", startX, 480);

          // User price display
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 28px Arial";
          ctx.fillText(isUrdu ? "آپ کی پیشکش:" : "Your Offer:", startX, 580);
          
          ctx.fillStyle = "#111126";
          ctx.strokeStyle = "#00A651";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(30, 610, 452, 100, 15);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#00FF87";
          ctx.font = "bold 48px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "1,200 روپے" : "Rs. 1,200", 256, 678);
          
          // Next Button
          ctx.fillStyle = "#00A651";
          ctx.fillRect(30, 780, 452, 85);
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 28px Arial";
          ctx.fillText(isUrdu ? "کام پوسٹ کریں اور بولیاں پائیں ←" : "Post Job & Receive Bids →", 256, 833);
          ctx.textAlign = isUrdu ? "right" : "left";
          break;

        case 2:
          // Step 3: Real-time worker bids
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 30px Arial" : "bold 32px Arial";
          ctx.fillText(isUrdu ? "3۔ لائیو بولیاں (3)" : "3. Real-Time Bids (3)", startX, 230);
          
          ctx.fillStyle = "#A1A1AA";
          ctx.font = "20px Arial";
          ctx.fillText(isUrdu ? "کام پوسٹ ہو گیا ہے۔ تصدیق شدہ کاریگروں کی پیشکش:" : "Job posted. Bids from verified Karigars:", startX, 275);

          // Bid Cards stack
          const drawBidCard = (y: number, name: string, rating: string, bid: string, time: string, isGreen: boolean) => {
            ctx.fillStyle = "#1E1E3F";
            ctx.strokeStyle = isGreen ? "#00A651" : "rgba(255,255,255,0.1)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(30, y, 452, 130, 10);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#FFFFFF";
            ctx.font = "bold 24px Arial";
            ctx.fillText(name, startX, y + 45);
            
            ctx.fillStyle = "#FFB347";
            ctx.font = "bold 20px Arial";
            ctx.fillText("★ " + rating, startX, y + 80);

            ctx.fillStyle = "#A1A1AA";
            ctx.font = "18px Arial";
            ctx.fillText(time, startX, y + 105);

            // Bidding price
            ctx.fillStyle = "#00FF87";
            ctx.font = "bold 30px Arial";
            ctx.textAlign = isUrdu ? "left" : "right";
            ctx.fillText(isUrdu ? bid + " روپے" : "Rs. " + bid, endX, y + 55);

            // Accept button
            ctx.fillStyle = isGreen ? "#00A651" : "#FF6B35";
            ctx.beginPath();
            const btnLeft = isUrdu ? 50 : 330;
            ctx.roundRect(btnLeft, y + 75, 130, 42, 6);
            ctx.fill();
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "bold 18px Arial";
            ctx.textAlign = "center";
            ctx.fillText(isUrdu ? "قبول کریں" : "Accept", btnLeft + 65, y + 102);
            ctx.textAlign = isUrdu ? "right" : "left";
          };

          drawBidCard(310, isUrdu ? "محمد آصف (پلمبر)" : "M. Asif (Plumber)", "4.8 (247)", "1,200", isUrdu ? "2 منٹ پہلے" : "2 mins ago", true);
          drawBidCard(460, isUrdu ? "ساجد محمود" : "Sajid Mahmood", "4.6 (98)", "1,150", isUrdu ? "ابھی" : "Just now", false);
          drawBidCard(610, isUrdu ? "رانا کامران" : "Rana Kamran", "4.9 (412)", "1,300", isUrdu ? "5 منٹ پہلے" : "5 mins ago", false);

          // Pulsing bidding text
          ctx.fillStyle = "#00FF87";
          ctx.font = "bold 22px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "⚡ لائیو بولیاں اپ ڈیٹ ہو رہی ہیں..." : "⚡ Bids updating live...", 256, 810);
          ctx.textAlign = isUrdu ? "right" : "left";
          break;

        case 3:
          // Step 4: Selected worker details and CNIC verification
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 30px Arial" : "bold 32px Arial";
          ctx.fillText(isUrdu ? "4۔ کاریگر روانہ ہو گیا" : "4. Karigar Dispatched", startX, 230);

          ctx.fillStyle = "#A1A1AA";
          ctx.font = "20px Arial";
          ctx.fillText(isUrdu ? "آپ کا کام اس کاریگر کو سونپا گیا ہے:" : "Your job has been assigned:", startX, 275);

          // Selected Worker Profiling
          ctx.fillStyle = "#1E1E3F";
          ctx.beginPath();
          ctx.roundRect(30, 310, 452, 190, 15);
          ctx.fill();

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 28px Arial";
          ctx.fillText(isUrdu ? "محمد آصف" : "Muhammad Asif", startX, 365);
          
          ctx.fillStyle = "#00FF87";
          ctx.font = "bold 20px Arial";
          ctx.fillText(isUrdu ? "🛡 نادرا بائیومیٹرک تصدیق شدہ" : "🛡 NADRA BIOMETRIC VERIFIED", startX, 410);

          ctx.fillStyle = "#A1A1AA";
          ctx.font = "20px Arial";
          ctx.fillText(isUrdu ? "شناختی کارڈ: ****-***-723-7" : "CNIC Hash: ****-***-723-7", startX, 445);
          ctx.fillText(isUrdu ? "ریٹنگ: ★ 4.8 · 247 کام مکمل" : "Rating: ★ 4.8 · 247 Jobs", startX, 475);

          // Map/Radar placeholder
          ctx.fillStyle = "#111126";
          ctx.strokeStyle = "rgba(0,166,81,0.3)";
          ctx.beginPath();
          ctx.roundRect(30, 525, 452, 230, 15);
          ctx.fill();
          ctx.stroke();

          // Draw radar circle
          ctx.strokeStyle = "#00A651";
          ctx.beginPath();
          ctx.arc(256, 640, 70, 0, 2 * Math.PI);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(256, 640, 30, 0, 2 * Math.PI);
          ctx.stroke();

          // Home icon and worker icon
          ctx.fillStyle = "#FF6B35";
          ctx.beginPath();
          ctx.arc(256, 640, 10, 0, 2 * Math.PI); // Home
          ctx.fill();

          ctx.fillStyle = "#00FF87";
          ctx.beginPath();
          ctx.arc(300, 610, 8, 0, 2 * Math.PI); // Worker approaching
          ctx.fill();

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 24px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "آمد: 18 منٹ (1.8 کلومیٹر دور)" : "ETA: 18 Mins (1.8 km away)", 256, 735);
          ctx.textAlign = isUrdu ? "right" : "left";

          // SOS
          ctx.fillStyle = "#D93838";
          ctx.beginPath();
          ctx.roundRect(30, 780, 452, 85, 10);
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 26px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "🆘 ہنگامی ایمرجنسی بٹن" : "🆘 Emergency SOS Trigger", 256, 833);
          ctx.textAlign = isUrdu ? "right" : "left";
          break;

        case 4:
          // Step 5: Completed job & payment release
          ctx.fillStyle = "#FFFFFF";
          ctx.font = isUrdu ? "bold 30px Arial" : "bold 32px Arial";
          ctx.fillText(isUrdu ? "5۔ کام مکمل ہو گیا" : "5. Job Completed", startX, 230);

          // Completed tick
          ctx.fillStyle = "#00A651";
          ctx.beginPath();
          ctx.arc(256, 370, 70, 0, 2 * Math.PI);
          ctx.fill();
          
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 80px Arial";
          ctx.textAlign = "center";
          ctx.fillText("✓", 256, 398);

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 34px Arial";
          ctx.fillText(isUrdu ? "شکریہ! کام مکمل۔" : "Shukriya! Job Done.", 256, 490);

          // Transaction invoice
          ctx.fillStyle = "#1E1E3F";
          ctx.beginPath();
          ctx.roundRect(40, 530, 432, 170, 12);
          ctx.fill();

          ctx.fillStyle = "#A1A1AA";
          ctx.font = "22px Arial";
          ctx.textAlign = isUrdu ? "right" : "left";
          ctx.fillText(isUrdu ? "کل سروس فیس" : "Total Service Amount", startX, 575);
          ctx.fillText(isUrdu ? "ادائیگی کا طریقہ" : "Payment Method", startX, 615);
          ctx.fillText(isUrdu ? "کاریگر کی اجرت (90%)" : "Worker Payout (90%)", startX, 655);

          ctx.fillStyle = "#00FF87";
          ctx.font = "bold 24px Arial";
          ctx.textAlign = isUrdu ? "left" : "right";
          ctx.fillText(isUrdu ? "1,200 روپے" : "Rs. 1,200", endX, 575);
          ctx.fillText(isUrdu ? "جاز کیش" : "JazzCash Mobile", endX, 615);
          ctx.fillText(isUrdu ? "1,080 روپے" : "Rs. 1,080", endX, 655);

          // Rate prompt
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 24px Arial";
          ctx.textAlign = "center";
          ctx.fillText(isUrdu ? "محمد آصف کو ریٹنگ دیں" : "Rate Muhammad Asif", 256, 750);
          
          ctx.fillStyle = "#FFB347";
          ctx.font = "38px Arial";
          ctx.fillText("★ ★ ★ ★ ★", 256, 800);

          // Re-post
          ctx.fillStyle = "#00A651";
          ctx.beginPath();
          ctx.roundRect(40, 835, 432, 70, 10);
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 22px Arial";
          ctx.fillText(isUrdu ? "ہوم ڈیش بورڈ پر جائیں" : "Go to Home Dashboard", 256, 878);
          ctx.textAlign = isUrdu ? "right" : "left";
          break;
      }

      screenTexture.needsUpdate = true;
    };

    // Initialize Canvas texture drawing
    drawScreenUI(activeStep, localeRef.current);

    // Apply geometry details
    screenMesh.geometry.computeBoundingBox();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Render & Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;
    
    // Track target rotation to animate tilts when activeStep changes
    let targetRotationX = 0.2;
    let targetRotationY = -0.4;
    let targetRotationZ = 0.0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Ambience float
      phoneGroup.position.y = Math.sin(elapsed * 1.5) * 0.15;
      
      // Adjust target tilt angles based on activeStep
      const currentStep = activeStepRef.current;
      switch (currentStep) {
        case 0: // Step 1: Frontal, slightly tilted
          targetRotationX = 0.2;
          targetRotationY = -0.3;
          targetRotationZ = 0.05;
          break;
        case 1: // Step 2: Focus
          targetRotationX = 0.15;
          targetRotationY = 0.3;
          targetRotationZ = -0.05;
          break;
        case 2: // Step 3: Left view
          targetRotationX = 0.3;
          targetRotationY = -0.55;
          targetRotationZ = 0.1;
          break;
        case 3: // Step 4: Flat front
          targetRotationX = 0.1;
          targetRotationY = -0.15;
          targetRotationZ = 0.0;
          break;
        case 4: // Step 5: High celebration view
          targetRotationX = 0.25;
          targetRotationY = 0.4;
          targetRotationZ = -0.08;
          break;
      }

      // Smooth interpolation of rotation values (LERP)
      phoneGroup.rotation.x += (targetRotationX - phoneGroup.rotation.x) * 0.08;
      phoneGroup.rotation.y += (targetRotationY - phoneGroup.rotation.y) * 0.08;
      phoneGroup.rotation.z += (targetRotationZ - phoneGroup.rotation.z) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Watch dynamic updates for activeStep and locale
    let lastRenderedStep = activeStep;
    let lastRenderedLocale = locale;
    
    const animateWrapper = () => {
      if (lastRenderedStep !== activeStepRef.current || lastRenderedLocale !== localeRef.current) {
        lastRenderedStep = activeStepRef.current;
        lastRenderedLocale = localeRef.current;
        drawScreenUI(lastRenderedStep, lastRenderedLocale);
      }
      animate();
    };

    animateWrapper();

    // Cleanups
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      screenTexture.dispose();
      phoneGeometry.dispose();
      phoneMaterial.dispose();
      bezelGeom.dispose();
      bezelMat.dispose();
      screenGeom.dispose();
      screenMat.dispose();
    };
  }, []);

  const isUrdu = locale === "ur";

  if (!webGLSupported) {
    return (
      <div className="relative w-full h-[550px] flex items-center justify-center bg-[#070719] rounded-2xl overflow-hidden border border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.06)_0%,transparent_70%)]" />
        
        {/* Mock 2D static phone frame with interactive SVG details */}
        <div className="w-[280px] h-[520px] rounded-[40px] border-4 border-slate-700 bg-slate-900 shadow-2xl overflow-hidden flex flex-col relative">
          {/* Speaker ear piece & camera notch */}
          <div className="w-1/3 h-5 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20 flex justify-center items-center">
            <div className="w-10 h-1 bg-slate-900 rounded-full" />
          </div>

          {/* Screen Content Wrapper */}
          <div className="flex-1 bg-[#0A0A1A] p-4 flex flex-col pt-8">
            {/* Logo */}
            <div className="text-emerald-500 font-display font-bold text-center tracking-wider text-xl mb-4 border-b border-slate-800 pb-2">
              ForiKaam
            </div>
            
            {/* Screen detail renders depending on activeStep */}
            {activeStep === 0 && (
              <div className={`flex-1 flex flex-col gap-3 text-left ${isUrdu ? "text-right" : "text-left"}`}>
                <h4 className="text-white text-sm font-subdisplay font-bold">
                  {isUrdu ? "1۔ کام کی تفصیل بتائیں" : "1. Post Parameterized Job"}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {isUrdu ? "ایپ الجھن سے بچنے کے لیے مراحل وار تفصیل پوچھتی ہے:" : "The app leads you through a decision tree for absolute clarity:"}
                </p>
                <div className="bg-[#1E1E3F] p-2.5 rounded border border-emerald-500/20 text-[10px] space-y-1.5 mt-2">
                  <p><span className="text-slate-400">{isUrdu ? "پیشہ:" : "Trade:"}</span> <span className="text-emerald-400">{isUrdu ? "پلمبر سروسز" : "Plumbing"}</span></p>
                  <p><span className="text-slate-400">{isUrdu ? "کام:" : "Task:"}</span> <span className="text-emerald-400">{isUrdu ? "کچن پائپ لیک" : "Leaking Kitchen Pipe"}</span></p>
                  <p><span className="text-slate-400">{isUrdu ? "سامان:" : "Materials:"}</span> <span className="text-emerald-400">{isUrdu ? "ضرورت نہیں" : "Not required"}</span></p>
                  <p><span className="text-slate-400">{isUrdu ? "وقت:" : "Duration:"}</span> <span className="text-emerald-400">{isUrdu ? "تقریباً 1 گھنٹہ" : "~1 hour"}</span></p>
                </div>
                <div className="mt-auto bg-emerald-600 text-center py-2 rounded text-white text-xs font-bold">
                  {isUrdu ? "✓ پوسٹ تیار ہو گئی" : "✓ Structured Post Created"}
                </div>
              </div>
            )}
            
            {activeStep === 1 && (
              <div className={`flex-1 flex flex-col gap-3 ${isUrdu ? "text-right" : "text-left"}`}>
                <h4 className="text-white text-sm font-subdisplay font-bold">
                  {isUrdu ? "2۔ قیمت کا تعین کریں" : "2. Suggested Price Range"}
                </h4>
                <p className="text-[11px] text-slate-400">
                  {isUrdu ? "مارکیٹ ریٹ کے مطابق مناسب ریٹ:" : "AI analyses recent transactions to suggest a fair budget:"}
                </p>
                <div className="bg-[#1E1E3F] p-3 rounded text-center my-2">
                  <span className="text-[10px] text-emerald-400 font-bold block mb-1">
                    {isUrdu ? "تجویز کردہ قیمت" : "RECOMMENDED BAND"}
                  </span>
                  <span className="text-lg text-emerald-400 font-mono font-bold">
                    {isUrdu ? "800 - 1400 روپے" : "Rs. 800 - 1,400"}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{isUrdu ? "آپ کی پیشکش:" : "Your custom offer:"}</p>
                <div className="border border-emerald-500 bg-[#0c0c20] text-emerald-400 text-center py-2.5 rounded font-mono font-bold text-lg">
                  {isUrdu ? "1,200 روپے" : "Rs. 1,200"}
                </div>
                <div className="mt-auto bg-emerald-600 text-center py-2 rounded text-white text-xs font-bold">
                  {isUrdu ? "بولیاں وصول کریں" : "Proceed To Bidding"}
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className={`flex-1 flex flex-col gap-2 overflow-y-auto ${isUrdu ? "text-right" : "text-left"}`}>
                <h4 className="text-white text-sm font-subdisplay font-bold">
                  {isUrdu ? "3۔ لائیو بولیاں حاصل کریں" : "3. Live Bids Arriving"}
                </h4>
                <p className="text-[10px] text-slate-400">
                  {isUrdu ? "نادرا سے تصدیق شدہ کاریگروں کی بولیاں:" : "NADRA-verified workers bid in real time near you:"}
                </p>
                
                <div className="bg-[#1E1E3F] p-2 rounded text-[9px] flex justify-between items-center border border-emerald-500/20">
                  <div className={isUrdu ? "text-right" : "text-left"}>
                    <p className="font-bold text-white">{isUrdu ? "محمد آصف (پلمبر)" : "M. Asif (Plumber)"}</p>
                    <p className="text-emerald-400">★ 4.8 (247 jobs)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold font-mono">{isUrdu ? "1,200 روپے" : "Rs. 1,200"}</p>
                    <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[8px]">{isUrdu ? "ہائر کریں" : "Accept"}</span>
                  </div>
                </div>
                
                <div className="bg-[#1E1E3F] p-2 rounded text-[9px] flex justify-between items-center">
                  <div className={isUrdu ? "text-right" : "text-left"}>
                    <p className="font-bold text-white">{isUrdu ? "ساجد محمود" : "Sajid Mahmood"}</p>
                    <p className="text-emerald-400">★ 4.6 (98 jobs)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold font-mono">{isUrdu ? "1,150 روپے" : "Rs. 1,150"}</p>
                    <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[8px]">{isUrdu ? "ہائر کریں" : "Accept"}</span>
                  </div>
                </div>
                <div className="text-center text-[10px] text-emerald-400 animate-pulse mt-2">
                  {isUrdu ? "⚡ لائیو اپ ڈیٹس..." : "⚡ Checking more workers..."}
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className={`flex-1 flex flex-col gap-2.5 ${isUrdu ? "text-right" : "text-left"}`}>
                <h4 className="text-white text-sm font-subdisplay font-bold">
                  {isUrdu ? "4۔ کاریگر روانہ ہو گیا" : "4. Worker Dispatched"}
                </h4>
                <div className="bg-[#1E1E3F] p-2.5 rounded text-[10px]">
                  <p className="font-bold text-white">{isUrdu ? "محمد آصف" : "Muhammad Asif"}</p>
                  <p className="text-emerald-400 font-bold text-[9px]">{isUrdu ? "🛡 نادرا بائیومیٹرک تصدیق شدہ" : "🛡 NADRA BIOMETRIC VERIFIED"}</p>
                  <p className="text-slate-400">{isUrdu ? "شناخت ملاپ درست ✓" : "CNIC Match Confirmed ✓"}</p>
                </div>
                <div className="flex-1 border border-dashed border-emerald-500/30 rounded flex flex-col items-center justify-center bg-slate-950/40 relative">
                  <div className="w-16 h-16 rounded-full border border-emerald-500 animate-ping absolute opacity-20" />
                  <span className="text-[10px] text-slate-300 font-mono mt-4">{isUrdu ? "کاریگر آرہا ہے" : "Worker Approaching"}</span>
                  <span className="text-[11px] text-emerald-400 font-bold font-mono">{isUrdu ? "آمد: 18 منٹ" : "ETA: 18 mins"}</span>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-white text-sm font-subdisplay font-bold">{isUrdu ? "5۔ کام مکمل" : "5. Job Complete"}</h4>
                <div className="bg-[#1E1E3F] p-2.5 rounded text-[10px] w-full text-left">
                  <p className="flex justify-between"><span className="text-slate-400">{isUrdu ? "کل فیس:" : "Job Fee:"}</span><span className="text-emerald-400 font-mono">{isUrdu ? "1,200 روپے" : "Rs. 1,200"}</span></p>
                  <p className="flex justify-between"><span className="text-slate-400">{isUrdu ? "ادائیگی:" : "Payment:"}</span><span className="text-emerald-400">{isUrdu ? "جاز کیش ✓" : "JazzCash Pay ✓"}</span></p>
                </div>
                <div className="my-1.5">
                  <span className="text-[10px] text-slate-400 block mb-1">{isUrdu ? "کاریگر کو ریٹنگ دیں" : "Worker Rating"}</span>
                  <span className="text-emerald-400 text-lg">★ ★ ★ ★ ★</span>
                </div>
                <div className="bg-emerald-600 text-white w-full py-1.5 rounded text-[11px] font-bold">
                  {isUrdu ? "رقم ریلیز کریں" : "Release Wallet Payout"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-[550px]">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
}
