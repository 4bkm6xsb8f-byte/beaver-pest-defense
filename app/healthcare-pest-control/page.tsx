import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/healthcare-pest-control/";

export const metadata: Metadata = {
  title: `Healthcare Facility Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Healthcare facility pest control and hospital pest control services in ${CITY_STATE}. Integrated pest management built for medical environments — prevention, monitoring, and minimal disruption.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Healthcare Facility Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Integrated pest management for hospitals, clinics, and medical facilities with an emphasis on prevention and documentation.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function HealthcarePestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Healthcare Facility Pest Control"
      kicker={`Hospital & Healthcare Pest Control in ${CITY_STATE}`}
      h1={`Healthcare Facility Pest Control in ${CITY_STATE}`}
      intro={`Integrated pest management for healthcare environments with an emphasis on prevention, monitoring, reporting, and minimal disruption. Beaver Pest Defense serves hospitals, clinics, medical offices, and dental practices throughout ${CITY_STATE}.`}
      blocks={[
        {
          heading: "Hospital & Healthcare Pest Control",
          body: "Integrated pest management for healthcare environments with an emphasis on prevention, monitoring, reporting, and minimal disruption. Our healthcare facility pest control programs are built around infection-control standards and patient safety — low-odor, low-disruption treatment methods and documentation your facility can present during accreditation and health inspections.",
        },
        {
          heading: "Medical Office Pest Control",
          body: "From single-provider clinics to multi-department medical office buildings, we schedule service around patient hours and provide discreet, unmarked service vehicles so pest control never becomes a visible disruption to your waiting room or exam areas.",
        },
        {
          heading: "Compliance-Ready Documentation",
          body: "Every visit is logged with service reports and documentation to support your facility's compliance and audit requirements, with emergency pest response available when an issue needs immediate attention.",
        },
      ]}
    />
  );
}
