import prisma from "@/lib/prisma";
import React from "react";

export default async function PepitoPage() {
  const payments = await prisma.studentPayment.findMany();
  return <div>{JSON.stringify(payments)}</div>;
}
