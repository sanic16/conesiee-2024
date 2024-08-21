import Banner from "@/sections/banner/Banner";
import Counter from "@/sections/counter/Counter";
import EventOverview from "@/sections/eventOverview/EventOverview";
import Scope from "@/sections/scope/Scope";
import Sponsors from "@/sections/sponsors/Sponsors";
import { Metadata } from "next";

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
      <EventOverview />
      <Scope />
      <Sponsors />
    </>
  );
}
