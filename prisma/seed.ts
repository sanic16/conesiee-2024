import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateSlug(title: string) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

const userData: Prisma.UserCreateInput[] = [
  {
    email: "julio.sanic.gt.256@gmail.com",
    password: "123456",
    name: "jsanic16",
    fullName: "Julio Rubén Sanic Martínez",
    image: "https://avatars.githubusercontent.com/u/123691309?v=4",
  },
  {
    email: "congresoconesieeusac@ingenieria.usac.edu.gt",
    password: "123456",
    name: "admin",
    fullName: "Administrador",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/mydwxmoflyihk0yylln8`,
  },
  {
    email: "201903798@ingenieria.usac.edu.gt",
    password: "123456",
    name: "diana",
    fullName: "Diana Gómez",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/organization-chart/g8knvjix5hwop1yckuh4`,
  },
  {
    email: "201906055@ingenieria.usac.edu.gt",
    password: "123456",
    fullName: "miguel",
    name: "Miguel Ordoñez",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/organization-chart/p2hvsdbzymftaiw811nt`,
  },
];

const technicalVisitData: Prisma.TechnicalVisitEventCreateInput[] = [
  {
    title: "Hidroeléctrica Chixoy ",
    slug: "hidroelectrica-chixoy",
    description:
      "Visita técnica a la Hidroeléctrica Chixoy, una de las principales plantas de generación de energía hidroeléctrica en Guatemala. Los participantes tendrán la oportunidad de explorar la infraestructura de la planta, incluyendo la presa, las turbinas y los sistemas de distribución de energía. Esta visita proporcionará una visión detallada de la generación de energía hidroeléctrica y su impacto en el medio ambiente.",
    shortDescription:
      "Explora la generación de energía hidroeléctrica en la Hidroeléctrica Chixoy.",
    date: new Date("2024-08-31"),
    images: [
      "/visitas/chixoy/logo.jpg",
      "/visitas/chixoy/image_1.jpeg",
      "/visitas/chixoy/image_2.jpeg",
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeCD5j68szX4jaTNOmR_NMzEKXZy3sGSjUyzUMziSUjL4JhuA/closedform",
    isFromCongress: false,
  },
  {
    title: "Alimentos S.A.",
    slug: "alimentos-sa",
    description:
      "Visita técnica a Alimentos S.A., una destacada empresa en el sector alimentario en Guatemala. Los participantes tendrán la oportunidad de explorar el proceso de producción, desde la recepción de materias primas hasta el envasado final. Esta visita ofrecerá una visión integral de las prácticas de manufactura y control de calidad implementadas en la planta.",
    shortDescription:
      "Explora el proceso de producción y control de calidad en Alimentos S.A.",
    date: new Date("2024-09-23"),
    images: ["/visitas/alimentos/logo.png", "/visitas/alimentos/image_1.jpg"],
    registrationLink: "https://forms.gle/GCX6yBUcYpiSMsqQ8",
  },
  {
    title: "Parque Eólico San Antonio",
    slug: "parque-eolico-san-antonio",
    description:
      "Visita técnica al Parque Eólico San Antonio, uno de los principales proyectos de energía eólica en Guatemala. Se revisarán los métodos de generación de energía eólica, incluyendo la operación de aerogeneradores y el impacto ambiental positivo de la instalación. Esta visita proporcionará una visión detallada de la tecnología y la gestión de este proyecto de energía renovable.",
    shortDescription:
      "Conoce la generación de energía eólica y la tecnología del Parque Eólico San Antonio.",
    date: new Date("2024-09-24"),
    images: [
      "/visitas/san_antonio/logo.png",
      "/visitas/san_antonio/image_1.jpg",
    ],
    registrationLink: "https://forms.gle/sKDs8NoPbBY73ghS6",
  },
  {
    title: "Colgate",
    slug: "colgate",
    description:
      "Visita técnica a la planta de Colgate en Guatemala, donde se conocerán los procesos de fabricación de productos de consumo masivo. La visita incluirá un recorrido por las instalaciones de producción, empaque y control de calidad, ofreciendo una comprensión profunda de las operaciones y estándares de la planta.",
    shortDescription:
      "Descubre los procesos de fabricación y control de calidad en la planta de Colgate.",
    date: new Date("2024-09-23"),
    images: ["/visitas/colgate/logo.png"],
    registrationLink: "https://forms.gle/ALNB5aKZQTiztwD69",
  },
  {
    title: "Administrador de Mercado Mayorista",
    slug: "administrador-de-mercado-mayorista",
    description:
      "Visita técnica al Administrador de Mercado Mayorista, la entidad responsable de la gestión y regulación del mercado eléctrico mayorista en Guatemala. La visita permitirá a los participantes entender el funcionamiento del mercado, la distribución de energía y las políticas regulatorias que afectan el sector eléctrico.",
    shortDescription:
      "Comprende la gestión y regulación del mercado eléctrico mayorista en Guatemala.",
    date: new Date("2024-09-24"),
    images: [
      "/visitas/amm/logo.png",
      "/visitas/amm/image_1.webp",
      "/visitas/amm/image_2.webp",
    ],
    registrationLink: "https://forms.gle/rzDPbPWR7dZuHbty6",
  },
  {
    title: "Planta Industrial Samboro",
    slug: "planta-industrial-samboro",
    description:
      "Visita técnica a la Planta Industrial Samboro, donde se examinarán los procesos de producción industrial avanzados. Los participantes podrán observar las líneas de producción, las tecnologías empleadas y los procedimientos de control de calidad en esta instalación clave para el sector industrial en Guatemala.",
    shortDescription:
      "Observa los procesos industriales y tecnologías avanzadas en la Planta Samboro.",
    date: new Date("2024-09-23"),
    images: ["/visitas/samboro/logo.jpg", "/visitas/samboro/image_1.jpg"],
    registrationLink: "https://forms.gle/KRsyAbN6AW51RvWH6",
  },
  {
    title: "Subestación Guatemala Sur",
    slug: "subestacion-guatemala-sur",
    description:
      "Visita técnica a la Subestación Guatemala Sur, una instalación crucial para la distribución de energía eléctrica en la región. La visita ofrecerá una visión detallada del funcionamiento de la subestación, incluyendo la gestión de cargas, la protección de sistemas y el mantenimiento de equipos.",
    shortDescription:
      "Explora el funcionamiento y la gestión de la Subestación Guatemala Sur.",
    date: new Date("2024-09-23"),
    images: ["/visitas/guate_sur/logo.jpg", "/visitas/guate_sur/image_1.webp"],
    registrationLink: "https://forms.gle/WCLf8EDDrtkea8cx7",
  },
  {
    title: "Subestación Guatemala Sur",
    slug: "subestacion-guatemala-sur",
    description:
      "Visita técnica a la Subestación Guatemala Sur, una instalación crucial para la distribución de energía eléctrica en la región. La visita ofrecerá una visión detallada del funcionamiento de la subestación, incluyendo la gestión de cargas, la protección de sistemas y el mantenimiento de equipos.",
    shortDescription:
      "Explora el funcionamiento y la gestión de la Subestación Guatemala Sur.",
    date: new Date("2024-09-24"),
    images: ["/visitas/guate_sur/logo.jpg", "/visitas/guate_sur/image_1.webp"],
    registrationLink: "https://forms.gle/MEE9XT2A1W7NKiFo7",
  },
  {
    title: "Planta Industrial Samboro",
    slug: "planta-industrial-samboro",
    description:
      "Visita técnica a la Planta Industrial Samboro, donde se examinarán los procesos de producción industrial avanzados. Los participantes podrán observar las líneas de producción, las tecnologías empleadas y los procedimientos de control de calidad en esta instalación clave para el sector industrial en Guatemala.",
    shortDescription:
      "Observa los procesos industriales y tecnologías avanzadas en la Planta Samboro.",
    date: new Date("2024-09-24"),
    images: ["/visitas/samboro/logo.jpg", "/visitas/samboro/image_1.jpg"],
    registrationLink: "https://forms.gle/t6R1f1c7j9QsoRun6",
  },
];

const galleryEventData: Prisma.GalleryEventCreateInput[] = [
  {
    title: "Visita Técnica a Horus Energy",
    slug: generateSlug("Visita Tecnica a Horus Energy"),
    description:
      "El 9 de agosto, se realizó una visita técnica a Grupo Onyx, a través de su marca Horus Energy, líder en energía solar en Guatemala. Durante la visita, se exploraron las plantas solares Horus I y Horus II, las más grandes del país. Estas plantas contribuyen significativamente con energía limpia al sistema eléctrico de Guatemala.",
    date: new Date("2024-08-09"),
    path: "/visitas/horus/",
    images: [
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
    ],
  },
  {
    title: "DIGITAL INTEGRATED CIRCUITS DESIGN FLOW",
    slug: generateSlug("Flujo de diseno de circuitos integrados digitales"),
    description:
      "El Ing. Victor Grimblat presentó una charla sobre el flujo de diseño de circuitos integrados digitales en el auditorio Francisco Vela. Se discutieron las etapas del diseño, desde la concepción hasta la prueba, incluyendo herramientas y técnicas avanzadas. La sesión ofreció una visión completa del proceso y sus desafíos.",
    date: new Date("2024-07-23"),
    images: [
      "WhatsApp Image 2024-08-20 at 7.37.52 AM(1).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.52 AM(2).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.52 AM(3).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.52 AM(4).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.53 AM(2).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.53 AM(3).jpeg",
      "WhatsApp Image 2024-08-20 at 7.37.54 AM.jpeg",
    ],
    path: "/visitas/francisco_vela_1/",
  },
];

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany({});
  await prisma.studentPayment.deleteMany({});

  for (const technicalVisit of technicalVisitData) {
    try {
      await prisma.technicalVisitEvent.create({
        data: technicalVisit,
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  for (const galleryEvent of galleryEventData) {
    try {
      await prisma.galleryEvent.create({
        data: galleryEvent,
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
