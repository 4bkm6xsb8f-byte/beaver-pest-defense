import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/commercial-pest-control/",
  "/warehouse-pest-control/",
  "/property-management-pest-control/",
  "/healthcare-pest-control/",
  "/dental-office-pest-control/",
  "/hospital-pest-control/",
  "/office-building-pest-control/",
  "/residential-pest-control/",
  "/rodent-control/",
  "/integrated-pest-management/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
