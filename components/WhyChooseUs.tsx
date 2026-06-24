import { SITE_BASE } from "@/lib/config";

const REASONS = [
  {
    img: "why-shield",
    alt: "Protect Your Reputation",
    desc: "Keep your facility pest-free and your business image strong.",
  },
  {
    img: "why-clipboard",
    alt: "Customized Solutions",
    desc: "Tailored programs for your building, industry, and pest pressure.",
  },
  {
    img: "why-calendar",
    alt: "Scheduled & Dependable",
    desc: "Consistent service that fits your schedule and operations.",
  },
  {
    img: "why-person",
    alt: "Licensed Professionals",
    desc: "Trained, insured, and committed to the highest standards.",
  },
  {
    img: "why-chart",
    alt: "Minimize Risk & Downtime",
    desc: "Prevent pest issues before they start and avoid costly disruptions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-brand-charcoal py-16 md:py-20">
      <div className="brand-rule mx-auto max-w-7xl px-6 mb-10" />

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
              key={r.alt}
              className="flex flex-col gap-3 bg-brand-dark border border-brand-border hover:border-brand-lime-dim transition-colors p-4"
            >
              {/* Cropped icon image from flyer */}
              <img
                src={`${SITE_BASE}/${r.img}.png`}
                alt={r.alt}
                className="w-full h-auto"
              />
              <p className="text-brand-silver text-sm leading-relaxed font-sans">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="brand-rule mx-auto max-w-7xl px-6 mt-10" />
    </section>
  );
}
