import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_BASE } from "@/lib/config";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREA,
  SITE_URL,
} from "@/lib/site";

const TRUST_SIGNALS = [
  "Licensed and insured",
  "Locally owned",
  "Discreet service available",
  "Recurring commercial plans",
  "Emergency pest response",
  "Service reports and documentation",
  "Eco-conscious products whenever possible",
  "Free inspection or quote",
];

export type ContentBlock = {
  heading: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export default function LandingPage({
  kicker,
  h1,
  intro,
  blocks,
  path,
  serviceName,
  image,
  faqs,
}: {
  kicker: string;
  h1: string;
  intro: string;
  blocks: ContentBlock[];
  path: string;
  serviceName: string;
  image?: { src: string; alt: string };
  faqs?: FaqItem[];
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "PestControlService",
      "@id": `${SITE_URL}/#business`,
      name: "Beaver Pest Defense",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SERVICE_AREA,
    },
    url: `${SITE_URL}${path}`,
  };

  const faqSchema = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />

      <section className="relative bg-brand-black pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden">
        {!image && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 select-none"
            style={{ opacity: 0.05 }}
          >
            <svg width="500" height="600" viewBox="0 0 100 120" fill="none">
              <path
                d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z"
                fill="#6DC02F"
              />
            </svg>
          </div>
        )}

        <div className={`relative mx-auto px-6 ${image ? "max-w-6xl" : "max-w-4xl"}`}>
          <div className={image ? "grid lg:grid-cols-5 gap-10 lg:gap-14 items-center" : ""}>
            <div className={image ? "lg:col-span-3" : ""}>
              <nav aria-label="Breadcrumb" className="mb-4">
                <Link href="/" className="text-brand-silver hover:text-brand-lime text-xs font-sans uppercase tracking-widest transition-colors">
                  Home
                </Link>
                <span className="text-brand-border mx-2 text-xs">/</span>
                <span className="text-brand-lime text-xs font-sans uppercase tracking-widest">{serviceName}</span>
              </nav>

              <p className="font-display font-semibold text-brand-lime tracking-widest uppercase text-sm mb-4">
                {kicker}
              </p>
              <h1
                className="font-display font-bold uppercase text-white leading-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
              >
                {h1}
              </h1>
              <hr className="brand-rule my-6 w-32" />
              <p className="text-brand-silver text-base leading-relaxed font-sans max-w-2xl">
                {intro}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-bold uppercase tracking-wider px-8 py-4 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  Get a Free Inspection
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 border border-brand-border hover:border-brand-lime text-brand-silver hover:text-white font-sans font-medium px-8 py-4 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {image && (
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/3] overflow-hidden border border-brand-border">
                  <img
                    src={`${SITE_BASE}${image.src}`}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.35) 100%)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          {blocks.map((b) => (
            <div key={b.heading}>
              <h2 className="font-display font-bold uppercase text-white text-xl md:text-2xl mb-3 tracking-wide">
                {b.heading}
              </h2>
              <p className="text-brand-silver font-sans leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-black py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display font-bold uppercase text-white text-lg tracking-wide mb-5">
            Why Businesses &amp; Homeowners Choose Beaver Pest Defense
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {TRUST_SIGNALS.map((t) => (
              <li key={t} className="flex items-start gap-2 text-brand-silver text-sm font-sans">
                <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-brand-lime flex items-center justify-center" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1.5 5l3 3 6-7" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-brand-border bg-brand-charcoal p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-display font-bold uppercase text-white text-lg tracking-wide">
              Serving {SERVICE_AREA}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </section>

      {faqs && (
        <section className="bg-brand-charcoal py-8 md:py-10">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display font-bold uppercase text-white text-xl md:text-2xl mb-6 tracking-wide">
              {serviceName} — Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-brand-border pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-display font-semibold text-white text-base mb-2">
                    {f.q}
                  </h3>
                  <p className="text-brand-silver font-sans text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
