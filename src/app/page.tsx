import Banner from "@/sections/banner/Banner";
import Sponsors from "@/sections/sponsors/Sponsors";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("@/sections/counter/Counter"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "CONESIEE 2024 - Inicio",
  description:
    "Bienvenido a la página principal del CONESIEE 2024. Descubre los detalles del evento más importante para estudiantes y profesionales de ingeniería eléctrica, electrónica y mecatrónica en Guatemala.",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <Counter />
      <Sponsors />
    </>
  );
}
