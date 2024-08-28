import { searchRoutes } from "@/queries/search";
import { redirect } from "next/navigation";
import React from "react";
import SearchCard from "./SearchCard";

interface SearchPageProps {
  searchParams: {
    search: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const { search } = searchParams;
  if (!search) redirect("/");
  const searchResult = await searchRoutes(search);

  if (searchResult.length === 0)
    return (
      <div>
        <h2>No se encontraron resultados para la búsqueda: {search}</h2>
      </div>
    );

  return (
    <div className="container">
      {searchResult.map((result) => (
        <SearchCard
          key={result.id}
          title={result.title}
          description={result.description}
          link={result.path}
        />
      ))}
    </div>
  );
};

export default SearchPage;
