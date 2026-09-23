import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/dental-office-pest-control/";

export const metadata: Metadata = {
  title: `Dental Office Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Discreet dental office pest control in ${CITY_STATE}. Licensed, insured pest management for dental practices where cleanliness, patient comfort, and documentation matter.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Dental Office Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Discreet pest control for dental offices and clinics — cleanliness, patient comfort, and documentation.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function DentalOfficePestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Dental Office Pest Control"
      kicker={`Discreet Pest Control Service in ${CITY_STATE}`}
      h1={`Dental Office Pest Control in ${CITY_STATE}`}
      intro={`Discreet pest control for dental offices, clinics, and medical facilities where cleanliness, patient comfort, and documentation matter.`}
      blocks={[
        {
          heading: "Dental & Medical Office Pest Control",
          body: "Discreet pest control for dental offices, clinics, and medical facilities where cleanliness, patient comfort, and documentation matter. Beaver Pest Defense schedules service before or after patient hours whenever possible, using unmarked vehicles and low-odor treatment methods.",
        },
        {
          heading: "Built for Dental Practice Standards",
          body: "Sterile environments, sensitive equipment, and patient trust are non-negotiable. Our technicians work around operatories, sterilization areas, and break rooms with targeted, minimal-disruption pest control and full service documentation for your records.",
        },
        {
          heading: "Recurring, Reliable Service",
          body: "Set up a recurring commercial plan that keeps your practice pest-free year-round, with emergency response available if an issue comes up between scheduled visits.",
        },
      ]}
    />
  );
}
