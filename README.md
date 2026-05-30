# ForiKaam 🇵🇰

**"Abhi Lagao, Sahi Daam Pao"** — Book Now, Get the Right Price.

ForiKaam (فوری کام) is Pakistan's first parameterized reverse-auction labor marketplace. It connects verified, NADRA-authenticated skilled workers (Karigars) with urban households through a real-time bidding system. 

This repository contains the source code for the **ForiKaam Startup Landing Page**, a high-impact, mobile-first web experience designed to attract homeowners, Karigars, and early investors.

## 🚀 Key Features

- **Dual-Audience Waitlist:** Targeted signups for both Homeowners and Karigar Workers.
- **Interactive Bidding Simulator:** A custom-built, React-powered interactive dashboard simulating the real-time reverse-auction flow (Homeowner posting -> Geofence broadcasts -> Live bids ledger -> Biometric verification scanner -> Dispatch and tracking).
- **NADRA Biometric Trust Layer:** Highlights our core USP—instant, contactless biometric identification via NADRA's Nishan Pakistan API.
- **Bilingual Support:** Seamless toggling between English and Urdu to cater to the diverse Pakistani market.
- **Premium Aesthetics:** Dark mode glassmorphism, vibrant emerald green accents (`#00A651`), and dynamic CSS animations to convey speed and trust.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v16.2.6) - React framework for production.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework for rapid UI development.
- **Language:** TypeScript - For type safety and better developer experience.
- **Fonts:** Next.js Font Optimization (Barlow Condensed, Space Grotesk, DM Sans, Orbitron, Noto Nastaliq Urdu).

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/` - Next.js App Router pages and global layouts (`page.tsx`, `layout.tsx`, `globals.css`).
- `components/` - Reusable React components including the core interactive simulators (`AuctionCityScene.tsx`, `PhoneMockupScene.tsx`, `PakistanMap.tsx`, `WaitlistForm.tsx`, `ShieldParticles.tsx`).
- `lib/` - Utility functions and translations (`translations.ts`).
- `public/` - Static assets like images and icons.

## 🌐 Brand Identity

- **Primary Color:** Electric Green (`#00A651`) — signifies speed, action, and "go".
- **Accent Color:** Deep Navy (`#1A1A2E`) — signifies trust and reliability.
- **Highlight Color:** Saffron Orange (`#FF6B35`) — currently phased out in favor of a cleaner, all-green aesthetic, but originally part of the palette.
- **Typography:** Heavy sans-serifs for English headers, Noto Nastaliq for authentic Urdu script rendering.

## 📄 License

© 2026 ForiKaam (Pvt.) Ltd. · SECP Registered · Pakistan
Official NADRA Nishan Pakistan API Partner
