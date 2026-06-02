import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#102b1c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
