import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/warehouse-pest-control/";

export const metadata: Metadata = {
  title: `Warehouse Pest Control in ${CITY_STATE} | Rodent Control for Warehouses`,
  description: `Warehouse pest control and rodent control for warehouses in ${CITY_STATE}. Protect inventory, loading docks, and storage areas with licensed, insured pest management.`,
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
      kicker={`Warehouse Rodent Control in ${CITY_STATE}`}
      h1={`Warehouse Pest Control in ${CITY_STATE}`}
      intro={`Protect inventory, loading docks, break rooms, storage areas, and delivery zones with rodent monitoring, insect control, and prevention-focused pest management from Beaver Pest Defense.`}
      blocks={[
        {
          heading: "Warehouse Pest Control",
          body: "Protect inventory, loading docks, break rooms, storage areas, and delivery zones with rodent monitoring, insect control, and prevention-focused pest management. Beaver Pest Defense builds warehouse pest control programs around your receiving schedule and storage layout, so treatment doesn't interrupt operations.",
        },
        {
          heading: "Rodent Control for Warehouses",
          body: "Warehouses and distribution centers are high-risk for rodent activity — large footprints, dock doors, and stored goods create easy entry points and food sources. Our rodent control program includes exterior bait stations, interior monitoring, exclusion recommendations, and documented inspection reports for your food-safety or compliance audits.",
        },
        {
          heading: "Built for Distribution Center Operations",
          body: "Scheduled service plans, emergency pest response, and detailed reporting keep your facility audit-ready and your inventory protected — with service designed around shift schedules and minimal disruption to receiving and shipping.",
        },
      ]}
    />
  );
}
