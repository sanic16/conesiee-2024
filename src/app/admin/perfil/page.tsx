import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import Perfil from "./Perfil";

export default async function PerfilPage() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return <h3>El usuario no está logueado</h3>;
  }

  const userInfo = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (!userInfo) {
    return <h3>El usuario no está registrado en la base de datos</h3>;
  }

  return (
    <section className="container">
      <Perfil user={userInfo} />
    </section>
  );
}
