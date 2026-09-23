import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/property-management-pest-control/";

export const metadata: Metadata = {
  title: `Pest Control for Property Managers in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Apartment and multifamily pest control for property management companies in ${CITY_STATE}. Recurring service, resident-friendly scheduling, documentation.`,
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
      kicker={`Multifamily & Apartment Pest Control in ${CITY_STATE}`}
      h1={`Pest Control for Property Management Companies in ${CITY_STATE}`}
      intro={`One resident complaint about pests can turn into a lease dispute, a bad review, or a vacancy. Beaver Pest Defense builds recurring pest control programs for property managers that keep ahead of problems instead of chasing them.`}
      image={{ src: "/photo-property-management.jpg", alt: "Multi-tenant apartment building exterior" }}
      blocks={[
        {
          heading: "Built Around Resident Turnover",
          body: "Move-outs, vacant units, and shared walls all create pest pressure that's different from a single-tenant building. We coordinate directly with your leasing and maintenance staff on unit access, so service happens on a predictable schedule without chasing down residents.",
        },
        {
          heading: "Whole-Building Coverage, Not Just Complaint Response",
          body: "Beyond individual units, we cover common areas, trash enclosures, basements, and building perimeters — the shared spaces where an infestation usually starts before it ever reaches a resident's door.",
        },
        {
          heading: "Reporting Owners, Boards & Residents Can See",
          body: "Every visit includes a service report you can hand to ownership, a condo board, or a resident who has questions — plus emergency response when a unit needs immediate attention.",
        },
      ]}
      faqs={[
        {
          q: "How do you handle access to individual units?",
          a: "We coordinate directly with your leasing or maintenance office on scheduling and notice requirements, so unit access follows your property's existing procedures rather than creating extra work for your staff.",
        },
        {
          q: "Do you service common areas as well as units?",
          a: "Yes — trash enclosures, basements, laundry rooms, and building perimeters are typically where multifamily pest pressure starts, so they're part of a standard property management plan.",
        },
        {
          q: "Can you provide a report for ownership or a condo board?",
          a: "Every visit comes with a written service report. We can format it however your ownership group or board needs it for their records.",
        },
      ]}
    />
  );
}
