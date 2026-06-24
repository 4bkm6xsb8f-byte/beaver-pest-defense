import { SITE_BASE } from "@/lib/config";

/* "OUR COMMERCIAL SERVICES" — dark charcoal section matching flyer */

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
    <section id="services" className="relative bg-brand-charcoal py-14 md:py-16 overflow-hidden">

      {/* Faded logo watermark — right side, matching flyer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] select-none"
        style={{ opacity: 0.07 }}
      >
        <img
          src={`${SITE_BASE}/logo.png`}
          alt=""
          width={440}
          height={440}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left heading */}
          <div className="md:col-span-2">
            <p
              className="font-display font-extrabold uppercase text-white leading-none"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 3rem)", letterSpacing: "-0.01em" }}
            >
              Our Commercial
            </p>
            <p
              className="font-display font-extrabold uppercase text-brand-lime leading-none mt-0.5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.8rem)", letterSpacing: "-0.01em" }}
            >
              Services
            </p>
            <div className="mt-3 h-[3px] w-24 bg-brand-lime" />
          </div>

          {/* Right: two-column service list */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-0 pt-1">
            <ul className="space-y-3.5">
              {SERVICES_LEFT.map((s) => <ServiceRow key={s} label={s} />)}
            </ul>
            <ul className="space-y-3.5 mt-3.5 sm:mt-0">
              {SERVICES_RIGHT.map((s) => <ServiceRow key={s} label={s} />)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceRow({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2.5">
      {/* Lime-filled circle checkmark */}
      <span
        className="shrink-0 mt-0.5 h-4.5 w-4.5 rounded-full bg-brand-lime flex items-center justify-center"
        style={{ width: "1.1rem", height: "1.1rem" }}
        aria-hidden="true"
      >
        <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l2.5 2.5L9 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="font-sans text-white text-sm leading-snug">{label}</span>
    </li>
  );
}
