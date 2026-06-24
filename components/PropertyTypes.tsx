/* "SERVING A WIDE RANGE OF COMMERCIAL PROPERTIES" — olive green bg matching flyer */

const PROPERTIES = [
  { label: "Office\nBuildings",                  icon: OfficeIcon },
  { label: "Retail\nSpaces",                     icon: RetailIcon },
  { label: "Warehouses &\nDistribution Centers", icon: WarehouseIcon },
  { label: "Medical &\nDental Facilities",        icon: MedicalIcon },
  { label: "Restaurants &\nFood Service",         icon: RestaurantIcon },
  { label: "Property Mgmt\n& Multi-Tenant",      icon: MultiTenantIcon },
];

export default function PropertyTypes() {
  return (
    <section id="properties" className="bg-brand-olive py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10 items-center">

          {/* Left: heading */}
          <div className="md:col-span-1">
            <p
              className="font-display font-bold uppercase text-brand-lime leading-tight"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)", letterSpacing: "0.05em" }}
            >
              Serving a Wide Range<br />of Commercial
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-tight mt-0.5"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)", letterSpacing: "-0.01em" }}
            >
              Properties
            </h2>
          </div>

          {/* Right: 6 icons in a row */}
          <div className="md:col-span-3">
            <ul className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {PROPERTIES.map((p) => (
                <li key={p.label} className="flex flex-col items-center text-center gap-2">
                  <div className="h-13 w-13 flex items-center justify-center border border-white/20"
                    style={{ width: "3.25rem", height: "3.25rem" }}>
                    <p.icon />
                  </div>
                  <span
                    className="text-white font-display font-semibold uppercase leading-tight whitespace-pre-line"
                    style={{ fontSize: "0.55rem", letterSpacing: "0.04em" }}
                  >
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Property icons — white stroke on olive bg ── */

function OfficeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Tall office tower */}
      <rect x="4" y="2" width="16" height="20" rx="0.5"/>
      {/* Horizontal floor lines */}
      <line x1="4" y1="7" x2="20" y2="7"/>
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="17" x2="20" y2="17"/>
      {/* Vertical column line */}
      <line x1="12" y1="2" x2="12" y2="22"/>
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Shop base */}
      <rect x="3" y="11" width="18" height="11" rx="0.5"/>
      {/* Awning / canopy */}
      <path d="M2 7h20l-1.5 4H3.5L2 7z"/>
      {/* Roof ridge */}
      <line x1="2" y1="7" x2="22" y2="7"/>
      {/* Door */}
      <rect x="9.5" y="16" width="5" height="6" rx="0.5"/>
      {/* Window */}
      <rect x="5" y="13.5" width="4" height="3.5" rx="0.3"/>
      <rect x="15" y="13.5" width="4" height="3.5" rx="0.3"/>
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Wide low warehouse */}
      <rect x="2" y="9" width="20" height="13" rx="0.5"/>
      {/* Angled roof */}
      <path d="M1 9L12 3l11 6"/>
      {/* Large loading door */}
      <rect x="8" y="14" width="8" height="8" rx="0.3"/>
      {/* Door horizontal lines */}
      <line x1="8" y1="17" x2="16" y2="17"/>
      <line x1="8" y1="20" x2="16" y2="20"/>
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Building outline */}
      <rect x="4" y="6" width="16" height="16" rx="0.5"/>
      {/* Roof line */}
      <path d="M3 6l9-4 9 4"/>
      {/* Medical cross */}
      <line x1="12" y1="10" x2="12" y2="18"/>
      <line x1="8" y1="14" x2="16" y2="14"/>
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Fork */}
      <line x1="8" y1="3" x2="8" y2="21"/>
      <path d="M6 3v5a2 2 0 0 0 4 0V3"/>
      {/* Knife */}
      <path d="M16 3v6a3 3 0 0 1-2 2.83V21"/>
    </svg>
  );
}

function MultiTenantIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Taller center building */}
      <rect x="8.5" y="3" width="7" height="19" rx="0.5"/>
      {/* Left shorter building */}
      <rect x="2" y="9" width="6.5" height="13" rx="0.5"/>
      {/* Right shorter building */}
      <rect x="13.5" y="7" width="6.5" height="15" rx="0.5"/>
      {/* Center windows */}
      <rect x="10" y="6" width="4" height="3" rx="0.3"/>
      <rect x="10" y="11" width="4" height="3" rx="0.3"/>
    </svg>
  );
}
