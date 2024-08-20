import Banner from "@/sections/banner/Banner";
import { Metadata } from "next";

export const metadat: Metadata = {
  title: "CONESIEE 2024 - Inicio",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <Banner />
    </>
  );
}
