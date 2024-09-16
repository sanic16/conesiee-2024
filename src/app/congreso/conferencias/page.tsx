import BackButton from "@/components/ui/backButton/BackButton";
import prisma from "@/lib/prisma";
import Link from "next/link";
import classes from "./page.module.css";

export default async function ConferencesPage() {
  const conferences = await prisma.conference.findMany({
    select: {
      title: true,
      id: true,
      slug: true,
    },
  });
  return (
    <section className="container">
      <BackButton />
      <ul className={classes.conference__list}>
        {conferences.map((conference) => (
          <li key={conference.id} className={classes.conference__item}>
            <Link href={`/congreso/conferencias/${conference.slug}`}>
              {conference.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
