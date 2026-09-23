import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/dental-office-pest-control/";

export const metadata: Metadata = {
  title: `Dental Office Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Discreet dental office pest control in ${CITY_STATE}. Scheduled around patient hours, low-odor treatment, licensed and insured.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Dental Office Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Discreet pest control for dental offices — cleanliness, patient comfort, and documentation.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function DentalOfficePestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Dental Office Pest Control"
      kicker={`Discreet Pest Control for Dental Practices in ${CITY_STATE}`}
      h1={`Dental Office Pest Control in ${CITY_STATE}`}
      intro={`Patients notice everything in a dental office — including anything that doesn't belong there. Beaver Pest Defense keeps dental practices in ${CITY_STATE} pest-free with scheduling and products built for a clinical environment.`}
      image={{ src: "/photo-dental.jpg", alt: "Modern, clean dental treatment room" }}
      blocks={[
        {
          heading: "Scheduled Around Your Patients",
          body: "We aim to service dental practices before opening, after closing, or between appointment blocks whenever possible, using unmarked vehicles so nothing in the waiting room signals a pest control visit.",
        },
        {
          heading: "Built for Sterile, Sensitive Spaces",
          body: "Operatories, sterilization areas, and break rooms each need different handling. We use targeted, minimal-disruption treatment and keep a written record of what was done and where, so it's easy to show if a patient or inspector ever asks.",
        },
        {
          heading: "A Recurring Plan, Not a One-Off Visit",
          body: "Most practices set up a recurring plan to stay ahead of seasonal ants and occasional rodent activity around building entry points, with emergency response available if something comes up between visits.",
        },
      ]}
      faqs={[
        {
          q: "Will patients see or smell anything during treatment?",
          a: "We schedule around patient hours whenever possible and use low-odor products suited for clinical spaces, so most practices see no disruption to the patient experience.",
        },
        {
          q: "Can you avoid operatories and sterile areas?",
          a: "Yes. We coordinate with your office manager on which areas need special handling and adjust our treatment plan accordingly.",
        },
        {
          q: "How often should a dental office be serviced?",
          a: "Most practices do well with a recurring monthly or quarterly visit, adjusted based on what we find during the first inspection and your building's history of activity.",
        },
      ]}
    />
  );
}
