import ProviderCredentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import prisma from "./lib/prisma";

export default {
  providers: [
    ProviderCredentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = credentials;

          const user = await prisma.user.findFirst({
            where: {
              email: email as string,
            },
          });
          if (!user || !user.password) return null;

          const passwordMatch = user.password === password;
          if (!passwordMatch) return null;
        }

        return null;
      },
    }),
  ],
  trustHost: true,
} satisfies NextAuthConfig;
