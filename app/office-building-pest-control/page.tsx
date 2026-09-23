import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/office-building-pest-control/";

export const metadata: Metadata = {
  title: `Office Building Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Office building pest control in ${CITY_STATE} for corporate offices, coworking spaces, and multi-tenant towers. Discreet, scheduled, licensed and insured.`,
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
      kicker={`Office Building Exterminator in ${CITY_STATE}`}
      h1={`Office Building Pest Control in ${CITY_STATE}`}
      intro={`Your lobby, break rooms, and shared spaces say as much about your company as your conference room does. Beaver Pest Defense keeps corporate offices and office buildings pest-free without ever becoming visible to clients or employees.`}
      image={{ src: "/photo-office.jpg", alt: "Modern glass office building exterior" }}
      blocks={[
        {
          heading: "Where Office Buildings Actually Have Problems",
          body: "Break rooms, mail rooms, loading areas, and shared HVAC risers are the usual entry points and hot spots in office environments — not the open floor plan. We focus inspection and treatment where the activity actually happens, rather than a generic full-building spray.",
        },
        {
          heading: "Built for Landlords, Property Managers & Single Tenants",
          body: "Whether you own the building, manage it for a client, or lease a single suite, we scope the service to match — building-wide programs for landlords and property managers, or a single-suite plan if that's all you're responsible for.",
        },
        {
          heading: "Never During Business Hours (Unless You Want It That Way)",
          body: "Most office clients prefer early-morning or after-hours visits so pest control is never something a client or employee notices. We'll set a schedule that works for your building's traffic.",
        },
      ]}
      faqs={[
        {
          q: "Will tenants or visitors notice the service?",
          a: "Not if you don't want them to. We use unmarked vehicles and can schedule visits before or after business hours so treatment happens without anyone in the building noticing.",
        },
        {
          q: "Do you work with property management companies?",
          a: "Yes — we regularly coordinate directly with facilities and property management staff rather than individual tenants, and can provide documentation formatted for lease compliance or ownership reporting.",
        },
        {
          q: "What pests are most common in office buildings?",
          a: "Ants, cockroaches, and occasional rodent activity around break rooms and loading docks are the most frequent issues we see in office environments, along with seasonal stinging insects near entrances.",
        },
      ]}
    />
  );
}
