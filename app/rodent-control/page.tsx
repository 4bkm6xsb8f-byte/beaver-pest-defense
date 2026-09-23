import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/rodent-control/";

export const metadata: Metadata = {
  title: `Rodent Control in ${CITY_STATE} | Rodent Control for Warehouses & Homes`,
  description: `Rodent control services in ${CITY_STATE} for warehouses, offices, and homes. Monitoring, exclusion, and prevention-focused rodent management from a licensed and insured team.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Rodent Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Rodent monitoring, exclusion, and prevention for commercial and residential properties.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function RodentControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Rodent Control"
      kicker={`Rodent Control for Warehouses & Homes in ${CITY_STATE}`}
      h1={`Rodent Control in ${CITY_STATE}`}
      intro={`Mice and rats bring health risks, property damage, and compliance headaches. Beaver Pest Defense provides rodent control for warehouses, offices, property management companies, and homes throughout ${CITY_STATE}.`}
      blocks={[
        {
          heading: "Rodent Control for Warehouses & Commercial Properties",
          body: "Large facilities are especially vulnerable to rodent activity — dock doors, stored goods, and expansive perimeters create easy entry points. Our program includes exterior bait stations, interior monitoring, exclusion recommendations, and documented inspection reports.",
        },
        {
          heading: "Residential Rodent Prevention",
          body: "At home, rodents typically enter through foundation gaps, utility penetrations, and rooflines. We identify entry points, treat active activity, and seal what we can to prevent re-entry.",
        },
        {
          heading: "Monitoring, Documentation & Emergency Response",
          body: "Every rodent control program includes ongoing monitoring and service reports, plus emergency pest response if activity is found between scheduled visits.",
        },
      ]}
    />
  );
}
