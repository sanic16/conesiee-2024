interface Navbar {
  id: number;
  url: string;
  title: string;
}

export const navbar: Navbar[] = [
  {
    id: 1,
    url: "/",
    title: "Inicio",
  },
  {
    id: 2,
    url: "/nosotros",
    title: "Nosotros",
  },
  {
    id: 3,
    url: "/galeria",
    title: "Galería",
  },
  {
    id: 4,
    url: "/inscripciones",
    title: "Inscripciones",
  },
  {
    id: 5,
    url: "/visitas",
    title: "Visitas Técnicas",
  },
  {
    id: 6,
    url: "/congreso",
    title: "Congreso",
  },
  {
    id: 7,
    url: "/patrocinadores",
    title: "Patrocinadores",
  },
];

export const authNavbar: Navbar[] = [
  {
    id: 1,
    url: "/admin",
    title: "Perfil",
  },
  {
    id: 2,
    url: "/admin/comprobantes",
    title: "Comprobantes",
  },
];
