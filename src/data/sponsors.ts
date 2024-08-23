import sterenLogo from "@/../public/images/sponsor_logos/steren_logo.png";
import energiaActivaLogo from "@/../public/images/sponsor_logos/energia_activa_logo.png";
import eegsaLogo from "@/../public/images/sponsor_logos/eegsa_logo.jpg";
import esinsaLogo from "@/../public/images/sponsor_logos/esinsa.png";
import tecnoLogo from "@/../public/images/sponsor_logos/tecno_logo2.png";
import proelcaLogo from "@/../public/images/sponsor_logos/proelca_logo.png";

interface Sponsor {
  name: string;
  logo: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  description: string;
  website: string;
  category: "diamond" | "gold" | "silver" | "bronze";
  contribution:
    | "Patrocinador Diamante"
    | "Patrocinador Oro"
    | "Patrocinador Plata"
    | "Patrocinador Bronce";
}
console.log(sterenLogo);
const sponsors: Sponsor[] = [
  {
    name: "Steren",
    description:
      "Steren es una empresa mexicana dedicada a la venta de productos electrónicos y de telecomunicaciones.",
    logo: sterenLogo,
    website: "https://www.steren.com.gt/",
    category: "diamond",
    contribution: "Patrocinador Diamante",
  },
  {
    name: "Energía Activa",
    description:
      "Distribuidor de equipo eléctrico de alta calidad para los requerimientos de la industria.",
    logo: energiaActivaLogo,
    website: "https://energia-activa.com/",
    category: "diamond",
    contribution: "Patrocinador Diamante",
  },
  {
    name: "EEGSA",
    description:
      "Empresa Eléctrica de Guatemala, S.A. es una empresa guatemalteca dedicada a la distribución de energía eléctrica con infraestructura en 40% del territorio nacional.",
    logo: eegsaLogo,
    website: "https://eegsa.com/",
    category: "gold",
    contribution: "Patrocinador Oro",
  },
  {
    name: "ESINSA",
    description:
      "Empresa dedicada a servicios de ingeniería y venta de productos eléctricos de alta calidad.",
    logo: esinsaLogo,
    website: "https://www.esinsa.com/",
    category: "silver",
    contribution: "Patrocinador Plata",
  },
  {
    name: "TECNO",
    description:
      "TECNO es una marca global de tecnología que ofrece smartphones, dispositivos inteligentes, laptops, y productos para el hogar.",
    logo: tecnoLogo,
    website: "https://www.tecno-mobile.com",
    category: "silver",
    contribution: "Patrocinador Plata",
  },
  {
    name: "PROELCA",
    description:
      "Proelca fabrica tableros de distribución eléctrica y productos personalizados para la industria de construcción en Guatemala y Centroamérica.",
    logo: proelcaLogo,
    website: "https://www.proelca.com/",
    category: "bronze",
    contribution: "Patrocinador Bronce",
  },
];

export default sponsors;
