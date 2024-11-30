import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const { searchPlacesByTerm } = useContext(PlacesContext);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      console.log(event.target.value);
      await searchPlacesByTerm(event.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar lugar"
        className="form-control"
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
