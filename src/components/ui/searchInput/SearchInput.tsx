import { FaSearch } from "react-icons/fa";
import classes from "./searchInput.module.css";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";
import { useTransition, useState } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;
    startTransition(async () => {
      await actions.search(search);
    });
  };

  return (
    <div className={`${classes.search} ${pending && classes.pending}`}>
      <form className={classes.search__form} onSubmit={onSubmit}>
        <input
          type="text"
          className={classes.search__input}
          placeholder="Buscar..."
          // defaultValue={searchParams.get("search") || ""}
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={pending} className={classes.search__button}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
