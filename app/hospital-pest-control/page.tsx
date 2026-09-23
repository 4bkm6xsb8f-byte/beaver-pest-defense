import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/hospital-pest-control/";

export const metadata: Metadata = {
  title: `Hospital Pest Control Services in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Hospital-scale pest control in ${CITY_STATE} coordinated across kitchens, patient wings, and loading docks. Documented, discreet, licensed and insured.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Hospital Pest Control Services in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Facility-wide pest control for hospitals and large healthcare campuses.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function HospitalPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Hospital Pest Control"
      kicker={`Hospital-Scale Pest Management in ${CITY_STATE}`}
      h1={`Hospital Pest Control Services in ${CITY_STATE}`}
      intro={`A hospital isn't one building — it's a kitchen, a loading dock, dozens of patient rooms, labs, and administrative offices all under one roof, each with different risk. Beaver Pest Defense builds a single coordinated pest management plan across the whole campus.`}
      blocks={[
        {
          heading: "One Plan Across a Complex Facility",
          body: "Kitchens, loading docks, patient units, labs, and back-office areas each carry different pest pressure and different rules for what can be used where. Rather than treating each area separately, we build one coordinated program with facility-wide monitoring, so nothing falls through the cracks between departments.",
        },
        {
          heading: "Coordinated With Facilities & Infection Control",
          body: "We work directly with your facilities and infection-control staff to schedule service that respects patient units, sterile areas, and food service operations — never showing up unannounced in a space that needs advance coordination.",
        },
        {
          heading: "Emergency Response When Patient Care Is Affected",
          body: "A pest issue that affects a patient unit or food service area can't wait for the next scheduled visit. We offer emergency response alongside recurring service, so a facility-wide issue gets addressed on your timeline, not ours.",
        },
      ]}
      faqs={[
        {
          q: "How do you handle a facility as large and varied as a hospital?",
          a: "We start with a full-campus walkthrough to map risk areas — kitchens, loading docks, patient units, labs — then build one coordinated schedule instead of treating each department as a separate account.",
        },
        {
          q: "Can you respond same-day for an urgent issue?",
          a: "Emergency pest response is available for issues affecting patient care or food service areas. Call our main line and we'll prioritize accordingly.",
        },
        {
          q: "How do you avoid disrupting patient units or sterile areas?",
          a: "We coordinate timing and access directly with your facilities and infection-control staff before every visit, and adjust treatment methods for any area with special handling requirements.",
        },
      ]}
    />
  );
}
