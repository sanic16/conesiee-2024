import classes from "./page.module.css";
import Sponsor from "./Sponsor";
import sponsors from "@/data/sponsors";

const Sponsors = () => {
  return (
    <div className={classes.sponsors}>
      {sponsors.map((sponsor) => (
        <Sponsor
          key={sponsor.name}
          name={sponsor.name}
          description={sponsor.description}
          logo={sponsor.logo}
          website={sponsor.website}
          category={sponsor.category}
          contribution={sponsor.contribution}
        />
      ))}
    </div>
  );
};

export default Sponsors;
