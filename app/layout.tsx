import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KALYAN AGRO — Premium Groundnut Seeds | Buy & Sell with Confidence",
  description:
    "KALYAN AGRO is India's trusted marketplace for premium groundnut seeds. Buy & sell certified seeds directly from farmers across India.",
  keywords: [
    "Kalyan Agro",
    "Groundnut Seeds",
    "Peanut Seeds",
    "Farmer Marketplace",
    "Indian Agriculture",
    "Buy Seeds Online",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
