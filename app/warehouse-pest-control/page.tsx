import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/warehouse-pest-control/";

export const metadata: Metadata = {
  title: `Warehouse Pest Control in ${CITY_STATE} | Rodent Control for Warehouses`,
  description: `Warehouse pest control in ${CITY_STATE}: rodent monitoring, exclusion, and documented inspections for distribution centers and storage facilities.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Warehouse Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Rodent monitoring, insect control, and prevention-focused pest management for warehouses and distribution centers.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function WarehousePestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Warehouse Pest Control"
      kicker={`Warehouse & Distribution Center Pest Control in ${CITY_STATE}`}
      h1={`Warehouse Pest Control in ${CITY_STATE}`}
      intro={`Dock doors, stored inventory, and a large footprint make warehouses one of the easiest targets for rodents and insects. Beaver Pest Defense builds warehouse pest control programs around your receiving schedule, not the other way around.`}
      image={{ src: "/photo-warehouse.jpg", alt: "Empty modern warehouse interior with high shelving" }}
      blocks={[
        {
          heading: "Where Warehouses Actually Get Compromised",
          body: "Dock doors, gaps around loading areas, break rooms, and storage racking near exterior walls are the usual entry points. We focus exterior bait stations and interior monitoring where activity is most likely, instead of treating the whole footprint the same way.",
        },
        {
          heading: "Rodent Monitoring That Protects Inventory",
          body: "Rodent activity in a warehouse isn't just a nuisance — it's a threat to stored goods and, depending on what you handle, a food-safety or compliance issue. Our monitoring program is built to catch activity early, before it reaches product.",
        },
        {
          heading: "Documentation for Audits, Not Just a Checklist",
          body: "Every visit produces a written inspection report you can keep on file for internal audits, insurance requirements, or a customer's food-safety review — along with emergency response if something is found between visits.",
        },
      ]}
      faqs={[
        {
          q: "Can you service around receiving and shipping schedules?",
          a: "Yes — we build the visit schedule around your dock activity so pest control doesn't interfere with loading, unloading, or shift changes.",
        },
        {
          q: "Do you provide documentation for food-safety audits?",
          a: "Every visit includes a written inspection report. If you need it formatted for a specific audit or customer requirement, let us know and we'll match the format.",
        },
        {
          q: "What's the biggest rodent risk for a warehouse?",
          a: "Dock doors and gaps around loading areas are the most common entry points, especially as temperatures drop. Exterior bait stations combined with interior monitoring catch most activity before it reaches stored inventory.",
        },
      ]}
    />
  );
}
