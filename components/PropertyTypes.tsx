import { SITE_BASE } from "@/lib/config";

const PROPERTIES = [
  { label: "Office\nBuildings",                   img: "prop-office" },
  { label: "Retail\nSpaces",                      img: "prop-retail" },
  { label: "Warehouses &\nDistribution Centers",  img: "prop-warehouse" },
  { label: "Medical &\nDental Facilities",         img: "prop-medical" },
  { label: "Restaurants &\nFood Service",          img: "prop-restaurant" },
  { label: "Property Management\n& Multi-Tenant", img: "prop-multitenant" },
];

export default function PropertyTypes() {
  return (
    <section id="properties" className="bg-brand-charcoal py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">

          {/* Left: heading */}
          <div>
            <p
              className="font-display font-semibold uppercase text-brand-lime leading-tight"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
            >
              Serving a Wide Range of
            </p>
            <h2
              className="font-display font-bold uppercase text-white leading-tight mt-1"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
            >
              Commercial Properties
            </h2>
            <hr className="brand-rule mt-4 w-24" />
          </div>

          {/* Right: 6 property icons from flyer */}
          <div className="md:col-span-2">
            <ul className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {PROPERTIES.map((p) => (
                <li
                  key={p.label}
                  className="flex flex-col items-center text-center gap-2 group"
                >
                  <div className="w-full border border-brand-border group-hover:border-brand-lime-dim transition-colors overflow-hidden">
                    <img
                      src={`${SITE_BASE}/${p.img}.png`}
                      alt={p.label.replace("\n", " ")}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-brand-silver text-xs font-sans uppercase tracking-wide leading-tight whitespace-pre-line">
                    {p.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
