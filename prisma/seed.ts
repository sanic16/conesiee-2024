import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: "julio.sanic.gt.256@gmail.com",
    password: "123456",
    name: "jsanic16",
    fullName: "Julio Rubén Sanic Martínez",
    image: "https://avatars.githubusercontent.com/u/123691309?v=4",
  },
  {
    email: "angela@gmail.com",
    password: "123456",
    name: "angela",
    fullName: "Angela Beatríz Canel Hernández",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/organization-chart/tjysyvyzgalf31he8hke`,
  },
  {
    email: "201903798@ingenieria.usac.edu.gt",
    password: "123456",
    name: "diana",
    fullName: "Diana Gómez",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/organization-chart/g8knvjix5hwop1yckuh4`,
  },
  {
    email: "201906055@ingenieria.usac.edu.gt",
    password: "123456",
    fullName: "miguel",
    name: "Miguel Ordoñez",
    image: `https://res.cloudinary.com/dczuv9eyw/image/upload/v1723565061/conesiee/organization-chart/p2hvsdbzymftaiw811nt`,
  },
];

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany({});
  await prisma.studentPayment.deleteMany({});

  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
