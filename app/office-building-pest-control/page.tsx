import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/office-building-pest-control/";

export const metadata: Metadata = {
  title: `Office Building Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Office building pest control in ${CITY_STATE}. Licensed and insured commercial exterminator services for corporate offices and multi-tenant office buildings.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Office Building Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Discreet, scheduled pest control for corporate offices and office buildings.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function OfficeBuildingPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Office Building Pest Control"
      kicker={`Commercial Exterminator Near You in ${CITY_STATE}`}
      h1={`Office Building Pest Control in ${CITY_STATE}`}
      intro={`Keep your office building pest-free and your business image strong. Beaver Pest Defense provides discreet, scheduled pest control for corporate offices, coworking spaces, and multi-tenant office buildings.`}
      blocks={[
        {
          heading: "Office Building Pest Control",
          body: "Pest problems can affect your reputation, safety, compliance, and daily operations. Beaver Pest Defense provides commercial pest control programs for corporate offices and office buildings, including inspections, insect and rodent control, exclusion recommendations, and scheduled service plans.",
        },
        {
          heading: "Discreet Service for Professional Environments",
          body: "Unmarked service vehicles and after-hours scheduling keep pest control out of sight of clients, tenants, and employees, while documentation and reporting keep facilities and property managers informed.",
        },
        {
          heading: "Recurring Plans for Multi-Tenant Buildings",
          body: "Whether you manage a single-tenant headquarters or a multi-tenant office tower, we build a recurring commercial plan around your building's layout, common areas, and lease requirements.",
        },
      ]}
    />
  );
}
