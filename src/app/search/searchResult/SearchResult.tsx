import SearchCard from "../searchCard/SearchCard";
import classes from "./searchResult.module.css";

interface SearchResultProps {
  searchResult: {
    id: string;
    title: string;
    description: string;
    path: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  search: string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchResult,
  search,
}) => {
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

export default SearchResult;
