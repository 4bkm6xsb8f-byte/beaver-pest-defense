import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/residential-pest-control/";

export const metadata: Metadata = {
  title: `Residential Pest Control in ${CITY_STATE} | Home Pest Control Services`,
  description: `Residential pest control and home pest control services in ${CITY_STATE}. Year-round protection against ants, spiders, cockroaches, rodents, and stinging insects. Licensed and insured.`,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Residential Pest Control in ${CITY_STATE} | Beaver Pest Defense`,
    description: `Year-round home pest control services throughout ${CITY_STATE} & the surrounding area.`,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function ResidentialPestControlPage() {
  return (
    <LandingPage
      path={PATH}
      serviceName="Residential Pest Control"
      kicker={`Home Pest Control Services in ${CITY_STATE}`}
      h1={`Residential Pest Control in ${CITY_STATE}`}
      intro={`Year-round protection for homes against ants, spiders, cockroaches, rodents, stinging insects, and general household pests. Beaver Pest Defense brings the same licensed, insured, detail-oriented service we deliver for businesses to homeowners throughout ${CITY_STATE}.`}
      blocks={[
        {
          heading: "Residential Pest Control",
          body: "Year-round protection for homes against ants, spiders, cockroaches, rodents, stinging insects, and general household pests. Our home pest control services include an initial inspection, targeted treatment, and ongoing prevention so pests don't come back.",
        },
        {
          heading: "Rodent & Insect Control for Homeowners",
          body: "From seasonal ant invasions to rodent entry points around your foundation, we identify what's getting in and why, then treat and seal to keep it that way — using eco-conscious products whenever possible.",
        },
        {
          heading: "Free Inspection & Flexible Scheduling",
          body: "Get a free inspection or quote, and choose a one-time treatment or a recurring residential plan. Emergency pest response is available when you need help fast.",
        },
      ]}
    />
  );
}
