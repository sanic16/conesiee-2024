import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput = {
  email: "julio.sanic.gt.256@gmail.com",
  password: "123456",
  name: "jsanic16",
  image: "https://avatars.githubusercontent.com/u/123691309?v=4",
};

async function main() {
  console.log("Clearing data...");
  await prisma.user.deleteMany({});
  await prisma.studentPayment.deleteMany({});

  console.log("Seeding data");
  await prisma.user.create({
    data: userData,
  });

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
