const SERVICES_LEFT = [
  "General Pest Control",
  "Rodent Prevention & Monitoring",
  "Ant, Spider & Insect Control",
  "Integrated Pest Management (IPM)",
];

const SERVICES_RIGHT = [
  "Discreet & Unmarked Service Vehicles",
  "Documentation & Reporting",
  "Customized Service Plans",
  "Emergency Pest Response",
];

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-black py-20 md:py-28 overflow-hidden">
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
              Our Commercial
            </p>
            <p className="font-display font-bold uppercase text-brand-lime leading-none text-balance"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
              Services
            </p>
            <hr className="brand-rule mt-5 mb-6" />
            <p className="text-brand-silver font-sans text-base leading-relaxed">
              Comprehensive protection tailored to your business — because a
              pest problem is never just a pest problem. It&apos;s a liability,
              a reputation risk, and a disruption you can&apos;t afford.
            </p>
          </div>

          {/* Right: two-column service list */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-0">
            {/* Left column */}
            <ul className="space-y-4">
              {SERVICES_LEFT.map((s) => (
                <ServiceItem key={s} name={s} />
              ))}
            </ul>
            {/* Right column */}
            <ul className="space-y-4 sm:mt-0 mt-4">
              {SERVICES_RIGHT.map((s) => (
                <ServiceItem key={s} name={s} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ name }: { name: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* Lime checkmark in circle — matches flyer */}
      <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-brand-lime flex items-center justify-center" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1.5 5l3 3 6-7" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-sans text-white text-base leading-snug">{name}</span>
    </li>
  );
}
