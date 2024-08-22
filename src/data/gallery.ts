interface GalleryInfo {
  events: {
    title: string;
    slug: string;
    description: string;
    date: string;
    images: string[];
  }[];
}

const franciscoVelaOneImages = [
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.52 AM(1).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.52 AM(2).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.52 AM(3).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.52 AM(4).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.53 AM(2).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.53 AM(3).jpeg",
  "/visitas/francisco_vela_1/WhatsApp Image 2024-08-20 at 7.37.54 AM.jpeg",
];

const horusImages = [
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.30 AM(1).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.31 AM(3).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.31 AM(4).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.31 AM.jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(1).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(2).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(3).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(4).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(5).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(6).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM(7).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.32 AM.jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM(1).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM(2).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM(3).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM(4).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM(5).jpeg",
  "/visitas/horus/WhatsApp Image 2024-08-20 at 7.35.33 AM.jpeg",
];

function generateSlug(title: string) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

const galleryData: GalleryInfo = {
  events: [
    {
      title: "Visita Técnica a Horus Energy",
      slug: generateSlug("Visita Tecnica a Horus Energy"),
      description:
        "El 9 de agosto, se realizó una visita técnica a Grupo Onyx, a través de su marca Horus Energy, líder en Guatemala en la generación de energía solar fotovoltaica. Durante la visita, se exploraron las dos plantas solares más grandes del país, Horus I y Horus II, con una capacidad instalada combinada de 110 MW. Estas plantas aportan más de 200 giga watts-hora de energía limpia y renovable al sistema eléctrico de Guatemala.",
      date: "2024-08-09",
      images: horusImages,
    },
    {
      title: "Flujo de diseño de circuitos integrados digitales",
      slug: generateSlug("Flujo de diseno de circuitos integrados digitales"),
      description:
        "El Ing. Victor Grimblat presentó una charla detallada sobre el flujo de diseño de circuitos integrados digitales en el auditorio Francisco Vela. Durante la reunión, se abordaron las etapas cruciales del diseño, desde la concepción hasta la implementación y prueba de los circuitos. La sesión incluyó una discusión sobre las herramientas y técnicas avanzadas utilizadas en el diseño de circuitos, proporcionando a los asistentes una visión completa del proceso y sus desafíos.",
      date: "2024-07-23",
      images: franciscoVelaOneImages,
    },
  ],
};

export default galleryData;
