import React from "react";
import SearchCard from "./SearchCard";
import { searchRoutes } from "@/queries/search";
import classes from "./search.module.css";

interface SearchProps {
  search: string;
}

const Search: React.FC<SearchProps> = async ({ search }) => {
  const searchResult = await searchRoutes(search);
  if (searchResult.length === 0)
    return (
      <section className={`container ${classes.container}`}>
        <h2>No se encontraron resultados para la búsqueda: {search}</h2>
      </section>
    );

  return (
    <section className={`container ${classes.container}`}>
      {searchResult.map((result) => (
        <SearchCard
          key={result.id}
          title={result.title}
          description={result.description}
          link={result.path}
        />
      ))}
    </section>
  );
};

export default Search;
