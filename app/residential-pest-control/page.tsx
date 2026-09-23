import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { CITY_STATE, SITE_URL } from "@/lib/site";

const PATH = "/residential-pest-control/";

export const metadata: Metadata = {
  title: `Residential Pest Control in ${CITY_STATE} | Home Pest Control Services`,
  description: `Home pest control in ${CITY_STATE} for ants, spiders, rodents, and seasonal invaders. Free inspection, licensed and insured, flexible scheduling.`,
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
      intro={`The same attention to detail we bring to hospitals and warehouses goes into every home we treat. Beaver Pest Defense provides year-round residential pest control for houses and duplexes throughout ${CITY_STATE} & the surrounding area.`}
      image={{ src: "/photo-residential.jpg", alt: "Front entrance of a single-family home" }}
      blocks={[
        {
          heading: "Common Wisconsin Pest Pressure, Handled",
          body: "Ants and spiders in warm months, mice and other rodents looking for a way in as temperatures drop, and the occasional wasp nest near a porch or deck — we treat what's actually active at your home rather than running the same generic spray every visit.",
        },
        {
          heading: "One Inspection, A Real Plan",
          body: "We start by finding out how pests are getting in — foundation gaps, utility penetrations, gaps around windows and doors — and treat and seal what we can, rather than just spraying and hoping it holds.",
        },
        {
          heading: "One-Time Treatment or a Recurring Plan",
          body: "Some homeowners need a single visit to handle an active problem; others prefer a recurring seasonal plan so it never becomes one. Either way, we use eco-conscious products whenever possible and offer emergency response if something comes up between visits.",
        },
      ]}
      faqs={[
        {
          q: "How much does residential pest control cost?",
          a: "It depends on your home's size, the pest involved, and whether you want a one-time treatment or a recurring plan. Get a free inspection and we'll give you an exact quote before any work starts.",
        },
        {
          q: "Are your products safe for kids and pets?",
          a: "We use eco-conscious products whenever possible and will walk you through what's being used and any precautions to take. Let us know about kids or pets in the home when you schedule so we can plan accordingly.",
        },
        {
          q: "What if pests come back between visits?",
          a: "Emergency pest response is available if activity returns between scheduled visits — just call our main line and we'll get you back on the schedule.",
        },
      ]}
    />
  );
}
