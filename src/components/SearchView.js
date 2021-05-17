import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchButton from "./SearchButton";

export default function SearchView({ search, setSearch }) {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <div>
      <label htmlFor="searchInput">Search post</label>
      <input
        ref={searchRef}
        id="searchInput"
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchButton onClick={onClick} />
    </div>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
