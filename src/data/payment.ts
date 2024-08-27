import { IconType } from "react-icons";
import { FaUserGraduate } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

interface PaymentOption {
  id: number;
  title: string;
  link: string;
  icon: IconType;
}

export const paymentOptions = [
  {
    id: 1,
    title: "Inscripción Individual USAC",
    // description: "Con Cena de Gala",
    // price: "Q500",
    link: "https://forms.gle/SyLLjsCDJA3nLDw96",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    title: "Combo Cuates USAC/Externos",
    // description: "Sin Cena de Gala",
    // price: "Q400",
    link: "https://forms.gle/SyLLjsCDJA3nLDw96",
    icon: FaUsers,
  },
  {
    id: 3,
    title: "Inscripción Externos/Profesionales",
    // description: "3 personas + Cena de Gala",
    // price: "Q1350",
    link: "https://forms.gle/SbgJ7DsWCzsaS6mb7",
    icon: FaUserTie,
  },
  // {
  //   id: 4,
  //   title: "Day Pass USAC",
  //   description: "Solo un día de actividades",
  //   price: "Q200",
  //   link: "https://forms.gle/SyLLjsCDJA3nLDw96",
  // },
  // {
  //   id: 5,
  //   title: "Externos Completo",
  //   description: "Con Cena de Gala",
  //   price: "Q600",
  //   link: "https://forms.gle/ZF8Trnx1GADvx7Gz6",
  // },
  // {
  //   id: 6,
  //   title: "Externos Simple",
  //   description: "Sin Cena de Gala",
  //   price: "Q500",
  //   link: "https://forms.gle/ZF8Trnx1GADvx7Gz6",
  // },

  // {
  //   id: 7,
  //   title: "Combo Externos",
  //   description: "3 personas + Cena de Gala",
  //   price: "Q1650",
  //   link: "https://forms.gle/SbgJ7DsWCzsaS6mb7",
  // },
  // {
  //   id: 8,
  //   title: "Day Pass Externos",
  //   description: "Solo un día de actividades",
  //   price: "Q250",
  //   link: "https://forms.gle/SbgJ7DsWCzsaS6mb7",
  // },
];
