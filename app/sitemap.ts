import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date("2026-10-28") },
    { url: `${SITE.url}/privacy`, lastModified: new Date("2026-10-26") },
  ];
}
