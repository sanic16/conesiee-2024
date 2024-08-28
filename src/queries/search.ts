import { prisma } from "@/lib/prisma";

export async function searchRoutes(searchTerm: string) {
  return prisma.route.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          path: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });
}
