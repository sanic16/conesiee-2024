import classes from "./simpleHeading.module.css";

interface SimpleHeadingProps {
  title: string;
  description: string | { id: number; title: string; desc: string }[];
  className: string;
}

const SimpleHeading: React.FC<SimpleHeadingProps> = ({
  title,
  description,
  className,
}) => {
  const isDescriptionArray = Array.isArray(description);
  let content = null;
  if (!isDescriptionArray) {
    content = <p className={classes.description}>{description}</p>;
  } else {
    content = (
      <ul className={classes.description__list}>
        {description.map((item) => (
          <li key={item.id} className={classes.description__item}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className={className}>
      <div>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.heading__line} />
        {content}
      </div>
    </div>
  );
};

export default SimpleHeading;
