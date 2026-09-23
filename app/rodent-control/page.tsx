import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/rodent-control/";

export const metadata: Metadata = {
  title: `Rodent Control in ${CITY_STATE} | Beaver Pest Defense`,
  description: `Rodent control in ${CITY_STATE} for warehouses, offices, and homes: monitoring, exclusion, and documented treatment from a licensed team.`,
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
      kicker={`Mouse & Rat Control in ${CITY_STATE}`}
      h1={`Rodent Control in ${CITY_STATE}`}
      intro={`Mice and rats don't just chew through boxes and insulation — they carry health risks and, in a commercial setting, compliance problems. Beaver Pest Defense treats the entry points and the activity, not just the symptoms.`}
      blocks={[
        {
          heading: "Find the Entry Point First",
          body: "A trap without an entry-point fix is a temporary win. Before we treat, we inspect for the gaps, utility penetrations, and rooflines rodents are actually using, then combine exclusion recommendations with active treatment.",
        },
        {
          heading: "Different Scale for Different Properties",
          body: "A warehouse with dock doors and stored goods needs a different rodent program than a single-family home with a gap under the porch. We scale exterior bait stations, interior monitoring, and exclusion work to match the property.",
        },
        {
          heading: "Monitoring That Catches Activity Early",
          body: "Ongoing monitoring — not just a one-time treatment — is what keeps rodent activity from coming back. We check stations, log findings, and adjust the plan as conditions change, with emergency response available if activity shows up between visits.",
        },
      ]}
      faqs={[
        {
          q: "How do I know if I have a rodent problem?",
          a: "Droppings, gnaw marks, scratching sounds in walls or ceilings, and grease marks along baseboards are the most common signs. A free inspection will confirm what's active and where.",
        },
        {
          q: "How long does rodent control take to work?",
          a: "Active activity is often reduced within the first couple of visits, but a full program — including exclusion work — typically runs over several weeks to make sure entry points stay sealed and activity doesn't return.",
        },
        {
          q: "Do you handle both residential and commercial rodent issues?",
          a: "Yes. We scale the program to the property — from a single-family home to a warehouse with dock doors — using the same inspect-exclude-monitor approach at whatever scale fits.",
        },
      ]}
    />
  );
}
