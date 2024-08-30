import { prisma } from "@/lib/prisma";

export async function searchRoutes(searchTerm: string) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
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
