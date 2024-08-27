import { FaSearch } from "react-icons/fa";
import classes from "./searchInput.module.css";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return (
    <div className={classes.search}>
      <form className={classes.search__form} action={actions.search}>
        <input
          type="text"
          className={classes.search__input}
          placeholder="Buscar..."
          defaultValue={searchParams.get("search") || ""}
          name="search"
        />
        <button className={classes.search__button}>
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
