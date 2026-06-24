/* "WHY BUSINESSES CHOOSE US" — light warm-gray background matching the flyer */

const REASONS = [
  {
    icon: ShieldRepIcon,
    title: "Protect Your Reputation",
    desc: "Keep your facility pest-free and your business image strong.",
  },
  {
    icon: ClipboardIcon,
    title: "Customized Solutions",
    desc: "Tailored programs for your building, industry, and pest pressure.",
  },
  {
    icon: CalIcon,
    title: "Scheduled & Dependable",
    desc: "Consistent service that fits your schedule and operations.",
  },
  {
    icon: LicIcon,
    title: "Licensed Professionals",
    desc: "Trained, insured, and committed to the highest standards.",
  },
  {
    icon: BarChartIcon,
    title: "Minimize Risk & Downtime",
    desc: "Prevent pest issues before they start and avoid costly disruptions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-brand-light py-12">
      {/* Decorative divider lines flanking the title */}
      <div className="flex items-center justify-center gap-4 mb-9 px-6">
        <div className="flex-1 h-px bg-brand-lime-dim max-w-xs hidden sm:block" />
        <h2
          className="font-display font-bold text-brand-black text-center whitespace-nowrap tracking-wider uppercase"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
        >
          Why Businesses Choose Us
        </h2>
        <div className="flex-1 h-px bg-brand-lime-dim max-w-xs hidden sm:block" />
      </div>

      {/* 5-column grid */}
      <div className="mx-auto max-w-7xl px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {REASONS.map((r) => (
            <li key={r.title} className="flex flex-col items-center text-center gap-2.5">
              <div className="h-12 w-12 flex items-center justify-center">
                <r.icon />
              </div>
              <h3
                className="font-display font-semibold uppercase text-brand-black leading-tight tracking-wide"
                style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)" }}
              >
                {r.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed font-sans">{r.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Icons — dark strokes with lime accents, for light background ── */

function ShieldRepIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      {/* Pentagon shield outline */}
      <path d="M50 8L12 22v28c0 24 17 44 38 52 21-8 38-28 38-52V22L50 8z"
        stroke="#1C1C1C" strokeWidth="7" fill="none"/>
      {/* Lime checkmark */}
      <path d="M30 56l14 14 26-28" stroke="#6DC02F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Clipboard board */}
      <rect x="5" y="4" width="14" height="17" rx="1.5"/>
      {/* Clip at top */}
      <path d="M9 4V2.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V4"/>
      <rect x="8" y="3" width="8" height="2" rx="0.5" fill="#1C1C1C" stroke="none"/>
      {/* Lines on paper */}
      <line x1="8.5" y1="10" x2="15.5" y2="10"/>
      <line x1="8.5" y1="13" x2="15.5" y2="13"/>
      {/* Short last line with lime check */}
      <line x1="8.5" y1="16" x2="12" y2="16"/>
      <path d="M13 15l1.5 1.5L17 13.5" stroke="#6DC02F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Calendar outline */}
      <rect x="3" y="4" width="18" height="17" rx="2"/>
      {/* Header bar */}
      <line x1="3" y1="9" x2="21" y2="9"/>
      {/* Tab pegs */}
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      {/* Calendar grid squares */}
      <rect x="6.5" y="12" width="2.5" height="2.5" rx="0.3" fill="#6DC02F" stroke="none"/>
      <rect x="10.75" y="12" width="2.5" height="2.5" rx="0.3" fill="#1C1C1C" stroke="none"/>
      <rect x="15" y="12" width="2.5" height="2.5" rx="0.3" fill="#1C1C1C" stroke="none"/>
      <rect x="6.5" y="16" width="2.5" height="2.5" rx="0.3" fill="#1C1C1C" stroke="none"/>
      <rect x="10.75" y="16" width="2.5" height="2.5" rx="0.3" fill="#6DC02F" stroke="none"/>
    </svg>
  );
}

function LicIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Head */}
      <circle cx="12" cy="7" r="4"/>
      {/* Shoulders / body outline */}
      <path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
      {/* Small lime dot on chest / badge */}
      <circle cx="12" cy="7" r="1.5" fill="#6DC02F" stroke="none"/>
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Baseline */}
      <line x1="3" y1="20" x2="21" y2="20"/>
      {/* Three ascending bars */}
      <rect x="4" y="14" width="4" height="6" rx="0.5" fill="#1C1C1C" stroke="none"/>
      <rect x="10" y="9" width="4" height="11" rx="0.5" fill="#1C1C1C" stroke="none"/>
      <rect x="16" y="4" width="4" height="16" rx="0.5" fill="#6DC02F" stroke="none"/>
    </svg>
  );
}
