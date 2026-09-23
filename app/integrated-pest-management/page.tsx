import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/integrated-pest-management/";

export const metadata: Metadata = {
  title: `Integrated Pest Management Services in ${CITY_STATE} | Beaver Pest Defense`,
  description: `IPM pest control for businesses in ${CITY_STATE}. Integrated pest management services focused on prevention, monitoring, and documentation for offices, warehouses, and healthcare facilities.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Integrated Pest Management Services in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Prevention-first IPM pest control for businesses and healthcare facilities.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function IntegratedPestManagementPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Integrated Pest Management"
      kicker={`IPM Pest Control for Businesses in ${CITY_STATE}`}
      h1={`Integrated Pest Management Services in ${CITY_STATE}`}
      intro={`Integrated pest management (IPM) is a prevention-first approach — inspection, exclusion, and monitoring backed by targeted treatment only when it's needed. Beaver Pest Defense builds IPM programs for businesses and healthcare facilities throughout ${CITY_STATE}.`}
      blocks={[
        {
          heading: "Integrated Pest Management Services",
          body: "IPM pest control for businesses focuses on prevention first — sealing entry points, removing conducive conditions, and monitoring pest activity — backed by targeted treatment when it's needed. It's a lower-risk, documentation-friendly approach built for offices, restaurants, warehouses, and healthcare facilities.",
        },
        {
          heading: "Why IPM for Commercial Properties",
          body: "IPM reduces reliance on broad-spectrum treatments, which matters for food-service businesses, healthcare facilities, and any property that needs to minimize chemical use while staying compliant with health and safety standards.",
        },
        {
          heading: "Monitoring, Reporting & Continuous Improvement",
          body: "Every IPM program includes ongoing monitoring, documented inspection reports, and adjustments over time as conditions change — giving you a program that improves rather than just repeats.",
        },
      ]}
    />
  );
}
