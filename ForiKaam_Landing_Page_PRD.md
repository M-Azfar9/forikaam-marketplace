# ForiKaam — Landing Page PRD
### Product Requirements Document · Startup Landing Page · v1.0
**Prepared:** June 2026 | **Status:** Ready for Development | **Confidential**

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Target Audience](#4-target-audience)
5. [Visual Design System](#5-visual-design-system)
6. [3D Animation & Motion Strategy](#6-3d-animation--motion-strategy)
7. [Page Architecture & Section Breakdown](#7-page-architecture--section-breakdown)
8. [Website Content Plan](#8-website-content-plan)
9. [Component Specifications](#9-component-specifications)
10. [Technical Stack & Implementation](#10-technical-stack--implementation)
11. [Responsive Design](#11-responsive-design)
12. [Performance Requirements](#12-performance-requirements)
13. [Accessibility](#13-accessibility)
14. [Analytics & Tracking](#14-analytics--tracking)
15. [Launch Checklist](#15-launch-checklist)

---

## 1. Executive Summary

**ForiKaam** (فوری کام) is Pakistan's first parameterized reverse-auction labor marketplace — connecting verified, NADRA-authenticated skilled workers with urban households through a real-time bidding system. The platform's slogan: *"Abhi Lagao, Sahi Daam Pao"* — Book Now, Get the Right Price.

This document defines the complete product requirements for ForiKaam's **startup marketing landing page** — a single-page, high-impact web experience designed to:

- Build immediate brand awareness and cultural resonance with Pakistani audiences
- Attract early adopters (homeowners & Karigar workers)
- Drive investor interest ahead of the Seed round
- Establish ForiKaam as a category-defining brand

The landing page must be viscerally exciting — a visual statement of the urgency and innovation baked into the brand's DNA. Every pixel should say: **فوری** — *right now*.

---

## 2. Product Overview

| Property | Details |
|---|---|
| **Page Type** | Single-Page Application (SPA) / Long-scroll Landing Page |
| **Primary Goal** | Dual waitlist signups: Homeowners + Karigar Workers |
| **Secondary Goal** | Investor interest form + App store pre-registration |
| **Language** | English primary; Roman Urdu headline accents |
| **Target Devices** | Mobile-first (60%+ traffic), Desktop, Tablet |
| **Launch Market** | Pakistan (Lahore, Karachi, Rawalpindi/Islamabad) |

---

## 3. Goals & Success Metrics

### Primary KPIs

| Metric | 30-Day Target | 90-Day Target |
|---|---|---|
| Waitlist Signups (Homeowners) | 2,000 | 10,000 |
| Karigar Pre-registrations | 1,000 | 5,000 |
| Investor Inquiry Form Submissions | 50 | 200 |
| Average Time on Page | > 2:30 min | > 3:00 min |
| Bounce Rate | < 40% | < 35% |
| Conversion Rate (Visitor → Signup) | > 8% | > 12% |

### Secondary KPIs

- Social share rate (WhatsApp, Twitter/X, LinkedIn)
- Video play rate (if explainer video is embedded)
- CTA click-through rate per section
- Scroll depth (85%+ users reaching How It Works section)

---

## 4. Target Audience

### Persona 1 — The Urban Homeowner ("Ghar Waala")
- **Age:** 28–50
- **Location:** DHA, Bahria Town, Gulshan, Clifton, F-7
- **Device:** iPhone 13–15, Samsung Galaxy A-series
- **Pain Point:** Can't find trustworthy workers; unsure of fair pricing
- **Motivation:** Safety, convenience, fair price
- **Language Comfort:** English + Roman Urdu

### Persona 2 — The Skilled Worker / Karigar
- **Age:** 20–45
- **Trade:** Electrician, Plumber, Carpenter, Welder, Mechanic
- **Device:** Tecno, Itel, Samsung A13 — low to mid-end Android
- **Pain Point:** Middlemen stealing 30–50% of their wages; no digital presence
- **Motivation:** More jobs, fair earnings, respect
- **Language Comfort:** Roman Urdu / Urdu script

### Persona 3 — The Investor / Tech Community
- **Profile:** Angel investors, VC associates, tech journalists, startup ecosystem actors
- **Interest:** Market size, differentiation, founding team conviction
- **Language:** English
- **Arrives via:** LinkedIn, Twitter/X, startup newsletters

---

## 5. Visual Design System

### 5.1 Brand Colors (As Defined in Blueprint)

| Role | Color Name | Hex |
|---|---|---|
| Primary | Electric Green | `#00A651` |
| Accent | Deep Navy | `#1A1A2E` |
| Highlight | Saffron Orange | `#FF6B35` |

### 5.2 Gradient Color Palette (Creative Direction — New)

The landing page adopts a **dark-base gradient system** that elevates the original brand palette into a cinematic, premium digital experience. Pakistan is a market of passion and urgency — the gradients must feel electric, alive, and bold.

#### Primary Hero Gradient — "The Auction Surge"
```
Background: radial-gradient(ellipse at 30% 50%, #0D3B1E 0%, #1A1A2E 45%, #0A0A1A 100%)
```
*Deep navy base with a smoldering green core — like a city lit up at night with opportunity.*

#### Accent Gradient — "Fori Flash"
```
Button / CTA: linear-gradient(135deg, #00A651 0%, #00D46A 50%, #00FF87 100%)
```
*Neon green surge — the color of 'go,' of speed, of the bid landing.*

#### Section Gradient — "Saffron Dusk"
```
linear-gradient(160deg, #FF6B35 0%, #FF9500 40%, #FFB347 100%)
```
*Warm saffron-to-amber — used for worker/Karigar sections; warmth, dignity, earning.*

#### Card / Glass Gradient — "Urban Glass"
```
background: linear-gradient(135deg, rgba(0,166,81,0.08) 0%, rgba(26,26,46,0.6) 100%);
backdrop-filter: blur(20px);
border: 1px solid rgba(0,166,81,0.2);
```
*Frosted glass cards on dark backgrounds — modern, premium, trustworthy.*

#### Statistics / Data Section — "Trust Layer"
```
linear-gradient(180deg, #1A1A2E 0%, #0F1729 50%, #0D1A0D 100%)
```
*Dark navy-to-deep-green — the serious, data-heavy part of the page.*

#### Investor Section — "Authority Gradient"
```
linear-gradient(135deg, #0A0A1A 0%, #1A1A2E 50%, #1A0D00 100%)
```
*Near-black with a hint of saffron warmth — conveys gravity and ambition.*

### 5.3 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Hero Headline | **Bebas Neue** or **Barlow Condensed Black** | 900 | All-caps, ultra-compressed, high impact |
| Sub-headlines | **Space Grotesk** (or **Syne**) | 600–700 | Modern, technical feel |
| Body Copy | **DM Sans** | 400–500 | Highly readable, neutral |
| Urdu / Roman Urdu Accents | **Noto Nastaliq Urdu** | 400 | For in-page Urdu script moments |
| Data / Numbers | **Orbitron** or **JetBrains Mono** | 700 | For metric counters |

### 5.4 Spacing & Layout

- **Max content width:** 1280px
- **Section vertical padding:** 120px desktop / 80px mobile
- **Grid system:** 12-column, 24px gap
- **Border radius:** 16px (cards), 100px (pill buttons), 8px (inputs)
- **Shadow system:** Green-tinted box shadows: `0 0 40px rgba(0,166,81,0.15)`

### 5.5 Iconography

- Custom icon set: wrench, lightning bolt, shield, map pin, bid-card icons
- Lightning-bolt-fused-with-wrench as the App Icon — used as a recurring motif
- NADRA shield badge icon (blue, verified checkmark)
- Style: Outlined with 2px stroke, slight glow effect on hover

---

## 6. 3D Animation & Motion Strategy

The 3D animations are the landing page's **show-stopping differentiator**. They must feel like a AAA product launch — think Stripe, Linear, or Vercel — but with Pakistani cultural soul.

### 6.1 Animation Philosophy

> *"Speed is the brand. Every animation should feel like a bid landing, a deal struck, a worker dispatched — fast, decisive, inevitable."*

- All animations serve a narrative purpose — no decoration for its own sake
- 3D elements respond to cursor/scroll/device tilt (gyroscope on mobile)
- Performance-gated: 3D degrades gracefully to CSS animations on low-end devices

### 6.2 Hero Section — 3D Auction Engine Visualization

**Concept:** A floating 3D city grid of Pakistan (isometric view), with glowing worker avatars moving in real time toward a pulsing job pin. Bid cards fly upward from workers and orbit the job pin before one locks in.

**Implementation:**
- **Library:** Three.js + GSAP for orchestration
- **Scene:** Low-poly isometric city mesh (Lahore-inspired architecture silhouette)
- **Worker Avatars:** 3D capsule figures with glowing Electric Green auras
- **Bid Cards:** Floating 3D cards with worker names, bid amounts, animated numbers
- **Winner Animation:** One card flies toward the pin and "locks in" with a satisfying click + flash
- **Loop:** Continuous, ~8 second ambient loop with new jobs spawning

**Technical specs:**
```
Renderer: WebGL (Three.js r158+)
Target FPS: 60fps desktop, 30fps mobile
Fallback: CSS animated SVG illustration
Canvas size: Full viewport width, 85vh height
```

### 6.3 How It Works — Scroll-Triggered 3D Phone Mockup

**Concept:** A 3D smartphone (floating, rotating) shows the live UI flow as the user scrolls through each step. The phone tilts, the screen transitions, and each step of the 5-step process is animated on-screen.

**Implementation:**
- **Library:** Three.js + Lottie for UI micro-animations inside the phone screen
- **Phone model:** Custom GLTF model — thin-bezel phone with matte finish
- **Scroll binding:** GSAP ScrollTrigger pins the phone and animates the screen content per step
- **Steps visible:** Job posting tree → Price suggestion → Bid cards arriving → Worker selected → Completion

### 6.4 NADRA Verification — Particle Shield Animation

**Concept:** As user scrolls to the Trust section, a 3D shield assembles itself from particles, each particle representing a verified worker. The shield pulses with a protective glow and rotates slowly.

**Implementation:**
- **Library:** Three.js particle system
- **Particle count:** 2,000 particles forming shield geometry
- **Colors:** Electric Green particles on Deep Navy background
- **Interaction:** Mouse hover causes ripple effect across shield surface

### 6.5 Statistics Counter — Floating 3D Number Cards

**Concept:** Key stats (80.8% informal workforce, 52M workers, Rs. 600M projected revenue) appear as 3D cards that flip into view, like a departures board at an airport, each number counting up.

**Implementation:**
- **Library:** GSAP + CSS 3D transforms
- **Trigger:** IntersectionObserver — fires when section enters viewport
- **Effect:** Split-flap/odometer style counter + card tilt on scroll

### 6.6 Map — Live 3D Job Activity Globe/City Map

**Concept:** An animated 3D map of Pakistan with glowing dots for job activity across Lahore, Karachi, and Islamabad. Arcs animate between worker locations and homeowner pins.

**Implementation:**
- **Library:** Deck.gl or Three.js with custom GeoJSON
- **Visual:** Dark map base (Mapbox dark style), Electric Green arcs, pulsing job pins
- **Data:** Simulated/demo data showing realistic activity patterns

### 6.7 Micro-Animations (CSS / GSAP)

| Element | Animation |
|---|---|
| Navigation links | Underline slides in from left on hover |
| CTA buttons | Subtle scale(1.04) + glow pulse on hover |
| Feature cards | translateY(-8px) + shadow deepen on hover |
| Section entrances | Staggered fade-up (Y: 40px → 0) on scroll |
| Mobile nav | Slide-in drawer with blur backdrop |
| Form inputs | Border color transitions to Electric Green on focus |
| Success state | Confetti burst (green/orange particles) after signup |

---

## 7. Page Architecture & Section Breakdown

```
┌─────────────────────────────────────────────────────┐
│  1. NAVIGATION                                       │
├─────────────────────────────────────────────────────┤
│  2. HERO SECTION         (3D Animation: City Grid)   │
├─────────────────────────────────────────────────────┤
│  3. PROBLEM STATEMENT    (Stats + Pain Points)       │
├─────────────────────────────────────────────────────┤
│  4. THE SOLUTION         (3D Phone Mockup Scroll)    │
├─────────────────────────────────────────────────────┤
│  5. HOW IT WORKS         (5-Step Animated Flow)      │
├─────────────────────────────────────────────────────┤
│  6. TRUST LAYER          (3D Shield / NADRA)         │
├─────────────────────────────────────────────────────┤
│  7. FOR HOMEOWNERS       (Customer App Features)     │
├─────────────────────────────────────────────────────┤
│  8. FOR KARIGAR          (Worker App Features)       │
├─────────────────────────────────────────────────────┤
│  9. COMPETITIVE EDGE     (Comparison Table)          │
├─────────────────────────────────────────────────────┤
│  10. IMPACT NUMBERS      (3D Counter Cards)          │
├─────────────────────────────────────────────────────┤
│  11. MARKET OPPORTUNITY  (3D Map + Data)             │
├─────────────────────────────────────────────────────┤
│  12. FOR INVESTORS       (Traction + Pitch Deck CTA) │
├─────────────────────────────────────────────────────┤
│  13. WAITLIST SIGNUP     (Dual CTA Form)             │
├─────────────────────────────────────────────────────┤
│  14. FOOTER                                          │
└─────────────────────────────────────────────────────┘
```

---

## 8. Website Content Plan

### Section 1 — Navigation

**Logo:** ForiKaam wordmark + lightning-wrench icon (SVG, Electric Green on transparent)

**Nav Links:**
- How It Works
- For Karigar
- For Homeowners
- Investors
- Join Waitlist (CTA button — green pill)

**Sticky behavior:** Transparent on hero, transitions to `rgba(10,10,26,0.9)` with blur on scroll.

---

### Section 2 — Hero Section

**Eyebrow text:**
> Pakistan's First Parameterized Reverse-Auction Labor Marketplace

**Primary Headline (2 lines, enormous):**
> **KAAM FORI.**
> **DAAM SAHI.**

*Sub-headline (English):*
> Fast Work. Fair Price. Done.
> The platform that finally connects Pakistan's 52 million informal workers with the households that need them — safely, instantly, at the right price.

**Hero CTA Block:**
- Button 1 (Primary): `I Need Work Done →` (Green gradient pill)
- Button 2 (Secondary): `I'm a Karigar →` (Orange outline pill)
- Micro-text below: *"NADRA Verified Workers · Real-Time Bids · No Middlemen"*

**Trust indicators (inline icons):**
- 🛡 NADRA Verified Workers
- ⚡ Real-Time Bidding
- 💸 Zero Middlemen
- 📍 Lahore · Karachi · Islamabad

**3D Animation:** Full-width city auction visualization (see Section 6.2)

---

### Section 3 — The Problem

**Section Label:** THE PROBLEM WE'RE SOLVING

**Headline:**
> Pakistan's Labor Market Is Broken.
> And Everyone Knows It.

**Sub-headline:**
> 80.8% of Pakistan's workforce is informal. Yet there's no safe, digital, fair way to find them.

**4 Pain Point Cards (grid layout, glass morphism):**

| # | Icon | Title | Copy |
|---|---|---|---|
| 1 | 🔴 | No Trust | *You can't invite a stranger into your home. Middle-class households — especially those with women at home — simply won't risk it without verified identity.* |
| 2 | 🔴 | No Discovery | *In 2026, people still walk to a chowk to find a plumber. Pakistan's 68% under-30 population has no inherited 'ustaad rolodex' and no digital alternative.* |
| 3 | 🔴 | No Fair Price | *Neither side knows the market rate. Homeowners overpay. Workers underpay — because thekedar middlemen extract 30–50% of their wage just for making the introduction.* |
| 4 | 🔴 | No Visibility | *A 15-year master electrician and a first-week laborer stand at the same chowk, on the same terms. Price becomes the only signal. Quality leaves the market.* |

**Pull-quote (large, dramatic):**
> *"Urban households spend 26% of income on housing and utilities — yet there's no trusted digital channel to hire the people who service those needs."*
> — HIES 2024-25

---

### Section 4 — The Solution

**Section Label:** THE FORIKAAM WAY

**Headline:**
> The Culture of Bargaining —
> Digitized, Systematized, and Made Safe.

**Sub-headline:**
> Think inDrive, but for Pakistan's informal labor sector.
> Same negotiation culture Pakistanis already love — now with NADRA identity, real-time bids, and zero middlemen.

**Split Layout:**
- Left: 3D scrolling phone mockup (see Section 6.3)
- Right: Solution pillars with animated reveal

**4 Solution Pillars:**

| Pillar | Icon | Headline | Copy |
|---|---|---|---|
| Trust | 🛡 | NADRA Verified, In 60 Seconds | *Every Karigar is biometrically matched against Pakistan's national ID database via NADRA's Nishan Pakistan API. Not a stranger. A confirmed citizen.* |
| Discovery | 📍 | Find Verified Workers Near You, Right Now | *Post a job. See all verified workers within 5km. No chowk visit. No phonebook. No waiting until morning.* |
| Fair Price | ⚡ | Name Your Price. Watch Workers Bid. | *You say what you'll pay. Workers in your area bid to accept, counter-offer, or decline. You pick the best fit. Both parties win.* |
| Clarity | 📋 | Parameterized Jobs. Zero Ambiguity. | *Our structured job decision tree eliminates vague requests. Every bid is on a fully specified job — so workers and homeowners never argue about scope again.* |

---

### Section 5 — How It Works

**Section Label:** HOW IT WORKS

**Headline:**
> From Job Post to Worker at Your Door.
> In Under an Hour.

**5-Step Animated Flow (scroll-linked to 3D phone):**

**Step 1 — You Post a Parameterized Job**
> The app guides you through a structured decision tree — not a free-text box. Example: *Plumbing → Leaking Pipe → Kitchen → Under-sink → ~1 hour → Materials not needed.* Clarity before a single bid is placed.

**Step 2 — AI Suggests a Fair Price Range**
> Based on real transaction data from your neighborhood, job type, and time of day, ForiKaam shows you what the fair market price looks like. You decide your offer.

**Step 3 — Verified Workers Bid in Real Time**
> Every NADRA-verified Karigar within 5km receives your job card instantly. They can accept, counter-bid, or decline — right from their phone. You watch bids arrive live.

**Step 4 — You Choose. They Come.**
> Review bids alongside each worker's rating, job count, and verification badge. Confirm your pick. Their ETA appears on your screen — and yours on theirs.

**Step 5 — Job Done. Payment Released. Reputation Built.**
> Pay via JazzCash, Easypaisa, or cash. Both parties rate each other. The platform earns 10% commission. The Karigar's public profile grows stronger with every job.

---

### Section 6 — The Trust Layer (NADRA)

**Section Label:** THE TRUST LAYER

**Headline:**
> Every Karigar Is NADRA Verified.
> Not a Stranger — A Confirmed Citizen.

**Sub-headline:**
> ForiKaam integrates Pakistan's Nishan Pakistan API — NADRA's national biometric verification system — as the mandatory first step for every worker on the platform.

**How It Works (3 steps, animated):**
1. Worker photographs CNIC + live selfie
2. ForiKaam calls NADRA Nishan Pakistan API in real-time
3. Biometric match confirmed → **ForiKaam Verified** badge issued in under 60 seconds

**Verification card visual:**
```
┌──────────────────────────────────┐
│  🛡 ForiKaam VERIFIED            │
│  Muhammad Asif · Electrician     │
│  ★★★★☆  ·  247 Jobs Completed   │
│  NADRA ID: ****-***-***-7        │
└──────────────────────────────────┘
```

**Key stat highlighted:**
> Rs. 20 per verification · Under 60 seconds · No office required

**Trust message (female safety angle):**
> *"Har Karigar NADRA Verified. Safe enough to open your door."*
> Designed with Pakistani households — especially women at home — in mind.

---

### Section 7 — For Homeowners

**Section Label:** FOR HOMEOWNERS

**Headline:**
> Ghar Ki Zaroorat?
> ForiKaam Par Post Karo.

**Sub-headline (English):**
> Get verified workers at your door with transparent pricing — no calls, no favors, no overcharging.

**App Features Grid (2×3):**
- 📋 Structured Job Posting — guided decision tree, not a free text box
- 🗺️ Live Bid Map — see workers bidding in real time on a map
- 🛡 Verified Profiles — rating, jobs completed, NADRA badge
- 💬 In-App Chat — communicate before the worker arrives
- 💳 JazzCash/Easypaisa/Cash — pay the way you prefer
- 🆘 SOS Button — one-tap emergency contact sharing during a job

**CTA:** `Join the Homeowner Waitlist →`

---

### Section 8 — For Karigar Workers

**Section Label:** ARE YOU A KARIGAR?

**Headline:**
> Kaam Dhundo.
> Sahi Daam Pao.
> Thekedar Ko Bhool Jao.

**Sub-headline (English):**
> Stop losing 30–50% of your earnings to middlemen. On ForiKaam, you set your price and keep 90% of every job.

**App Features Grid (2×3):**
- ⚡ One-Tap Bidding — Accept, Counter, or Decline in seconds
- 🔔 Real-Time Job Alerts — notifications in Urdu with voice readout
- 💰 Full Earnings Dashboard — track every job, every rupee
- 📱 Works on Any Android — optimized for Tecno, Itel, Samsung A-series
- 🎓 Skill Badges — earn ForiKaam certifications that increase your bid wins
- 💳 Cash Out Instantly — withdraw earnings to JazzCash or Easypaisa

**Income Impact stat:**
> Workers on similar platforms increased their monthly income from **Rs. 11,000 → Rs. 60,000/month**

**CTA:** `Register as a Karigar →`

---

### Section 9 — Competitive Edge

**Section Label:** WHY FORIKAAM WINS

**Headline:**
> Every Competitor Solved One Problem.
> ForiKaam Solves All Four.

**Comparison Table:**

| Platform | Dynamic Pricing | NADRA Verified | Structured Jobs | Home Services |
|---|---|---|---|---|
| Mahir Company | ❌ Fixed | ✅ Manual | ❌ | ✅ |
| KaamKrew | ❌ Fixed | ✅ Slow | ❌ | ✅ |
| Supertasker | ✅ Open Bid | ❌ | ❌ **← This killed it** | ✅ |
| inDrive | ✅ Reverse Auction | ✅ | N/A | ❌ **Big gap** |
| **ForiKaam** | ✅ **Real-Time** | ✅ **60-sec API** | ✅ **Built-in** | ✅ **100%** |

**The Three Moats (cards):**

1. **Parameterized Job Tree** — Architectural fix for Supertasker's fatal flaw. Structured bidding. No chaos.
2. **NADRA Nishan Pakistan API** — Launched Feb 2026. First labor platform in Pakistan to integrate biometric worker verification at scale.
3. **Proven Model — inDrive Proof** — inDrive's Pakistan rides grew ~40% YoY in 2025. Pakistanis love negotiating their own price. ForiKaam brings this model to a 10× larger market: home services.

---

### Section 10 — Impact Numbers

**Section Label:** THE OPPORTUNITY

**Headline:**
> This Is Not a Small Problem.
> This Is Pakistan's Largest Untapped Market.

**Animated Metric Cards (6 cards, flip-in):**

| Metric | Number | Context |
|---|---|---|
| Informal Workforce | **80.8%** | of Pakistan's employed population — Labour Force Survey 2024-25 |
| Invisible Workers | **52 Million** | skilled Pakistanis with no digital presence |
| Urban Households | **25 Million** | needing home services daily |
| Middleman Tax | **30–50%** | of wages stolen by thekedar contractors |
| Market CAGR | **80.3%** | global on-demand home services growth rate |
| Year 3 Target Revenue | **Rs. 600M** | (~$2.1M USD) conservative projection |

---

### Section 11 — Market Opportunity (Map)

**Section Label:** WHERE WE LAUNCH

**Headline:**
> Starting in Pakistan's Three Largest Cities.
> Then Everywhere Else.

**3D Map:** Animated Pakistan map with glowing city markers and job activity arcs

**City Cards:**
- 🟢 **Lahore** — Launch City · Month 4 · Target: 500 verified workers in 60 days
- 🟡 **Karachi** — Phase 2 · Month 8 · Pakistan's largest urban economy
- 🟡 **Rawalpindi/Islamabad** — Phase 2 · Month 8 · Capital Region
- ⬜ Faisalabad, Multan, Peshawar, Quetta — Phase 3 · Year 3

---

### Section 12 — For Investors

**Section Label:** FOR INVESTORS

**Headline:**
> Pakistan's Labor Market Is Broken.
> We're the Infrastructure Fix.

**Sub-headline:**
> $160,000 Seed Round · 18-Month Runway · Lahore Proof-of-Concept

**Investment highlights (3 columns):**

**The Market**
- 52M informal workers · 25M urban households
- Zero well-funded, structured competitor in home services
- On-demand home services growing at 80.3% CAGR globally
- Pakistan is at the very beginning of this curve

**The Differentiation**
- Only platform with NADRA API biometric verification at scale
- Parameterized job tree — architectural solution that Supertasker proved was the missing piece
- Proven reverse-auction behavioral fit — inDrive Pakistan growing 40% YoY

**The Financials**
- Rs. 44M Seed Round (~$157K USD)
- Year 1: Rs. 18M annual revenue
- Year 3: Rs. 600M annual revenue
- 10% take rate (lowest in market — builds liquidity fast)
- Series A target: $1.5–3M USD

**CTA Block:**
- `Download Pitch Deck →`
- `Request Investor Call →`
- Micro-text: *Ideal for: Pakistan-focused angels, diaspora investors, impact-focused VCs (IFC, USAID Digital Invest, Zayn Capital, Indus Valley Capital)*

---

### Section 13 — Waitlist Signup (Dual CTA)

**Section Label:** JOIN THE MOVEMENT

**Headline:**
> ForiKaam Is Coming to Your City.
> Be First.

**Sub-headline:**
> We're building something Pakistan has never seen. Join the waitlist and be among the first to use it — as a homeowner or as a Karigar.

**Toggle UI:**
Two-tab selector: `[ I Need Work Done ]` ↔ `[ I'm a Karigar ]`

**Homeowner Form Fields:**
- Full Name
- City (dropdown: Lahore / Karachi / Islamabad / Other)
- Phone Number (WhatsApp preferred)
- CTA: `Join Homeowner Waitlist →`

**Karigar Form Fields:**
- Full Name
- Trade / Skill (dropdown: Electrician / Plumber / Carpenter / AC Technician / Welder / Painter / Other)
- City
- Phone Number
- CTA: `Register as Karigar →`

**Success State:**
> 🎉 **Shukriya!** You're on the list.
> We'll reach out as soon as ForiKaam launches in your city.
> *Share with a friend who needs this:* [WhatsApp] [Twitter/X] [Copy Link]

---

### Section 14 — Footer

**Logo + tagline:**
> ForiKaam · فوری کام
> Fast Work. Fair Price. Done.

**Footer Links:**
- About | How It Works | For Karigar | For Homeowners | Investors | Privacy Policy | Terms of Service

**Social Icons:** WhatsApp | Instagram | Facebook | Twitter/X | LinkedIn

**Contact:** hello@forikaam.pk

**Legal:**
> © 2026 ForiKaam (Pvt.) Ltd. · SECP Registered · Pakistan
> *NADRA Nishan Pakistan API Partner*

---

## 9. Component Specifications

### 9.1 Navigation Component

```
Height: 72px
Position: fixed, top: 0
Background: transparent → rgba(10,10,26,0.92) blur(20px) on scroll
Transition: background 300ms ease, backdrop-filter 300ms ease
Z-index: 1000
Mobile: hamburger menu with slide-in drawer
CTA Button: green gradient pill, 40px height, 20px h-padding
```

### 9.2 Hero CTA Buttons

```
Primary CTA:
  background: linear-gradient(135deg, #00A651, #00D46A)
  border-radius: 100px
  padding: 16px 32px
  font: Barlow Condensed 700 18px
  box-shadow: 0 0 40px rgba(0,166,81,0.4)
  hover: scale(1.04), shadow intensifies

Secondary CTA:
  background: transparent
  border: 2px solid #FF6B35
  color: #FF6B35
  border-radius: 100px
  padding: 16px 32px
  hover: background rgba(255,107,53,0.1)
```

### 9.3 Glass Morphism Cards

```
background: linear-gradient(135deg, rgba(0,166,81,0.06), rgba(26,26,46,0.8))
border: 1px solid rgba(0,166,81,0.15)
border-radius: 20px
backdrop-filter: blur(20px)
padding: 32px
box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)
hover: border-color rgba(0,166,81,0.4), translateY(-4px)
```

### 9.4 Step Numbers (How It Works)

```
display: flex; align-items: center; justify-content: center
width: 64px; height: 64px
background: linear-gradient(135deg, #00A651, #00FF87)
border-radius: 50%
font: Orbitron 700 24px
color: #0A1A0A
box-shadow: 0 0 30px rgba(0,166,81,0.5)
```

### 9.5 Metric Counter Cards

```
background: rgba(26,26,46,0.8)
border: 1px solid rgba(0,166,81,0.2)
border-radius: 16px
padding: 40px 32px
Number: Orbitron 700 56px, color: #00D46A
Label: DM Sans 500 14px, color: rgba(255,255,255,0.6)
animation: countUp() triggered by IntersectionObserver
```

### 9.6 Form Inputs

```
background: rgba(26,26,46,0.6)
border: 1.5px solid rgba(255,255,255,0.1)
border-radius: 12px
padding: 14px 18px
color: white
font: DM Sans 400 16px
focus: border-color #00A651, box-shadow 0 0 0 3px rgba(0,166,81,0.2)
transition: all 200ms ease
```

---

## 10. Technical Stack & Implementation

### 10.1 Recommended Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SEO-critical SSR, Pakistan CDN support, image optimization |
| **Styling** | Tailwind CSS + CSS Modules | Utility-first + scoped custom animations |
| **3D Engine** | Three.js r165 | Proven, well-supported WebGL library |
| **Animation** | GSAP 3.12 + ScrollTrigger | Industry standard for scroll-driven animations |
| **Scroll 3D binding** | GSAP ScrollTrigger | Phone scroll animation in How It Works |
| **Form backend** | Supabase (waitlist table) | Easy PostgreSQL, Pakistan latency acceptable |
| **Email** | Resend / Brevo | Transactional email for signup confirmation |
| **Analytics** | Posthog + Google Analytics 4 | Event tracking + scroll depth |
| **Hosting** | Vercel (Edge Network) | Fastest TTFB from Pakistan for Next.js |
| **CDN** | Cloudflare | Already covers Pakistan well |
| **Fonts** | Google Fonts (self-hosted) | Bebas Neue, DM Sans, Orbitron |

### 10.2 Project Structure

```
forikaam-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── waitlist/route.ts
├── components/
│   ├── navigation/
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── AuctionCityScene.tsx    ← Three.js
│   ├── problem/
│   ├── solution/
│   │   ├── SolutionSection.tsx
│   │   └── PhoneScene.tsx          ← Three.js
│   ├── how-it-works/
│   ├── trust/
│   │   └── ShieldParticles.tsx     ← Three.js
│   ├── features/
│   ├── metrics/
│   ├── map/
│   │   └── PakistanMap.tsx         ← Three.js / Deck.gl
│   ├── investors/
│   ├── waitlist/
│   └── footer/
├── lib/
│   ├── three/
│   │   ├── scenes/
│   │   └── utils/
│   └── gsap/
│       └── animations/
├── public/
│   ├── models/              ← GLTF files
│   ├── textures/
│   └── fonts/
└── styles/
    ├── globals.css
    └── variables.css
```

### 10.3 Three.js Scene Management

Each 3D scene must:
- Be lazily loaded (dynamic import in Next.js)
- Check for WebGL support and fall back gracefully
- Dispose of resources on component unmount
- Use `requestAnimationFrame` with delta time for consistent FPS
- Respond to `prefers-reduced-motion` media query

```typescript
// Example scene lifecycle
const { scene, camera, renderer } = useThreeScene(canvasRef, {
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});

// Cleanup
useEffect(() => {
  return () => { renderer.dispose(); scene.clear(); };
}, []);
```

---

## 11. Responsive Design

### Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile S | 320px | Small Android devices (Tecno, Itel) |
| Mobile M | 375px | iPhone SE, standard mobile |
| Mobile L | 428px | iPhone Pro Max, large Android |
| Tablet | 768px | iPad, horizontal phone |
| Desktop S | 1024px | Laptops |
| Desktop L | 1280px | Standard desktops |
| Desktop XL | 1536px | Wide monitors |

### Mobile-Specific Requirements

- **3D animations:** Reduced complexity on mobile (lower poly, fewer particles)
- **Hero:** City 3D scene replaced with a simplified animated SVG on < 768px
- **Phone 3D mockup:** Scales to 80vw, scroll animation converted to tap-through
- **Particle shield:** 500 particles (vs 2000 on desktop)
- **Navigation:** Hamburger → full-screen overlay with staggered link animation
- **CTA buttons:** Full-width on mobile, 56px height (thumb-friendly)
- **Form:** Single column, large input fields (16px min font to prevent iOS zoom)

### Performance by Device Tier

```
HIGH-END (iPhone 15+, flagship Android):
  Full 3D scenes, 60fps, all animations

MID-RANGE (iPhone 12–14, Samsung A54):
  3D scenes with reduced poly, 30fps cap, most animations

LOW-END (Samsung A13, Tecno Camon, < 3GB RAM):
  CSS animated SVG fallbacks, no WebGL, pure scroll animations
```

---

## 12. Performance Requirements

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | > 85 (desktop), > 75 (mobile) | Lighthouse CI |
| Core Web Vitals LCP | < 2.5s | CWV |
| Core Web Vitals CLS | < 0.1 | CWV |
| Core Web Vitals FID/INP | < 200ms | CWV |
| 3D Scene First Load | < 3s (lazy + progressive) | Custom |
| Total Page Size | < 3MB (gzipped) | WebPageTest |
| Time to Interactive | < 4s on 4G | Lighthouse |
| Pakistan CDN TTFB | < 200ms | Vercel Edge |

### Optimization Strategies

- Three.js + GLTF models loaded via dynamic imports with loading states
- Textures in WebP/KTX2 format
- GLTF models compressed with Draco
- Critical CSS inlined, non-critical deferred
- Font subsetting (only characters used in page)
- Image lazy loading with blur placeholders
- `prefers-reduced-motion` respected — animations replaced with static versions

---

## 13. Accessibility

- **Color contrast:** All text meets WCAG AA minimum (4.5:1 ratio)
- **Focus states:** Visible keyboard focus rings (Electric Green, 3px)
- **Alt text:** All images and 3D scene have descriptive ARIA labels
- **Motion:** `prefers-reduced-motion` disables all non-essential animations
- **Screen reader:** 3D scenes have `aria-hidden="true"` with descriptive sibling text
- **Form labels:** All form fields have associated `<label>` elements
- **Language:** `lang="en"` on root, Urdu sections use `lang="ur"`
- **Tab order:** Logical, follows visual reading order

---

## 14. Analytics & Tracking

### Events to Track (Posthog / GA4)

| Event | Trigger |
|---|---|
| `page_view` | Page load |
| `cta_click` | Any CTA button click (with `{label, section}`) |
| `waitlist_tab_switch` | Toggle between Homeowner/Karigar form |
| `waitlist_submit` | Successful form submission (with `{type: homeowner/karigar, city}`) |
| `investor_deck_download` | Pitch deck CTA click |
| `investor_call_request` | Investor form submit |
| `scroll_depth` | 25%, 50%, 75%, 90%, 100% scroll milestones |
| `video_play` | If explainer video embedded |
| `3d_scene_loaded` | WebGL scene initialization success |
| `3d_scene_fallback` | WebGL not supported — CSS fallback shown |
| `share_click` | WhatsApp/Twitter/copy share in success state |

### UTM Tracking

All inbound links should support UTM parameters:
- `utm_source` (facebook, instagram, linkedin, whatsapp, twitter)
- `utm_medium` (social, paid, organic, direct)
- `utm_campaign` (launch, karigar_recruitment, investor_outreach)
- `utm_content` (specific ad creative identifier)

---

## 15. Launch Checklist

### Pre-Launch (T-14 Days)

- [ ] All sections designed and approved by founding team
- [ ] 3D scenes stress-tested on low-end Android devices (Tecno Camon)
- [ ] Waitlist form connected to Supabase + confirmation email flow live
- [ ] Pitch deck PDF uploaded and download link working
- [ ] All copy reviewed by Urdu-native proofreader
- [ ] Privacy policy and ToS pages live (linked from footer)
- [ ] Analytics events firing correctly in staging
- [ ] Lighthouse score > 80 on mobile
- [ ] OG tags set (title, description, image for social previews)
- [ ] Favicon + app icon in all required sizes
- [ ] SSL certificate active, HTTPS enforced
- [ ] Domain `forikaam.pk` / `forikaam.com` pointing to Vercel

### Launch Day (T-0)

- [ ] Announce via founder LinkedIn + Twitter/X
- [ ] WhatsApp broadcast to seed network (investors, early supporters)
- [ ] Submit to Product Hunt (Pakistan launch)
- [ ] Post in relevant Facebook groups (housing societies, startup Pakistan communities)
- [ ] Monitor Supabase waitlist in real time
- [ ] Monitor Sentry for JS errors
- [ ] Have rollback plan if 3D scenes cause widespread crashes

### Post-Launch (T+7 Days)

- [ ] Review first week analytics — scroll depth, conversion rate by section
- [ ] A/B test CTA copy ("Join Waitlist" vs "Be First in Lahore")
- [ ] Collect qualitative feedback from first 50 signups
- [ ] Adjust 3D performance thresholds based on real device data
- [ ] Prepare follow-up email to waitlist (progress update / launch timeline)

---

## Appendix A — Copy Tone Guide

**For all marketing copy on this landing page:**

- **Direct, not wordy.** "No middlemen." Not "ForiKaam eliminates the need for third-party intermediary contractors."
- **Roman Urdu headlines.** Use Urdu phrases for emotional resonance: "Kaam chahiye? ForiKaam kholo."
- **Never explain the brand name.** It's self-evident to every Pakistani. Trust the name.
- **Speed is the brand.** Every sentence should feel like a bid landing — fast, decisive.
- **Dignity, not charity.** Karigar workers are professionals on this platform. The copy should reflect that.
- **Proof over promise.** Use real data (HIES, Labour Force Survey, inDrive growth stats) wherever possible.

---

## Appendix B — Gradient Usage Map

| Section | Gradient Used | Rationale |
|---|---|---|
| Hero | The Auction Surge (dark navy-green) | Drama, depth, cinematic quality |
| Problem | Dark solid (`#0A0A1A`) | Serious, heavy atmosphere |
| Solution | Urban Glass cards | Modern, premium |
| How It Works | Trust Layer (navy→deep green) | Trustworthy, structured |
| NADRA Trust | The Auction Surge + shield green glow | Security, state authority |
| Homeowners | Subtle Auction Surge | Familiar, welcoming |
| Karigar | Saffron Dusk accents | Warmth, community, earning |
| Metrics | Trust Layer | Data gravitas |
| Investors | Authority Gradient | Serious, ambitious |
| Waitlist | Fori Flash on CTA | Action, urgency |

---

*ForiKaam Landing Page PRD · v1.0 · June 2026*
*Confidential — For Internal Use Only*
