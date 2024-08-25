import prisma from "@/lib/prisma";

export default async function ComprobantesPage() {
  const payments = await prisma.studentPayment.findMany({});
  return <div className="container"></div>;
}
