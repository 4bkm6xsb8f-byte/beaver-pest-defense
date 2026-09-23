import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/commercial-pest-control/";

export const metadata: Metadata = {
  title: `Commercial Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Commercial pest control services and commercial exterminator near you in ${CITY_STATE}. Licensed, insured, discreet pest control for businesses, offices, restaurants, and retail.`,
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
      intro={`Pest problems can affect your reputation, safety, compliance, and daily operations. Beaver Pest Defense provides commercial pest control programs for offices, warehouses, medical facilities, dental practices, restaurants, retail spaces, property management companies, and multi-tenant buildings throughout ${CITY_STATE} & the surrounding area.`}
      blocks={[
        {
          heading: "Commercial Pest Control for Businesses",
          body: "Pest problems can affect your reputation, safety, compliance, and daily operations. Beaver Pest Defense provides commercial pest control programs for offices, warehouses, medical facilities, dental practices, restaurants, retail spaces, property management companies, and multi-tenant buildings. Our commercial pest control services include inspections, rodent monitoring, insect control, exclusion recommendations, documentation, scheduled service plans, and emergency pest response.",
        },
        {
          heading: "Integrated Pest Management for Businesses",
          body: "Our IPM pest control for businesses focuses on prevention first — sealing entry points, removing conducive conditions, and monitoring pest activity — backed by targeted treatment when it's needed. It's a lower-risk, documentation-friendly approach built for offices, restaurants, and retail environments that need to stay open and compliant.",
        },
        {
          heading: "Discreet, Documented Service",
          body: "Our unmarked service vehicles and uniformed technicians keep visits low-profile for customer-facing businesses. Every visit includes service reports and documentation so you have a clear compliance record for audits, health inspections, and property management requirements.",
        },
      ]}
    />
  );
}
