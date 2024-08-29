import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import Search from "./search/Search";
import SquareRotatingLoader from "@/components/squareRotatingLoader/SquareRotatingLoader";

interface SearchPageProps {
  searchParams: {
    search: string;
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const { search } = searchParams;
  if (!search) redirect("/");

  return (
    <Suspense fallback={<SquareRotatingLoader />}>
      <Search search={search} />
    </Suspense>
  );
};

export default SearchPage;
