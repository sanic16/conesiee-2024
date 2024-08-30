import React from "react";
import { searchRoutes } from "@/queries/search";
import SearchResult from "../searchResult/SearchResult";

interface SearchProps {
  search: string;
}

const Search: React.FC<SearchProps> = async ({ search }) => {
  const searchResult = await searchRoutes(search);
  return <SearchResult searchResult={searchResult} search={search} />;
};

export default Search;
