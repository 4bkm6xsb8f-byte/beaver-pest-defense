import { SITE_BASE } from "@/lib/config";

const PHONE = "(555) 843-2837";
const YEAR = new Date().getFullYear();

const SERVICES = [
  "General Pest Control",
  "Rodent Prevention & Monitoring",
  "Ant, Spider & Insect Control",
  "Integrated Pest Management",
  "Emergency Pest Response",
];

const PROPERTY_LINKS = [
  "Office Buildings",
  "Retail Spaces",
  "Warehouses",
  "Medical & Dental",
  "Restaurants & Food Service",
  "Property Management",
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-border">
      {/* Trust badges bar — matches flyer bottom section */}
      <div className="border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <ul className="flex flex-wrap items-center justify-center md:justify-between gap-6">
            {[
              { icon: <ShieldCheck />, label: "Licensed & Insured" },
              { icon: <LeafIcon />, label: "Eco-Conscious Products Whenever Possible" },
              { icon: <RibbonIcon />, label: "Local. Reliable. Professional." },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2.5">
                <span className="text-brand-lime">{b.icon}</span>
                <span className="font-display font-bold uppercase text-brand-silver tracking-wider text-sm">
                  {b.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={`${SITE_BASE}/logo.png`}
              alt="Beaver Pest Defense"
              className="h-32 w-auto mb-4"
            />
            <p className="font-display font-bold uppercase text-brand-lime text-xs tracking-widest mb-1">
              Relentless Protection. Guaranteed.
            </p>
            <p className="text-brand-silver text-sm font-sans leading-relaxed">
              Protecting buildings. Protecting businesses. Your trusted local commercial pest control partner.
            </p>
            <a
              href="https://www.beaverpestdefense.com"
              className="mt-3 block text-brand-silver hover:text-brand-lime font-sans text-sm transition-colors"
            >
              www.beaverpestdefense.com
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 text-brand-lime hover:text-brand-lime-light font-sans font-semibold text-sm transition-colors"
            >
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-brand-silver text-sm font-sans hover:text-brand-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              We Serve
            </h4>
            <ul className="space-y-2">
              {PROPERTY_LINKS.map((p) => (
                <li key={p}>
                  <a href="#properties" className="text-brand-silver text-sm font-sans hover:text-brand-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              Hours
            </h4>
            <ul className="space-y-1 text-brand-silver text-sm font-sans">
              <li>Mon – Fri: 7am – 7pm</li>
              <li>Saturday: 8am – 5pm</li>
              <li>Sunday: Emergency only</li>
            </ul>
            <p className="mt-4 text-xs text-brand-silver font-sans">
              Emergency service available 24/7 — call the main line.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-black uppercase tracking-wider text-sm px-4 py-2.5 transition-colors"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-brand-silver">
          <p>© {YEAR} Beaver Pest Defense. All rights reserved.</p>
          <p>Licensed &amp; Insured · Protecting Buildings. Protecting Businesses.</p>
        </div>
      </div>
    </footer>
  );
}

function ShieldCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 100 120" fill="currentColor" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" />
      <path d="M34 55l12 12 22-24" stroke="#0A0A0A" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 22s4-2 8-8c3-4 4-9 4-13 0 0-4 2-8 8-3 4-4 9-4 13z" />
      <path d="M22 2c-4 0-8 1-11 4" />
    </svg>
  );
}

function RibbonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
