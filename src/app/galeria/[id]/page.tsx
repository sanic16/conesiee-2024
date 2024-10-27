import ImageGallery from "@/components/gallery/imageGallery/ImageGallery";
import PageHeading from "@/components/pageHeading/PageHeading";
import prisma from "@/lib/prisma";
import { cloudinaryUrl } from "@/utils/constants";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const event = await prisma.galleryEvent.findFirst({
    where: {
      slug: params.id,
    },
  });

  if (!event) {
    return {};
  }
  console.log("https://");
  return {
    title: event.title,
    description: event.title,
    openGraph: {
      images: [
        {
          url: `${cloudinaryUrl}${event.path}${event.images[3]}`,
        },
      ],
    },
  };
}

export default async function GalleryImageIdPage({
  params,
}: {
  params: { id: string };
}) {
  const slugs = await prisma.galleryEvent.findMany({
    select: {
      slug: true,
    },
  });

  const eventIds = slugs.map((slugObj) => slugObj.slug);

  if (!eventIds.includes(params.id)) {
    return <div>El evento no existe</div>;
  }

  const event = await prisma.galleryEvent.findFirst({
    where: {
      slug: params.id,
    },
  });

  if (!event) {
    return <div>El evento no existe</div>;
  }
  return (
    <div className="container">
      <PageHeading title={event.title} description={""} />
      <Link href="/galeria" className="btn primary">
        Regresar
      </Link>
      <ImageGallery
        images={event.images}
        path={event.path}
        href={`/galeria/${event.slug}`}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = await prisma.galleryEvent.findMany({
    select: {
      slug: true,
    },
  });

  return paths.map((path) => ({
    id: path.slug,
  }));
}
