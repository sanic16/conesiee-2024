import prisma from "@/lib/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.NEXT_PUBLIC_BASE_URL;
  const visitas = await prisma.technicalVisitEvent.findMany({});

  const visitasPaths: MetadataRoute.Sitemap = visitas.map((visita) => ({
    url: `${domain}/visitas/${visita.slug}`,
    lastModified: new Date("2024-08-26"),
  }));

  const galeria = await prisma.galleryEvent.findMany({});

  const galeriaPaths: MetadataRoute.Sitemap = galeria.map((galeria) => ({
    url: `${domain}/galeria/${galeria.slug}`,
    lastModified: new Date("2024-08-26"),
  }));

  const conferences = await prisma.conference.findMany({});

  const conferencesPaths: MetadataRoute.Sitemap = conferences.map(
    (conference) => ({
      url: `${domain}/congreso/conferencias/${conference.slug}`,
      lastModified: new Date("2024-08-26"),
    })
  );

  const workshops = await prisma.workshop.findMany({});

  const workshopsPaths: MetadataRoute.Sitemap = workshops.map((workshop) => ({
    url: `${domain}/congreso/talleres/${workshop.slug}`,
    lastModified: new Date("2024-09-02"),
  }));

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
    ...visitasPaths,
    ...galeriaPaths,
    ...conferencesPaths,
    ...workshopsPaths,
  ];
}
