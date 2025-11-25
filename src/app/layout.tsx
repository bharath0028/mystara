import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MYSTARA",
  description: "A journey of brilliance begins each diamond shaping light, emotion, and timeless beauty through its crafted story, sparkle, and unforgettable visual elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="enable-cursor">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#BDC8C9" />
        <link href="/css/main.4b30b0f7de521b743d7c.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script 
          src="/js/runtime.4b30b0f7de521b743d7c.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="/js/npm.three.4b30b0f7de521b743d7c.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="/js/npm.gsap.4b30b0f7de521b743d7c.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="/js/main.20251124210519.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
