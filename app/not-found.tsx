import type { Metadata } from "next";
import Link from "next/link";
import { SITE_BASE } from "@/lib/config";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Beaver Pest Defense",
  description:
    "We couldn't find that page. Head back to Beaver Pest Defense for commercial and residential pest control in Milwaukee, WI.",
  robots: { index: false, follow: true },
};

// Root-absolute links only: a 404 can be served from any URL depth.
const HELPFUL_LINKS = [
  { label: "Commercial Pest Control", href: "/commercial-pest-control/" },
  { label: "Rodent Control", href: "/rodent-control/" },
  { label: "Residential Pest Control", href: "/residential-pest-control/" },
];

export default function NotFound() {
  return (
    <>
      <header className="bg-brand-black">
        <div className="h-0.5 w-full bg-gradient-to-r from-brand-lime via-brand-lime-light to-brand-lime-dim" />
        <div className="mx-auto flex max-w-7xl items-center px-6 py-2">
          <Link
            href="/"
            aria-label="Beaver Pest Defense — home"
            className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
          >
            <img
              src={`${SITE_BASE}/logo.png`}
              alt="Beaver Pest Defense"
              className="h-20 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden bg-brand-black bg-shield-pattern px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p
            aria-hidden="true"
            className="font-display font-black text-lime-gradient text-[7rem] leading-none sm:text-[10rem]"
          >
            404
          </p>
          <hr className="brand-rule mx-auto my-6 w-40" />
          <p className="font-display font-bold uppercase tracking-widest text-xs text-brand-lime mb-3">
            Page not found
          </p>
          <h1 className="font-display font-black uppercase text-white text-3xl sm:text-5xl leading-tight text-balance">
            This page got out. We can help with the ones that do.
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-sans text-brand-silver text-base sm:text-lg">
            The page you&rsquo;re looking for has moved or doesn&rsquo;t exist.
            Head back to the main site, or call us and we&rsquo;ll point you in
            the right direction.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-black text-sm tracking-wider uppercase px-7 py-3.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              Back to Home
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-black font-display font-black text-sm tracking-wider uppercase px-7 py-3.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-12 border-t border-brand-border pt-8">
            <p className="font-display font-bold uppercase tracking-widest text-xs text-brand-silver mb-4">
              Or try one of these
            </p>
            <ul className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {HELPFUL_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-white hover:text-brand-lime transition-colors underline decoration-brand-lime/50 underline-offset-4"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
