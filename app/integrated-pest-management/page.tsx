import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/integrated-pest-management/";

export const metadata: Metadata = {
  title: `Integrated Pest Management in ${CITY_STATE} | Beaver Pest Defense`,
  description: `IPM pest control in ${CITY_STATE}: inspection, exclusion, and monitoring for businesses and healthcare facilities that need to limit chemical use.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Integrated Pest Management in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Prevention-first IPM pest control for businesses and healthcare facilities.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function IntegratedPestManagementPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Integrated Pest Management"
      kicker={`IPM Programs for Businesses in ${CITY_STATE}`}
      h1={`Integrated Pest Management (IPM) in ${CITY_STATE}`}
      intro={`Integrated pest management, or IPM, treats prevention as the main event and chemical treatment as the backup plan — inspection, exclusion, and monitoring first, targeted product only where it's actually needed.`}
      blocks={[
        {
          heading: "Why Businesses Choose IPM Over Standard Spraying",
          body: "A standard schedule-based spray treats every visit the same regardless of what's actually happening at your property. IPM starts with inspection and monitoring data, so treatment is targeted at real activity instead of applied on a fixed interval whether it's needed or not.",
        },
        {
          heading: "Especially Suited to Regulated Environments",
          body: "Healthcare facilities, food service, and any business that needs to document and limit chemical use benefit most from an IPM approach — it produces a paper trail of inspections and findings, not just a log of product applied.",
        },
        {
          heading: "A Program That Improves Over Time",
          body: "Because IPM relies on ongoing monitoring, the plan adjusts as conditions change at your property, rather than repeating the same treatment indefinitely regardless of results.",
        },
      ]}
      faqs={[
        {
          q: "How is IPM different from regular pest control?",
          a: "Standard pest control is often a scheduled treatment applied whether or not there's active activity. IPM starts with inspection and monitoring, then applies targeted treatment only where activity is actually found — reducing chemical use and giving you a documented record of what was found and treated.",
        },
        {
          q: "Is IPM more expensive than standard pest control?",
          a: "Not necessarily — it depends on your property and pest pressure. Because treatment is targeted rather than blanket-applied, IPM can be comparable or lower in product cost, though it typically involves more frequent monitoring visits.",
        },
        {
          q: "Which businesses benefit most from IPM?",
          a: "Healthcare facilities, food service operations, and any business that needs documented, low-chemical-use pest control for compliance or accreditation reasons see the most benefit, though any commercial property can use an IPM-based program.",
        },
      ]}
    />
  );
}
