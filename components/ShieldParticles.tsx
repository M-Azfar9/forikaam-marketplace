"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ShieldParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

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
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Setup parameters
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 600 : 2000;
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3); // To store original coordinate layout

    // Create 3D Shield math shape points
    for (let i = 0; i < particleCount; i++) {
      // Y range from -1.8 to 1.8
      const y = (Math.random() - 0.5) * 3.6;
      
      // Width function based on Y height (tapers to a point at bottom, flares at top)
      let maxWidth = 0;
      if (y < 0) {
        // Taper to bottom
        maxWidth = (y + 1.8) * 0.8;
      } else {
        // Flare at top, curved
        maxWidth = Math.cos((y / 1.8) * Math.PI * 0.3) * 1.4;
      }

      // X range within maxWidth
      const x = (Math.random() - 0.5) * maxWidth * 2;
      
      // Z curved mapping (creates cylindrical dome shell)
      const distFromCenter = Math.abs(x) / (maxWidth || 1);
      const zCurve = Math.cos(distFromCenter * Math.PI * 0.5) * 0.6;
      
      // Add slight randomness/thickness
      const z = zCurve + (Math.random() - 0.5) * 0.15;

      const idx = i * 3;
      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      initialPositions[idx] = x;
      initialPositions[idx + 1] = y;
      initialPositions[idx + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      color: 0x00ff87,
      size: isMobile ? 0.05 : 0.04,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Glowing laser scanner line helper
    const scanLineGeom = new THREE.BoxGeometry(3, 0.03, 0.5);
    const scanLineMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.65,
    });
    const scanLine = new THREE.Mesh(scanLineGeom, scanLineMat);
    scene.add(scanLine);

    // Mouse interactive ripple setup
    const mouse = new THREE.Vector2(-9999, -9999);
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

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

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      
      // Ambient slow rotating
      particles.rotation.y = Math.sin(elapsed * 0.5) * 0.25;

      // Laser Scanner line movements (oscillating up & down)
      const scanY = Math.sin(elapsed * 2.2) * 1.7;
      scanLine.position.y = scanY;

      // Ripple effect calculation
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(particles);
      
      let intersectPoint: THREE.Vector3 | null = null;
      if (intersects.length > 0) {
        intersectPoint = intersects[0].point;
      }

      // Update positions buffer
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
      
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        
        // Grab baseline coordinates
        let x = initialPositions[idx];
        let y = initialPositions[idx + 1];
        let z = initialPositions[idx + 2];

        // Apply scan line wave displacement (creates a glow bar traveling down)
        const distToScanner = Math.abs(y - scanY);
        if (distToScanner < 0.15) {
          z += (0.15 - distToScanner) * 1.5;
        }

        // Apply mouse pointer ripple displacement
        if (intersectPoint) {
          // Convert particle coordinate to world coordinate space approximately
          const worldPos = new THREE.Vector3(x, y, z).applyMatrix4(particles.matrixWorld);
          const distance = worldPos.distanceTo(intersectPoint);
          
          if (distance < 1.0) {
            // Ripple wave formula
            const force = (1.0 - distance) * 0.35;
            const wave = Math.sin(distance * 12 - elapsed * 15);
            z += force * wave;
          }
        }

        positionAttr.setXYZ(i, x, y, z);
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanups
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      pMaterial.dispose();
      scanLineGeom.dispose();
      scanLineMat.dispose();
    };
  }, []);

  if (!webGLSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-[#070719] rounded-2xl overflow-hidden border border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.06)_0%,transparent_70%)]" />
        
        {/* Animated Vector Shield fallback */}
        <svg className="w-[70%] h-[70%] max-w-sm" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Shield Outline */}
          <path d="M100 20 L170 50 C170 140 135 200 100 220 C65 200 30 140 30 50 Z" stroke="#00A651" strokeWidth="4" fill="none" opacity="0.3" />
          
          {/* Inner Glowing Shield */}
          <path d="M100 30 L160 55 C160 130 130 185 100 205 C70 185 40 130 40 55 Z" stroke="#00FF87" strokeWidth="2.5" fill="rgba(0, 166, 81, 0.05)" className="animate-pulse" />

          {/* Interactive Checkmark */}
          <path d="M75 115 L93 133 L128 92" stroke="#00FF87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />

          {/* Biometric Laser Scanner Line */}
          <line x1="20" y1="120" x2="180" y2="120" stroke="#00FF87" strokeWidth="3" className="animate-[scan_3s_ease-in-out_infinite]" />

          {/* Glowing particle circles */}
          <circle cx="60" cy="70" r="2" fill="#00FF87" />
          <circle cx="140" cy="70" r="2" fill="#00FF87" />
          <circle cx="100" cy="160" r="2" fill="#00FF87" />
          <circle cx="80" cy="180" r="2" fill="#00FF87" />
          <circle cx="120" cy="180" r="2" fill="#00FF87" />
        </svg>

        <span className="absolute bottom-4 text-xs font-mono tracking-wider uppercase text-slate-400">
          NADRA Biometric Shield Partner
        </span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] md:min-h-[400px]">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* Floating scanner info overlay */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full border border-emerald-500/20 text-center pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 block animate-pulse">
          🛡 BIOMETRIC SCANNING ACTIVE
        </span>
      </div>
    </div>
  );
}
