const REASONS = [
  {
    icon: ShieldIcon,
    title: "Protect Your Reputation",
    desc: "Keep your facility pest-free and your business image strong.",
  },
  {
    icon: ListIcon,
    title: "Customized Solutions",
    desc: "Tailored programs for your building, industry, and pest pressure.",
  },
  {
    icon: CalendarIcon,
    title: "Scheduled & Dependable",
    desc: "Consistent service that fits your schedule and operations.",
  },
  {
    icon: BadgeIcon,
    title: "Licensed Professionals",
    desc: "Trained, insured, and committed to the highest standards.",
  },
  {
    icon: ChartIcon,
    title: "Minimize Risk & Downtime",
    desc: "Prevent pest issues before they start and avoid costly disruptions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-brand-charcoal py-8 md:py-10">
      <div className="brand-rule mx-auto max-w-7xl px-6 mb-5" />

      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="font-display font-bold uppercase text-center text-white tracking-wider mb-10"
          style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
        >
          Why Businesses{" "}
          <span className="text-brand-lime">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center text-center gap-3 bg-brand-dark border border-brand-border hover:border-brand-lime-dim transition-colors p-6"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-brand-charcoal border border-brand-border">
                <span className="text-brand-lime">
                  <r.icon />
                </span>
              </div>
              <h3 className="font-display font-semibold uppercase text-white text-sm leading-tight tracking-wide">
                {r.title}
              </h3>
              <p className="text-brand-silver text-sm leading-relaxed font-sans">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="brand-rule mx-auto max-w-7xl px-6 mt-5" />
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" stroke="currentColor" strokeWidth="8" />
      <path d="M34 55l12 12 22-24" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}
