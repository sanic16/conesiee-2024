import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import prisma from "./lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

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
        name: true,
        email: true,
      },
    });

    if (user) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    } else {
      return null;
    }
  },
});

export const config = {
  providers: [credentialsConfig],
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
