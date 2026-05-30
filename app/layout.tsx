import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk, DM_Sans, Orbitron, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["900"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-noto-urdu",
  subsets: ["arabic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ForiKaam — Abhi Lagao, Sahi Daam Pao",
  description: "Pakistan's first parameterized reverse-auction labor marketplace connecting verified, NADRA-authenticated skilled workers (Karigars) with urban households. Fast Work. Fair Price. Done.",
  keywords: ["ForiKaam", "Karigar", "Plumber Pakistan", "Electrician Pakistan", "NADRA verified labor", "Reverse auction labor", "inDrive for labor"],
  openGraph: {
    title: "ForiKaam — Abhi Lagao, Sahi Daam Pao",
    description: "Connect with verified, NADRA-authenticated skilled workers in real time. Name your price and let workers bid.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${orbitron.variable} ${notoNastaliqUrdu.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A1A] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
