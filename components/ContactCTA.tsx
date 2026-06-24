"use client";

const PHONE = "(555) 843-2837";

export default function ContactCTA() {
  return (
    <section id="contact">
      {/* True split panel: dark left + lime green right */}
      <div className="grid md:grid-cols-2">

        {/* LEFT PANEL — dark background */}
        <div className="bg-brand-charcoal px-8 md:px-12 py-12 md:py-14 flex flex-col justify-center">
          <div className="mb-5">
            <ShieldLarge />
          </div>

          <h2
            className="font-display font-bold uppercase text-white leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.9rem)", letterSpacing: "-0.01em" }}
          >
            Pest Control That Works{" "}
            <span className="text-brand-lime">
              So You Can Focus on What Matters.
            </span>
          </h2>

          <p className="mt-4 text-brand-silver font-sans text-sm leading-relaxed max-w-md">
            We partner with your business to deliver long-term protection,
            compliance support, and peace of mind.
          </p>
        </div>

        {/* RIGHT PANEL — lime green background */}
        <div className="bg-brand-lime px-8 md:px-12 py-12 md:py-14 flex flex-col justify-center">
          <h2
            className="font-display font-bold uppercase text-brand-black leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)", letterSpacing: "-0.01em" }}
          >
            Let&apos;s Protect Your Business Together.
          </h2>
          <p
            className="font-display font-semibold uppercase text-brand-black mt-1 leading-tight"
            style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)", letterSpacing: "0.02em" }}
          >
            Contact Your Local Pest Control Expert Today.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-5 font-sans">
            <label
              htmlFor="local-contact"
              className="block font-display font-bold uppercase text-brand-black text-xs tracking-widest mb-2"
            >
              Your Local Contact:
            </label>

            <div className="space-y-3">
              <input
                id="local-contact"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-sm py-2 focus:outline-none focus:border-brand-charcoal"
              />
              <input
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-sm py-2 focus:outline-none focus:border-brand-charcoal"
              />
              <input
                type="text"
                placeholder="Company / property"
                autoComplete="organization"
                className="w-full bg-transparent border-b-2 border-brand-black text-brand-black placeholder:text-brand-black/40 font-sans text-sm py-2 focus:outline-none focus:border-brand-charcoal"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-brand-black hover:bg-brand-charcoal text-white font-display font-bold uppercase tracking-widest py-3 text-sm transition-colors"
            >
              Contact an Expert →
            </button>

            <p className="mt-3 text-center text-brand-black/70 text-xs font-sans">
              Or call us directly:{" "}
              <a href={`tel:${PHONE.replace(/\D/g, "")}`}
                 className="font-semibold text-brand-black hover:underline">
                {PHONE}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ShieldLarge() {
  return (
    <svg width="48" height="48" viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M50 8L12 22v28c0 24 17 44 38 52 21-8 38-28 38-52V22L50 8z" fill="#6DC02F"/>
      <path d="M32 56l14 14 24-28" stroke="#0A0A0A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
