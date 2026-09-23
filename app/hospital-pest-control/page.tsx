import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/hospital-pest-control/";

export const metadata: Metadata = {
  title: `Hospital Pest Control Services in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Hospital pest control services in ${CITY_STATE}. Integrated pest management for healthcare facilities with an emphasis on prevention, monitoring, and minimal disruption to patient care.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Hospital Pest Control Services in ${CITY_STATE} | Beaver Pest Defense`,
    description: `IPM pest control for hospitals — prevention, monitoring, reporting, and minimal disruption.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function HospitalPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Hospital Pest Control"
      kicker={`Hospital Pest Control Services in ${CITY_STATE}`}
      h1={`Hospital Pest Control Services in ${CITY_STATE}`}
      intro={`Integrated pest management for hospitals and healthcare campuses with an emphasis on prevention, monitoring, reporting, and minimal disruption to patient care.`}
      blocks={[
        {
          heading: "Hospital & Healthcare Pest Control",
          body: "Integrated pest management for healthcare environments with an emphasis on prevention, monitoring, reporting, and minimal disruption. Hospitals require a higher standard of coordination — our team works with your facilities and infection-control staff to schedule service that respects patient units, kitchens, and sterile areas.",
        },
        {
          heading: "IPM Pest Control for Businesses at Hospital Scale",
          body: "Large healthcare campuses need pest management that scales — kitchens, loading docks, patient wings, labs, and administrative buildings each have different risk profiles. We build a single coordinated program with facility-wide monitoring and documentation.",
        },
        {
          heading: "Emergency Response When It Matters Most",
          body: "Hospitals can't wait for the next scheduled visit when a pest issue affects patient care. Beaver Pest Defense offers emergency pest response alongside recurring commercial plans and full service documentation.",
        },
      ]}
    />
  );
}
