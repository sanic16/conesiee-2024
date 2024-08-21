import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar/Navbar";
import Footer from "@/sections/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "CONESIEE 2024 - Congreso Nacional de Estudiantes de Ingeniería Eléctrica y Electrónica",
  description:
    "Bienvenido a la página principal del CONESIEE 2024. Descubre los detalles del evento más importante para estudiantes y profesionales de ingeniería eléctrica, electrónica y mecatrónica en Guatemala.",
  keywords: [
    "CONESIEE",
    "Congreso",
    "Estudiantes",
    "Ingeniería",
    "Eléctrica",
    "Electrónica",
    "Mecatrónica",
    "Guatemala",
    "2024",
  ],
  openGraph: {
    locale: "es_GT",
    type: "website",
    countryName: "Guatemala",
    siteName: "CONESIEE 2024",
    images: [
      {
        hostname: "conesiee-static.codielectro.com",
        url: "http://conesiee-static.codielectro.com/openGraph/conesiee.jpg",
        width: 1080,
        height: 810,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
