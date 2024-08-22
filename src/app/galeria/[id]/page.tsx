import ImageGallery from "@/components/gallery/imageGallery/ImageGallery";
import PageHeading from "@/components/pageHeading/PageHeading";
import galleryData from "@/data/gallery";
import Link from "next/link";

export default function GalleryImageIdPage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);
  const eventIds = galleryData.events.map((event) => event.slug);

  if (!eventIds.includes(params.id)) {
    return <div>El evento no existe</div>;
  }

  const event = galleryData.events.find((event) => event.slug === params.id);
  return (
    <div className="container">
      <PageHeading title={event?.title!} description={""} />
      <Link href="/galeria" className="btn primary">
        Regresar
      </Link>
      <ImageGallery images={event?.images!} />
    </div>
  );
}
