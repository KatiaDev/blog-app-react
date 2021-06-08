import React, { useCallback, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSearch } from "../contexts/SearchContext";

const InputGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const InputLabel = styled.label`
  padding: 7px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  border-radius: 5px;
`;

export default function SearchView() {
  const { search, setSearch } = useSearch();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <InputGroup>
      <InputLabel htmlFor="searchInput">Search</InputLabel>
      <Input
        ref={searchRef}
        id="searchInput"
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchButton onClick={handleClick} text="Clear" />
    </InputGroup>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

const Button = styled.button`
  border-radius: 5px;
  font-weight: bold;
  color: gray;
`;

function SearchButton({ onClick, text, type = "button" }) {
  //console.log("render searchButton");
  return <Button onClick={onClick}>{text}</Button>;
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

memo(SearchButton);
