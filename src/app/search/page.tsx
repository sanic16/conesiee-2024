import { redirect } from "next/navigation";
import React from "react";

interface SearchPageProps {
  searchParams: {
    search: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  const { search } = searchParams;
  if (!search) redirect("/");
  return <div className="container">{searchParams.search}</div>;
};

export default SearchPage;
