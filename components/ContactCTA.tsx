"use client";

const PHONE = "(555) 843-2837";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-brand-black py-20 md:py-28">
      {/* Top rule */}
      <div className="brand-rule mx-auto max-w-7xl px-6 mb-12" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: headline + CTA info */}
          <div>
            {/* Shield badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <ShieldCheckFilled />
              <span className="font-display font-bold text-brand-lime uppercase tracking-widest text-sm">
                Let&apos;s Protect Your Business Together
              </span>
            </div>

            <h2 className="font-display font-bold uppercase text-white leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.6rem)" }}>
              Pest Control That Works{" "}
              <span className="text-brand-lime">
                So You Can Focus on What Matters.
              </span>
            </h2>

            <p className="mt-5 text-brand-silver font-sans text-lg leading-relaxed">
              We partner with your business to deliver long-term protection,
              compliance support, and peace of mind. Contact your local pest
              control expert today.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow icon={<PhoneIcon />} label="Call Anytime">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="font-display font-bold text-xl text-brand-lime hover:text-brand-lime-light transition-colors"
                >
                  {PHONE}
                </a>
              </ContactRow>

              <ContactRow icon={<ClockIcon />} label="Hours">
                <p className="font-sans text-brand-silver text-sm">
                  Mon–Sat 7am–7pm · Emergency service available
                </p>
              </ContactRow>

              <ContactRow icon={<MapPinIcon />} label="Service Area">
                <p className="font-sans text-brand-silver text-sm">
                  Serving commercial properties throughout the metro area and surrounding region
                </p>
              </ContactRow>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-brand-charcoal border border-brand-border p-8">
            <h3 className="font-display font-bold uppercase text-white text-lg tracking-wide mb-6">
              Your Local Contact
              <span className="text-brand-lime">:</span>
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-sans">
              <div className="grid grid-cols-2 gap-4">
                <FormField id="first-name" label="First Name" type="text" autoComplete="given-name" placeholder="Jane" />
                <FormField id="last-name" label="Last Name" type="text" autoComplete="family-name" placeholder="Smith" />
              </div>

              <FormField id="company" label="Company Name" type="text" autoComplete="organization" placeholder="Acme Corp" />

              <FormField id="phone" label="Phone Number" type="tel" autoComplete="tel" placeholder="(555) 000-0000" />

              <div>
                <label htmlFor="property-type" className="block text-xs font-semibold uppercase tracking-widest text-brand-silver mb-1.5">
                  Property Type
                </label>
                <select
                  id="property-type"
                  defaultValue=""
                  required
                  className="w-full bg-brand-dark border border-brand-border text-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent transition"
                >
                  <option value="" disabled>Select property type…</option>
                  <option>Office Building</option>
                  <option>Retail Space</option>
                  <option>Warehouse / Distribution Center</option>
                  <option>Medical / Dental Facility</option>
                  <option>Restaurant / Food Service</option>
                  <option>Property Management / Multi-Tenant</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-brand-silver mb-1.5">
                  Additional Details <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-brand-dark border border-brand-border text-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent transition resize-none placeholder:text-brand-border"
                  placeholder="Describe your pest situation or any urgent concerns…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-bold uppercase tracking-wider py-3.5 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
              >
                Contact Your Local Expert →
              </button>

              <p className="text-xs text-brand-silver text-center font-sans">
                We&apos;ll follow up within 2 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 h-10 w-10 bg-brand-dark border border-brand-border flex items-center justify-center text-brand-lime">
        {icon}
      </div>
      <div>
        <p className="text-xs font-sans uppercase tracking-widest text-brand-silver mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  type,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-widest text-brand-silver mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
        className="w-full bg-brand-dark border border-brand-border text-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent transition placeholder:text-brand-border"
      />
    </div>
  );
}

function ShieldCheckFilled() {
  return (
    <svg width="20" height="20" viewBox="0 0 100 120" fill="#6DC02F" aria-hidden="true">
      <path d="M50 5L8 20v30c0 25 18 48 42 55 24-7 42-30 42-55V20L50 5z" />
      <path d="M34 55l12 12 22-24" stroke="#0A0A0A" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
