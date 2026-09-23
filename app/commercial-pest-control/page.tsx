import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/commercial-pest-control/";

export const metadata: Metadata = {
  title: `Commercial Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Commercial exterminator services in ${CITY_STATE} for offices, retail, restaurants, and multi-tenant buildings. Licensed, insured, discreet.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Commercial Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Licensed and insured commercial pest control for businesses throughout ${CITY_STATE}.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function CommercialPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Commercial Pest Control"
      kicker={`Commercial Exterminator Near You in ${CITY_STATE}`}
      h1={`Commercial Pest Control in ${CITY_STATE}`}
      intro={`A pest sighting at your business is never just a pest sighting — it's a reputation risk, a compliance issue, and a distraction from running your business. Beaver Pest Defense builds commercial pest control programs around how your business actually operates.`}
      blocks={[
        {
          heading: "One Program, Built Around Your Business",
          body: "Every commercial account starts with a walkthrough of your specific property — entry points, storage areas, customer-facing spaces, and anything unique to your industry. From there we set a service plan for offices, retail stores, restaurants, warehouses, medical and dental facilities, and multi-tenant buildings alike, rather than a one-size-fits-all route stop.",
        },
        {
          heading: "Prevention First, Treatment When Needed",
          body: "Our approach leans on integrated pest management: sealing entry points, removing conducive conditions, and ongoing monitoring, with targeted treatment when activity is found. It's a lower-risk approach for businesses that need to stay open, stay compliant, and keep chemical use to a minimum.",
        },
        {
          heading: "Discreet, Documented Service",
          body: "Unmarked service vehicles and uniformed technicians keep visits low-profile for customer-facing businesses. Every visit includes service reports and documentation so you have a clear compliance record for audits, health inspections, and property management requirements.",
        },
      ]}
      faqs={[
        {
          q: "What's included in a commercial pest control visit?",
          a: "A typical visit includes an interior and exterior inspection, treatment of any active activity, monitoring station checks, and a written service report. Frequency depends on your industry and pest pressure — we'll recommend a schedule during your first inspection.",
        },
        {
          q: "Can you work around our business hours?",
          a: "Yes. Many commercial clients prefer early morning, evening, or after-close service to avoid customers or staff. We'll schedule around whatever keeps your operation running smoothly.",
        },
        {
          q: "Do you offer one-time service or only ongoing plans?",
          a: "Both. Some businesses need a single treatment for an active issue; others set up a recurring plan for year-round prevention. We'll recommend what fits your situation during the free inspection.",
        },
      ]}
    />
  );
}
