import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/healthcare-pest-control/";

export const metadata: Metadata = {
  title: `Healthcare Facility Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Healthcare facility pest control in ${CITY_STATE} for clinics, urgent care, and medical offices. Low-disruption, documented, licensed and insured service.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Healthcare Facility Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Pest control for clinics and medical offices with an emphasis on prevention and documentation.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function HealthcarePestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Healthcare Facility Pest Control"
      kicker={`Medical Office Pest Control in ${CITY_STATE}`}
      h1={`Healthcare Facility Pest Control in ${CITY_STATE}`}
      intro={`Clinics, urgent care centers, and medical offices run on patient trust — and pest activity is one of the fastest ways to lose it. Beaver Pest Defense builds low-disruption pest control programs for healthcare facilities of every size.`}
      image={{ src: "/photo-healthcare.jpg", alt: "Bright, modern medical office waiting room" }}
      blocks={[
        {
          heading: "Designed Around Patient Care, Not Around Us",
          body: "Exam rooms, waiting areas, and supply storage all have different sensitivities. We schedule around patient flow, use low-odor treatment methods, and keep technicians briefed on which areas require extra care — so pest control never interrupts care.",
        },
        {
          heading: "From Single-Provider Clinics to Multi-Department Offices",
          body: "A solo practitioner's office and a multi-specialty medical building need different levels of coordination. We scale the program to match — a simple recurring visit for a small clinic, or a coordinated schedule across departments for a larger facility.",
        },
        {
          heading: "Documentation for Accreditation & Inspections",
          body: "Every visit is logged with a written service report you can keep on file for accreditation reviews, health department inspections, or internal compliance records.",
        },
      ]}
      faqs={[
        {
          q: "Can you treat while patients are being seen?",
          a: "We schedule around your patient hours whenever possible and use low-odor, low-disruption methods. For sensitive areas like exam rooms, we coordinate timing directly with your staff.",
        },
        {
          q: "Do you provide documentation for accreditation or health inspections?",
          a: "Yes — every visit includes a written service report you can keep on file, and we can format documentation to match what your accrediting body or local health department requires.",
        },
        {
          q: "What's different about pest control for a medical office versus a regular business?",
          a: "Product selection, timing, and access to sensitive areas all need extra care in a healthcare setting. We use methods appropriate for clinical environments and coordinate closely with facility staff rather than treating it like a standard commercial stop.",
        },
      ]}
    />
  );
}
