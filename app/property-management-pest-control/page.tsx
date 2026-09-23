import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/property-management-pest-control/";

export const metadata: Metadata = {
  title: `Pest Control for Property Managers in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Apartment pest control services and multifamily pest control for property management companies in ${CITY_STATE}. Reliable recurring service for apartment communities and multi-tenant buildings.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Pest Control for Property Managers in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Multifamily and apartment pest control for property management companies and multi-tenant properties.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function PropertyManagementPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Property Management Pest Control"
      kicker={`Pest Control for Property Managers in ${CITY_STATE}`}
      h1={`Pest Control for Property Management Companies in ${CITY_STATE}`}
      intro={`We help property managers protect apartment communities, rental homes, office buildings, common areas, and multi-tenant properties with reliable recurring service.`}
      blocks={[
        {
          heading: "Property Management Pest Control",
          body: "We help property managers protect apartment communities, rental homes, office buildings, common areas, and multi-tenant properties with reliable recurring service. Our apartment pest control services and multifamily pest control programs are built around resident turnover, unit access, and lease-compliance documentation.",
        },
        {
          heading: "Apartment & Multifamily Pest Control",
          body: "From unit-by-unit treatment to building-wide rodent and insect control, we coordinate directly with your leasing office and maintenance team to minimize resident disruption while keeping every building on a consistent service schedule.",
        },
        {
          heading: "Documentation Property Managers Can Rely On",
          body: "Every visit includes service reports and documentation you can hand to owners, boards, and residents — plus emergency pest response when a unit or common area needs immediate attention.",
        },
      ]}
    />
  );
}
