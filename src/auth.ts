import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import prisma from "./lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credenciales",
  credentials: {
    username: {
      label: "Nombre de Usuario",
      type: "email",
      placeholder: "Correo Electrónico",
    },
    password: {
      label: "Contraseña",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (!credentials.username || !credentials.password) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: {
        email: credentials.username,
        password: credentials.password,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
      },
    });

    if (user) {
      return {
        id: user.id,
        email: user.email,
        name: user.fullName,
      };
    } else {
      return null;
    }
  },
});

const config = {
  providers: [credentialsConfig],
  trustHost: true,
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
