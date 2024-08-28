import Link from "next/link";
import React from "react";

interface SearchCardProps {
  title: string;
  description: string;
  link: string;
}

const SearchCard: React.FC<SearchCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <div />
      </div>
      <div>
        <p>{description}</p>
        <Link href={link} className="btn">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default SearchCard;
