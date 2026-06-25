import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-bc",
  weight: ["600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaver Pest Defense | Commercial Pest Control You Can Count On",
  description:
    "Beaver Pest Defense delivers reliable, discreet, and effective pest management solutions for commercial and corporate properties. Licensed, insured, locally owned.",
  keywords:
    "commercial pest control, business pest management, IPM, pest defense, office pest control, warehouse pest control, restaurant pest control",
  metadataBase: new URL("https://www.beaverpestdefense.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beaver Pest Defense | Commercial Pest Control You Can Count On",
    description:
      "Reliable, discreet, and effective pest management for commercial and corporate properties.",
    type: "website",
    url: "https://www.beaverpestdefense.com",
    siteName: "Beaver Pest Defense",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased bg-brand-black text-white">
        {children}
      </body>
    </html>
  );
}
