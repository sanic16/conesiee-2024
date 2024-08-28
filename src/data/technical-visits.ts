interface TechnicalVisitInfo {
  visits: {
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    date: string;
    images: string[];
    registrationLink?: string;
  }[];
}

export const technicalVisits: TechnicalVisitInfo = {
  visits: [
    {
      title: "Hidroeléctrica Chixoy ",
      slug: "hidroelectrica-chixoy",
      description:
        "Visita técnica a la Hidroeléctrica Chixoy, una de las principales plantas de generación de energía hidroeléctrica en Guatemala. Los participantes tendrán la oportunidad de explorar la infraestructura de la planta, incluyendo la presa, las turbinas y los sistemas de distribución de energía. Esta visita proporcionará una visión detallada de la generación de energía hidroeléctrica y su impacto en el medio ambiente.",
      shortDescription:
        "Explora la generación de energía hidroeléctrica en la Hidroeléctrica Chixoy.",
      date: "2024-08-31",
      images: [
        "/visitas/chixoy/logo.jpg",
        "/visitas/chixoy/image_1.jpeg",
        "/visitas/chixoy/image_2.jpeg",
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeCD5j68szX4jaTNOmR_NMzEKXZy3sGSjUyzUMziSUjL4JhuA/closedform",
    },
  ],
};

export const technicalConferenceVisits: TechnicalVisitInfo = {
  visits: [
    {
      title: "Alimentos S.A.",
      slug: "alimentos-sa",
      description:
        "Visita técnica a Alimentos S.A., una destacada empresa en el sector alimentario en Guatemala. Los participantes tendrán la oportunidad de explorar el proceso de producción, desde la recepción de materias primas hasta el envasado final. Esta visita ofrecerá una visión integral de las prácticas de manufactura y control de calidad implementadas en la planta.",
      shortDescription:
        "Explora el proceso de producción y control de calidad en Alimentos S.A.",
      date: "2024-09-23",
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
      date: "2024-09-24",
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
      date: "2024-09-23",
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
      date: "2024-09-24",
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
      date: "2024-09-23",
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
      date: "2024-09-23",
      images: [
        "/visitas/guate_sur/logo.jpg",
        "/visitas/guate_sur/image_1.webp",
      ],
      registrationLink: "https://forms.gle/WCLf8EDDrtkea8cx7",
    },
    {
      title: "Subestación Guatemala Sur",
      slug: "subestacion-guatemala-sur",
      description:
        "Visita técnica a la Subestación Guatemala Sur, una instalación crucial para la distribución de energía eléctrica en la región. La visita ofrecerá una visión detallada del funcionamiento de la subestación, incluyendo la gestión de cargas, la protección de sistemas y el mantenimiento de equipos.",
      shortDescription:
        "Explora el funcionamiento y la gestión de la Subestación Guatemala Sur.",
      date: "2024-09-24",
      images: [
        "/visitas/guate_sur/logo.jpg",
        "/visitas/guate_sur/image_1.webp",
      ],
      registrationLink: "https://forms.gle/MEE9XT2A1W7NKiFo7",
    },
    {
      title: "Planta Industrial Samboro",
      slug: "planta-industrial-samboro",
      description:
        "Visita técnica a la Planta Industrial Samboro, donde se examinarán los procesos de producción industrial avanzados. Los participantes podrán observar las líneas de producción, las tecnologías empleadas y los procedimientos de control de calidad en esta instalación clave para el sector industrial en Guatemala.",
      shortDescription:
        "Observa los procesos industriales y tecnologías avanzadas en la Planta Samboro.",
      date: "2024-09-24",
      images: ["/visitas/samboro/logo.jpg", "/visitas/samboro/image_1.jpg"],
      registrationLink: "https://forms.gle/t6R1f1c7j9QsoRun6",
    },
    {
      title: "Hidroeléctrica Chixoy ",
      slug: "hidroelectrica-chixoy",
      description:
        "Visita técnica a la Hidroeléctrica Chixoy, una de las principales plantas de generación de energía hidroeléctrica en Guatemala. Los participantes tendrán la oportunidad de explorar la infraestructura de la planta, incluyendo la presa, las turbinas y los sistemas de distribución de energía. Esta visita proporcionará una visión detallada de la generación de energía hidroeléctrica y su impacto en el medio ambiente.",
      shortDescription:
        "Explora la generación de energía hidroeléctrica en la Hidroeléctrica Chixoy.",
      date: "2024-08-31",
      images: [
        "/visitas/chixoy/logo.jpg",
        "/visitas/chixoy/image_1.jpeg",
        "/visitas/chixoy/image_2.jpeg",
      ],
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeCD5j68szX4jaTNOmR_NMzEKXZy3sGSjUyzUMziSUjL4JhuA/closedform",
    },
  ],
};
