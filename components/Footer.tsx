import { SITE_BASE } from "@/lib/config";

export default function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer>
      {/* Trust badge strip */}
      <div className="bg-brand-light border-t-2 border-brand-lime">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <ul className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <TrustBadge icon={<ShieldIcon />} label="Licensed & Insured" />
            <div className="hidden sm:block w-px h-7 bg-gray-300" aria-hidden="true" />
            <TrustBadge icon={<LeafIcon />} label="Eco-Conscious Products Whenever Possible" />
            <div className="hidden sm:block w-px h-7 bg-gray-300" aria-hidden="true" />
            <TrustBadge icon={<RibbonIcon />} label="Local. Reliable. Professional." />
          </ul>
        </div>
      </div>

      {/* Logo strip */}
      <div className="bg-brand-olive">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs font-sans">
            © {YEAR} Beaver Pest Defense. All rights reserved. &nbsp;Licensed &amp; Insured.
          </p>
          <div className="flex items-center gap-3">
            <img
              src={`${SITE_BASE}/logo.png`}
              alt="Beaver Pest Defense"
              width={48}
              height={48}
              className="h-11 w-auto"
            />
            <div>
              <p className="font-display font-bold uppercase text-white text-xs leading-tight">
                Beaver<br />Pest Defense
              </p>
              <p className="font-display font-semibold uppercase text-brand-lime text-[0.55rem] leading-tight tracking-wider mt-0.5">
                Protecting Buildings. Protecting Businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-2.5">
      <span className="text-brand-lime shrink-0">{icon}</span>
      <span className="font-display font-bold uppercase text-brand-black tracking-wider text-xs">
        {label}
      </span>
    </li>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 100 120" fill="currentColor" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z"/>
      <path d="M33 55l13 13 23-25" stroke="#E8E6E0" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 22s4-2 8-8c3-4 4-9 4-13 0 0-4 2-8 8-3 4-4 9-4 13z"/>
      <path d="M22 2c-4 0-8 1-11 4"/>
    </svg>
  );
}

function RibbonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
