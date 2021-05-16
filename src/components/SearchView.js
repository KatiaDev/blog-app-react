import React from "react";
import PropTypes from "prop-types";

export default function SearchView({ search, setSearch }) {
  return (
    <div>
      <label htmlFor="searchInput">Search post</label>
      <input
        id="searchInput"
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <button onClick={() => setSearch("")}>Clear</button>
    </div>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
