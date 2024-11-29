import { ChangeEvent, useRef } from "react";

export const SearchBar = () => {
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      console.log(event.target.value);
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
    </div>
  );
};
