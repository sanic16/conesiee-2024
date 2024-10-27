import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    {
      url: `${domain}/`,
      lastModified: new Date("2024-08-26"),
    },
    {
      url: `${domain}/nosotros`,
      lastModified: new Date("2024-08-26"),
      priority: 1,
    },
    {
      url: `${domain}/galeria`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/inscripciones`,
      lastModified: new Date("2024-09-21"),
    },
    {
      url: `${domain}/visitas`,
      lastModified: new Date("2024-08-26"),
    },
    {
      url: `${domain}/congreso`,
      lastModified: new Date("2024-09-16"),
    },
    {
      url: `${domain}/patrocinadores`,
      lastModified: new Date("2024-08-26"),
    },
    {
      url: `${domain}/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/itinerario`,
      lastModified: new Date("2024-09-16"),
    },
  ];
}
