interface GalleryInfo {
  events: {
    title: string;
    slug: string;
    description: string;
    date: string;
    path: string;
    images: string[];
  }[];
}

const franciscoVelaOneImages = [
  "WhatsApp Image 2024-08-20 at 7.37.52 AM(1).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.52 AM(2).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.52 AM(3).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.52 AM(4).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.53 AM(2).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.53 AM(3).jpeg",
  "WhatsApp Image 2024-08-20 at 7.37.54 AM.jpeg",
];

const horusImages = [
  "WhatsApp Image 2024-08-20 at 7.35.30 AM(1).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.31 AM(3).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.31 AM(4).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.31 AM.jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(1).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(2).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(3).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(4).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(5).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(6).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM(7).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.32 AM.jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM(1).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM(2).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM(3).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM(4).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM(5).jpeg",
  "WhatsApp Image 2024-08-20 at 7.35.33 AM.jpeg",
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
        "El 9 de agosto, se realizó una visita técnica a Grupo Onyx, a través de su marca Horus Energy, líder en energía solar en Guatemala. Durante la visita, se exploraron las plantas solares Horus I y Horus II, las más grandes del país. Estas plantas contribuyen significativamente con energía limpia al sistema eléctrico de Guatemala.",
      date: "2024-08-09",
      path: "/visitas/horus/",
      images: horusImages,
    },
    {
      title: "DIGITAL INTEGRATED CIRCUITS DESIGN FLOW",
      slug: generateSlug("Flujo de diseno de circuitos integrados digitales"),
      description:
        "El Ing. Victor Grimblat presentó una charla sobre el flujo de diseño de circuitos integrados digitales en el auditorio Francisco Vela. Se discutieron las etapas del diseño, desde la concepción hasta la prueba, incluyendo herramientas y técnicas avanzadas. La sesión ofreció una visión completa del proceso y sus desafíos.",
      date: "2024-07-23",
      images: franciscoVelaOneImages,
      path: "/visitas/francisco_vela_1/",
    },
  ],
};

export default galleryData;
