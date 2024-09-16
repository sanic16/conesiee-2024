import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateSlug(title: string) {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim() // Remove whitespace from both ends
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

const conferenceData: Prisma.ConferenceCreateInput[] = [
  {
    speaker: "Ing. Marcelo Bobadilla",
    speakerCV: `Ingeniero graduado de la Universidad de San Carlos de Guatemala; con cursos de
especialización en mercadeo, ventas, administración, liderazgo, finanzas y tecnología, tanto
en la Universidad Francisco Marroquín en Guatemala, como en INCAE en Costa Rica, en
México, y en la Universidad de Negocios de AT&T en New Jersey, Estados Unidos.
Con más de 30 años de experiencia laboral en diferentes empresas multinacionales,
también ha desempeñado diversas funciones en Juntas Directivas de diversas
organizaciones tanto a nivel nacional como internacional y fue Embajador de la Comunidad
Internacional de Emprendedores ALFA.
Actualmente es Director y Fundador de BC Soluciones Globales, empresa de Recursos
Humanos en Guatemala; Gerente General de Wise2Win, empresa creadora de la Ciudad
Digital Chapinisima.Com; es miembro de Junta Directiva de la Cámara de Comercio
Guatemalteco-Americana, AMCHAM y Presidente Electo 2026 para Centroamérica, del
Instituto de Ingenieros Eléctricos y Electrónicos, IEEE`,
    title: "Inteligencia emocional",
    day: "Lunes 23",
    hour: "14:00 - 15:00",
    company: "BC Solutions",
    slug: generateSlug("Inteligencia emocional"),
  },
  {
    speaker: "Ing. Josué Gómez",
    speakerCV: `ingeniero electrónico con MBA de la Escuela Europea de Dirección y Negocios en Madrid-España, he desempeñado cargos directivos desde el año 2010, donde he tenido a mi cargo funciones como administración de múltiples equipos de gestión de tecnología, implementación y diseño de proyectos, redes e infraestructura, administración de equipos de comunicación, Identidad digital, herramientas de seguridad, continuidad de negocio y análisis de riesgos relacionados con la tecnología. Gracias a mi experiencia y preparación académica, mi carrera se ha fortalecido en el ámbito de la tecnología, durante los últimos 15 años, siendo parte de diferentes organizaciones donde he aportado mis conocimientos sobre riesgo tecnológico, seguridad, continuidad de negocio, software y transformación digital.`,
    title: "Ciberseguridad",
    day: "Lunes 23",
    hour: "15:00 - 16:00",
    company: "15:00 - 16:00",
    slug: generateSlug("Ciberseguridad"),
  },
  {
    speaker: "Inga. Andrea Lara",
    speakerCV: `Andrea Lara es Doctora en Ingeniería Biomédica por la Universidad Tecnológica de Graz (TU Graz) en Austria. Posee una Maestría en Ingeniería Biomédica de la Universidad de Luebeck, Alemania, y es egresada de Ingeniería Electrónica de la Universidad Galileo. Ha trabajado en prestigiosos centros de investigación, como el Instituto Fraunhofer de Ingeniería Biomédica en Alemania (Fraunhofer IBMT) y el Instituto de Ingeniería Sanitaria con el Centro Europeo de Pruebas de Dispositivos Médicos en Austria (HCE). La Dra. Lara se especializa en la investigación y desarrollo de herramientas enfocadas en la salud, habiendo trabajado en proyectos que incluyen el procesamiento de señales biomédicas, el análisis de imágenes médicas utilizando inteligencia artificial, y la implementación de normativas y regulaciones. Actualmente, es directora del Instituto de Ingeniería Biomédica y del Laboratorio de Investigación BiomedLab de Universidad Galileo.`,
    title: "Ingenieria Biomedica",
    day: "Martes 24",
    hour: "14:00 - 15:00",
    company: "Universidad Galileo",
    slug: generateSlug("Ingenieria Biomedica"),
  },
  {
    speaker: "Ing. Hugo Elvira",
    speakerCV:
      "Hugo Elvira es ingeniero en Electrónica por la Universidad del Valle de Guatemala y perito en Electrónica por el Centro Educativo Técnico Laboral Kinal. Cuenta con experiencia en el desarrollo de proyectos tecnológicos, destacándose su participación en la elaboración del primer satélite guatemalteco, Quetzal-1. Es fundador y presidente general de la Fundación Amivalle, una institución que busca mejorar el acceso a la educación mediante becas universitarias, capacitación docente y apoyo a la investigación en diversas áreas como medicina, agricultura y arte. Fue finalista en el Galardón Guatemaltecos Ilustres en 2020. A finales de ese año, decidió ampliar su formación hacia la filosofía y la teología, obteniendo una licenciatura en ambas disciplinas por la Universidad Pontificia de la Santa Cruz en Roma, Italia, donde actualmente cursa un máster en Teología Pura o Teología Dogmática.",
    title: "Satélite Quetzal-1 y proyectos nacionales",
    day: "Martes 24",
    hour: "15:00 - 16:00",
    company: "Universidad del Valle de Guatemala",
    slug: generateSlug("Satelite Quetzal-1 y proyectos nacionales"),
  },
  {
    speaker: "Ing. Bryan Villela",
    speakerCV: `Ingeniero electricista graduado de la Universidad de San Carlos de Guatemala, con una especialización en Mercados Eléctricos por la misma universidad. Actualmente cursa una maestría en Energía y Ambiente en la Universidad de San Carlos de Guatemala, y previamente completó una maestría en Administración de Empresas en la Universidad Rafael Landívar. Cuenta con una amplia experiencia en el sector eléctrico en Guatemala, El Salvador y Honduras, desempeñándose actualmente como coordinador de preventa y diseño en Legrand LCA, donde lidera el desarrollo de líneas de producto eléctrico de media tensión, diseñando e implementando estrategias para introducir soluciones innovadoras en proyectos emblemáticos. Anteriormente, fue asesor de diseño y especificación, donde desarrollaba capacitaciones técnicas y comerciales, además de proporcionar soporte a clientes clave en la implementación de productos eléctricos. En su etapa en EEGSA, gestionó proyectos de construcción de líneas de media y baja tensión, coordinando cuadrillas y supervisando la ejecución de mejoras y proyectos de coinversión.`,
    title: "Transformadores secos",
    day: "Miércoles 25",
    hour: "15:00 - 16:00",
    company: "Legrand",
    slug: generateSlug("Transformadores secos"),
  },
  {
    speaker: "Jose Algara",
    speakerCV: `José Algara es un comunicador, locutor, presentador, asesor y capacitador con una amplia trayectoria en medios de comunicación y marketing de influenciadores. Comenzó su carrera como modelo a los 16 años, participando en múltiples comerciales para diversas marcas. Su incursión en la radio inició con el morning show "Los 3 Ratones" en Atmosfera, y luego pasó a la televisión con Guatevisión y Canal Antigua. Fue parte del equipo en la radio Más Música, donde co-creó el programa "Los Indomables". En televisión, participó en la cobertura del mundial con "Antigua Sports" en Canal Antigua.  Además de su experiencia en medios, José trabajó como asesor de influenciadores en una agencia de publicidad y regresó a la radio en RCN, donde también fue responsable de crear y desarrollar el área de Redes Sociales de las emisoras, expandiendo el alcance digital de las estaciones. Ha sido asesor de producción en una importante productora de ESPN, colaborando en la grabación de documentales y otros proyectos para la cadena.    Actualmente, José es especialista en capacitaciones, producción e influenciadores en Steren Guatemala, una empresa de tecnología. A lo largo de su carrera, ha trabajado con grandes marcas nacionales e internacionales, desarrollando un nicho en redes sociales como influenciador, lo que le ha permitido adquirir un profundo conocimiento en marketing de influenciadores y su impacto en la relación con clientes y audiencias.`,
    title: "Marketing y tecnología",
    day: "jueves 26",
    hour: "11:00 - 12:00",
    company: "Steren",
    slug: generateSlug("Marketing y tecnologia"),
  },
  {
    speaker: "Ing . Erick Sosa",
    speakerCV:
      "Erick Sosa es actualmente el Gerente de País para Guatemala y Gerente de Desarrollo de Socios para Centroamérica y el Caribe. En esta posición, lidera la estrategia comercial para Guatemala y gestiona las relaciones estratégicas con los socios comerciales en la región. Con 23 años de experiencia en Microsoft, ha desempeñado diversos roles, desde especialista en soluciones tecnológicas hasta consultor senior en el desarrollo de TI para Latinoamérica. Erick posee una licenciatura en Ingeniería de Sistemas por la Universidad Francisco Marroquín, y tres maestrías en administración de bases de datos, gestión de sistemas de información y telecomunicaciones. Actualmente, está cursando un doctorado (PhD) en Inteligencia Artificial y Computación Cognitiva. Además, Erick ha sido catedrático en la Universidad del Istmo durante los últimos 8 años, impartiendo clases en las carreras de Ingeniería en Sistemas y Electrónica.",
    title: "Inteligencia artificial y sus aplicaciones en la industria",
    day: "jueves 26",
    hour: "14:00 - 15:00",
    company: "Microsoft",
    slug: generateSlug(
      "Inteligencia artificial y sus aplicaciones en la industria"
    ),
  },
];

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
    slug: "planta-industrial-samboro-23",
    description:
      "Visita técnica a la Planta Industrial Samboro, donde se examinarán los procesos de producción industrial avanzados. Los participantes podrán observar las líneas de producción, las tecnologías empleadas y los procedimientos de control de calidad en esta instalación clave para el sector industrial en Guatemala.",
    shortDescription:
      "Observa los procesos industriales y tecnologías avanzadas en la Planta Samboro.",
    date: new Date("2024-09-23"),
    images: [
      "/visitas/samboro/logo.jpg",
      "/visitas/samboro/image_1.jpg",
      "/visitas/samboro/image1.jpeg",
      "/visitas/samboro/image2.jpeg",
      "/visitas/samboro/image3.jpeg",
      "/visitas/samboro/image4.jpeg",
    ],
    registrationLink: "https://forms.gle/KRsyAbN6AW51RvWH6",
  },
  {
    title: "Subestación Guatemala Sur",
    slug: "subestacion-guatemala-sur-23",
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
    slug: "subestacion-guatemala-sur-24",
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
    slug: "planta-industrial-samboro-24",
    description:
      "Visita técnica a la Planta Industrial Samboro, donde se examinarán los procesos de producción industrial avanzados. Los participantes podrán observar las líneas de producción, las tecnologías empleadas y los procedimientos de control de calidad en esta instalación clave para el sector industrial en Guatemala.",
    shortDescription:
      "Observa los procesos industriales y tecnologías avanzadas en la Planta Samboro.",
    date: new Date("2024-09-24"),
    images: [
      "/visitas/samboro/logo.jpg",
      "/visitas/samboro/image_1.jpg",
      "/visitas/samboro/image1.jpeg",
      "/visitas/samboro/image2.jpeg",
      "/visitas/samboro/image3.jpeg",
      "/visitas/samboro/image4.jpeg",
    ],
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
    path: "/conesiee/gallery/horus/",
    images: [
      "jtebt90m9cdh9hal9hj4",
      "e8ayuxct7arn7jprunrv",
      "l6ad1desqmopci7ofhlr",
      "rnqhzuyeirjiety09n2w",
      "b7ppy2yd5b0agnvsau4u",
      "lddqna0gpgijmc54vupg",
      "tinvljeoakqdgong0vdi",
      "r4o7vashee1vn7q8sqeb",
      "i3ajg7xj523vmxfoq1w5",
      "tu9t6wu4ukmftp7rjaji",
      "ex5dcgo9rok1ne5xsqbx",
      "hsnueav6f7ujp3bsdujw",
      "rbkylrsefqhryanekfxe",
      "y3tzjhlilwpwvttkhjqu",
      "pfqhshmyru2nzhnrkgyv",
      "gwomylytny8ac9yuu7dc",
      "ncet253emzcrsi13yk59",
    ],
  },
  {
    title: "DIGITAL INTEGRATED CIRCUITS DESIGN FLOW",
    slug: generateSlug("Flujo de diseno de circuitos integrados digitales"),
    description:
      "El Ing. Victor Grimblat presentó una charla sobre el flujo de diseño de circuitos integrados digitales en el auditorio Francisco Vela. Se discutieron las etapas del diseño, desde la concepción hasta la prueba, incluyendo herramientas y técnicas avanzadas. La sesión ofreció una visión completa del proceso y sus desafíos.",
    date: new Date("2024-07-23"),
    images: [
      "gazoi4ftaztctee1yfpb",
      "mvoyswb5yiebl6pvicuq",
      "uzg5gnfdzvbxwhqnjd16",
      "vdhbgfmrpnkra8r9gol5",
      "julkqryh5i1lyizbbvct",
      "ab2n0kdxaahzggsnxxfp",
      "jss0xbyw27vg2guu9dcg",
      "yn4qaifvmwsgtu5do3ji",
    ],
    path: "/conesiee/gallery/francisco_vela/",
  },
];

const workshops: Prisma.WorkshopCreateInput[] = [
  {
    title: "Talleres INTECAP",
    slug: generateSlug("Talleres INTECAP"),
    portalDescription:
      "Participa en los talleres impartidos en INTECAP, sobre temas de interés para la ingeniería eléctrica y electrónica.",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScpcOjcBqWAOVcz6yicssecRkB9wUhFazOKCsiobFilieq8TQ/viewform",
    images: [
      "conesiee/workshops/zcpjlzrizlasyvrqcour",
      "conesiee/workshops/osweera1mtjrl9wndwbk",
      "conesiee/workshops/okgc79m4tljznxuyhqt4",
      "conesiee/workshops/pyliphvre1g7y8wniacs",
      "conesiee/workshops/ltczxjo89zzmlq6pv6lf",
    ],
    date: new Date("2024-09-27"),
    description: `<ul>
  <li><strong>Robótica:</strong> Aprende sobre la programación y construcción de robots, desde la teoría hasta la implementación.</li>
  <li><strong>Industria 4.0:</strong> Descubre cómo las nuevas tecnologías están revolucionando la industria y su impacto en la automatización.</li>
  <li><strong>Procesos Industriales:</strong> Conoce los procesos de manufactura y control de calidad en la industria para optimizar la producción.</li>
  <li><strong>Energía Renovable:</strong> Explora las energías limpias y cómo aplicarlas en el ámbito industrial para un futuro sostenible.</li>
</ul>
`,
  },
  {
    title: "Talleres Universidad Galileo",
    slug: generateSlug("Talleres Universidad Galileo"),
    portalDescription:
      "Participa en los talleres impartidos en la Universidad Galileo.",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfc1f8WbGYpFHKnUwwsoa23heIHJ6pB-YsetjAIHIisuZ6umw/viewform",
    images: [
      "conesiee/workshops/xvrn7jvj3mvqbatxe0bw",
      "conesiee/workshops/tsjrdd4pbfvxw1vmlrzy",
      "conesiee/workshops/mscfkkludnlavjjyvhge",

      "conesiee/workshops/djxr6c0pptpc1rzr8fiv",
      "conesiee/workshops/mtsxb3ore1ujhq81v4mn",
      "conesiee/workshops/b8phvvtujttfuvxt6bww",
    ],
    date: new Date("2024-09-25"),
    description: `<ul>
  <li><strong>Taller Internet de las Cosas (IoT):</strong> Aprende cómo conectar dispositivos electrónicos a internet y controlar sistemas de forma remota.</li>
  <li><strong>Taller Diseño Asistido por Computadora (CAD) e Impresión 3D:</strong> Domina el uso de herramientas CAD para crear modelos y prototipos con impresión 3D.</li>
  <li><strong>Taller Sistemas Operativos de Robots (ROS):</strong> Familiarízate con ROS, el sistema operativo para robots más utilizado en el mundo.</li>
  <li><strong>Taller Hackeo Ético:</strong> Descubre las técnicas para evaluar la seguridad informática de sistemas y cómo protegerlos de ataques.</li>
  <li><strong>Taller Diseño de PCB´s en Altium:</strong> Aprende a diseñar y fabricar placas de circuitos impresos utilizando Altium Designer.</li>
</ul>
`,
  },
];

const bannerData: Prisma.BannerCreateInput[] = [
  {
    title: "Banner 1",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/pnenvucwui1l8qm00vk7",
    publicId: "conesiee/banner/pnenvucwui1l8qm00vk7",
    order: 1,
  },
  {
    title: "Banner 2",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/se17b3jesgrqvg8ejzez",
    publicId: "conesiee/banner/se17b3jesgrqvg8ejzez",
    order: 2,
  },
  {
    title: "Banner 3",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/cxgoc5jwj3yvli2szu1o",
    publicId: "conesiee/banner/cxgoc5jwj3yvli2szu1o",
    order: 3,
  },
  {
    title: "Banner 4",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/uqsrarbv9aacwuol9hwm",
    publicId: "conesiee/banner/uqsrarbv9aacwuol9hwm",
    order: 4,
  },
  {
    title: "Banner 5",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/dhfrcrtxu8kr7haexke9",
    publicId: "conesiee/banner/dhfrcrtxu8kr7haexke9",
    order: 5,
  },
  {
    title: "Banner 6",
    imageUrl:
      "https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/banner/t4aim2uobzeufetbjcm0",
    publicId: "conesiee/banner/t4aim2uobzeufetbjcm0",
    order: 6,
  },
];

const technicalVisitRouteData = async () => {
  const technicalVisitsGalleryData = await prisma.technicalVisitEvent.findMany({
    select: {
      title: true,
      description: true,
      slug: true,
    },
  });

  const technicalVisitsRoutes = technicalVisitsGalleryData.map((visit) => ({
    title: `Visita Técnica a ${visit.title}`,
    description: visit.description.slice(0, 100) + "...",
    path: "/visitas/" + visit.slug,
  }));

  return technicalVisitsRoutes;
};

const galleryVisitRouteData = async () => {
  const galleryEventsData = await prisma.galleryEvent.findMany({
    select: {
      title: true,
      description: true,
      slug: true,
    },
  });

  const galleryRoutes = galleryEventsData.map((event) => ({
    title: event.title,
    description: event.description.slice(0, 100) + "...",
    path: "/galeria/" + event.slug,
  }));

  return galleryRoutes;
};

const searchingRouteData: Prisma.RouteCreateInput[] = [
  {
    title: "Detalles del Congreso",
    description: "Conoce más sobre la sede y el enfoque del congreso.",
    path: "/#detallesEvento",
  },
  {
    title: "Nosotros",
    description: "Conoce más sobre CONESIEE 2024 y su equipo organizador.",
    path: "/nosotros",
  },
  {
    title: "Galería",
    description:
      "Explora las fotos de las visitas técnicas y eventos del congreso.",
    path: "/galeria",
  },
  {
    title: "Misión",
    description: "La misión de CONESIEE 2024 es...",
    path: "/nosotros#mision",
  },
  {
    title: "Visión",
    description: "La visión de CONESIEE 2024 es...",
    path: "/nosotros#vision",
  },
  {
    title: "Objetivos",
    description: "Los objetivos de CONESIEE 2024 son...",
    path: "/nosotros#objetivos",
  },
  {
    title: "Organizadores",
    description: "Conoce a nuestro equipo de trabajo.",
    path: "/nosotros#organizadores",
  },
  {
    title: "Inscripciones",
    description: "Regístrate para participar en las visitas técnicas.",
    path: "/inscripciones",
  },
  {
    title: "Patrocinadores",
    description: "Conoce a las empresas que apoyan el congreso.",
    path: "/patrocinadores",
  },
  {
    title: "Detalles del Congreso",
    description: "Información sobre las fechas y actividades del congreso.",
    path: "/congreso",
  },
  {
    title: "Itinerario de semana de congreso",
    description: "Conoce el itinerario de actividades del congreso.",
    path: "/congreso/itinerario",
  },
];

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany({});
  await prisma.studentPayment.deleteMany({});
  await prisma.technicalVisitEvent.deleteMany({});
  await prisma.galleryEvent.deleteMany({});
  await prisma.route.deleteMany({});
  await prisma.banner.deleteMany({});
  await prisma.workshop.deleteMany({});
  await prisma.conference.deleteMany({});

  for (const conference of conferenceData) {
    await prisma.conference.create({
      data: conference,
    });
  }

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

  for (const route of searchingRouteData) {
    try {
      await prisma.route.create({
        data: route,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const technicalVisitRoute = await technicalVisitRouteData();
  const galleryRoute = await galleryVisitRouteData();

  for (const route of technicalVisitRoute) {
    try {
      await prisma.route.create({
        data: route,
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (const route of galleryRoute) {
    try {
      await prisma.route.create({
        data: route,
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (const banner of bannerData) {
    try {
      const bannerId = await prisma.banner.findFirst({
        where: {
          publicId: banner.publicId,
        },
      });
      if (!bannerId) {
        console.log(`Creating banner: ${banner.title} - ${banner.imageUrl}`);
        await prisma.banner.create({
          data: banner,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  for (const workshop of workshops) {
    try {
      await prisma.workshop.create({
        data: workshop,
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
