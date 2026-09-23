import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  PHONE_TEL,
  EMAIL,
  CITY,
  STATE,
  CITY_STATE,
  SERVICE_AREA,
  FACEBOOK_URL,
} from "@/lib/site";

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
  title: `Milwaukee Pest Control | Beaver Pest Defense`,
  description: `Licensed, insured commercial and residential pest control in ${CITY_STATE} — warehouses, offices, healthcare facilities, restaurants, and homes.`,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Commercial & Residential Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Licensed and insured pest control for businesses, property managers, healthcare facilities, warehouses, and homes throughout ${SERVICE_AREA}.`,
    type: "website",
    url: SITE_URL,
    siteName: "Beaver Pest Defense",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "@id": `${SITE_URL}/#business`,
  name: "Beaver Pest Defense",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: `+${PHONE_TEL}`,
  email: EMAIL,
  priceRange: "$$",
  description: `Licensed and insured commercial and residential pest control serving ${SERVICE_AREA}. General pest control, rodent control, integrated pest management, and emergency pest response.`,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: STATE,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: SERVICE_AREA,
  },
  sameAs: [FACEBOOK_URL],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased bg-brand-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
