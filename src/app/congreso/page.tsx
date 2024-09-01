import BannerCongress from "@/components/bannerCongress/BannerCongress";
import CongressList from "./_congress-list/CongressList";

export default function CongressPage() {
  return (
    <>
      <BannerCongress
        title="Congreso"
        description="Descubre el itinerario del congreso y planifica tu participación."
        image="conesiee/congress/bi6d9fsfvheqrnsmntwj"
      />
      <section className="container">
        <p>
          El congreso de CONESIEE es un evento anual que reúne a estudiantes y
          profesionales de la ingeniería eléctrica y electrónica de todo el país
          para compartir conocimientos y experiencias. En esta sección podrás
          encontrar el itinerario del congreso, las conferencias y talleres que
          se llevarán a cabo.
        </p>
        <CongressList />
      </section>
    </>
  );
}
