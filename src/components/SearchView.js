import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchButton from "./SearchButton";
import styled from "styled-components";

const InputGroup = styled.div`
  width: 75%;
  margin: 10px auto;
  display: block;
`;

const InputLabel = styled.label`
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
`;

export default function SearchView({ search, setSearch }) {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <InputGroup>
      <InputLabel htmlFor="searchInput">Search post</InputLabel>
      <Input
        ref={searchRef}
        id="searchInput"
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchButton onClick={onClick} text="Clear" />
    </InputGroup>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
