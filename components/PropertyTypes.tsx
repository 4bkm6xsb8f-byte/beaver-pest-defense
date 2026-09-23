const PROPERTIES = [
  { label: "Office\nBuildings", icon: OfficeBuildingIcon, href: "/office-building-pest-control/" },
  { label: "Retail\nSpaces", icon: RetailIcon, href: "/commercial-pest-control/" },
  { label: "Warehouses &\nDistribution Centers", icon: WarehouseIcon, href: "/warehouse-pest-control/" },
  { label: "Medical &\nDental Facilities", icon: MedicalIcon, href: "/healthcare-pest-control/" },
  { label: "Restaurants &\nFood Service", icon: RestaurantIcon, href: "/commercial-pest-control/" },
  { label: "Property Management\n& Multi-Tenant Sites", icon: MultiTenantIcon, href: "/property-management-pest-control/" },
  { label: "Residential\nHomes", icon: ResidentialIcon, href: "/residential-pest-control/" },
];

export default function PropertyTypes() {
  return (
    <section id="properties" className="bg-brand-charcoal py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">

          <div>
            <p
              className="font-display font-bold uppercase text-brand-lime leading-tight"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
            >
              Serving a Wide Range of
            </p>
            <h2
              className="font-display font-extrabold uppercase text-white leading-tight mt-1"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              Commercial &amp; Residential Properties
            </h2>
            <hr className="brand-rule mt-4 w-24" />
          </div>

          <div className="md:col-span-2">
            <ul className="grid grid-cols-3 sm:grid-cols-7 gap-4">
              {PROPERTIES.map((p) => (
                <li
                  key={p.label}
                  className="flex flex-col items-center text-center gap-2 group"
                >
                  <a
                    href={p.href}
                    className="h-14 w-14 flex items-center justify-center bg-brand-dark border border-brand-border group-hover:border-brand-lime-dim transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                  >
                    <span className="text-brand-lime">
                      <p.icon />
                    </span>
                  </a>
                  <a
                    href={p.href}
                    className="text-brand-silver text-xs font-sans uppercase tracking-wide leading-tight whitespace-pre-line hover:text-brand-lime transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function OfficeBuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9M9 3v6M15 21V9M15 3v6" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3h18l-2 9H5L3 3z" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
      <path d="M9 12v8M15 12v8" />
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <line x1="8.5" y1="8.5" x2="8.5" y2="8.51" strokeWidth="2.5" />
      <line x1="15.5" y1="8.5" x2="15.5" y2="8.51" strokeWidth="2.5" />
    </svg>
  );
}

function MultiTenantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="9" height="14" />
      <rect x="13" y="2" width="9" height="19" />
      <path d="M5 7V5a2 2 0 0 1 2-2h8" />
    </svg>
  );
}

function ResidentialIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}
