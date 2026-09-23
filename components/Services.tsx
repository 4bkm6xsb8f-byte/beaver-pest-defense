const SERVICES_LEFT = [
  { name: "General Pest Control", href: undefined },
  { name: "Rodent Control & Monitoring", href: "/rodent-control/" },
  { name: "Ant, Spider & Insect Control", href: undefined },
  { name: "Integrated Pest Management (IPM)", href: "/integrated-pest-management/" },
];

const SERVICES_RIGHT = [
  { name: "Discreet & Unmarked Service Vehicles", href: undefined },
  { name: "Documentation & Reporting", href: undefined },
  { name: "Customized Service Plans", href: undefined },
  { name: "Emergency Pest Response", href: undefined },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-black py-10 md:py-14 overflow-hidden">
      {/* Shield watermark — right background element matching flyer */}
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

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: heading */}
          <div className="md:col-span-2">
            <p className="font-display font-bold uppercase text-white leading-none text-balance"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
              Commercial Pest Control
            </p>
            <p className="font-display font-bold uppercase text-brand-lime leading-none text-balance"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
              for Businesses
            </p>
            <hr className="brand-rule mt-5 mb-6" />
            <p className="text-brand-silver font-sans text-base leading-relaxed">
              Pest problems can affect your reputation, safety, compliance, and
              daily operations. Beaver Pest Defense provides commercial
              exterminator services and pest control for businesses — offices,
              warehouses, medical facilities, dental practices, restaurants,
              retail spaces, property management companies, and multi-tenant
              buildings.
            </p>
          </div>

          {/* Right: two-column service list */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-0">
            {/* Left column */}
            <ul className="space-y-4">
              {SERVICES_LEFT.map((s) => (
                <ServiceItem key={s.name} name={s.name} href={s.href} />
              ))}
            </ul>
            {/* Right column */}
            <ul className="space-y-4 sm:mt-0 mt-4">
              {SERVICES_RIGHT.map((s) => (
                <ServiceItem key={s.name} name={s.name} href={s.href} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ name, href }: { name: string; href?: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* Lime checkmark in circle — matches flyer */}
      <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-brand-lime flex items-center justify-center" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1.5 5l3 3 6-7" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {href ? (
        <a href={href} className="font-sans text-white text-base leading-snug hover:text-brand-lime transition-colors">
          {name}
        </a>
      ) : (
        <span className="font-sans text-white text-base leading-snug">{name}</span>
      )}
    </li>
  );
}
