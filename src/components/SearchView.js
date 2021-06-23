import React, { useCallback, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import { useSearch } from "../contexts/SearchContext";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonFontSize: {
    fontSize: "11px",
    color: "#a1a1a1",
  },
  inputFontSize: {
    fontSize: "8px",
  },
}));

export default function SearchView() {
  const classes = useStyles();
  const { search, setSearch } = useSearch();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <div className={classes.root}>
      <TextField
        ref={searchRef}
        id="outlined-helperText"
        label="Search"
        variant="outlined"
        size="small"
        className={classes.inputFontSize}
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchButton onClick={handleClick} text="Clear" />
    </div>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

function SearchButton({ onClick, text }) {
  const classes = useStyles();
  //console.log("render searchButton");
  return (
    <Button
      className={classes.buttonFontSize}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

memo(SearchButton);
