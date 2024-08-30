import { FaSearch } from "react-icons/fa";
import classes from "./searchInput.module.css";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";
import { startTransition, useState } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    startTransition(async () => {
      await actions.search(search);
    });
  };

  return (
    <div className={classes.search}>
      <form className={classes.search__form}>
        <input
          type="text"
          className={classes.search__input}
          placeholder="Buscar..."
          // defaultValue={searchParams.get("search") || ""}
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className={classes.search__button}
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
