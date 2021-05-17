import React, { memo } from "react";
import PropTypes from "prop-types";

function SearchButton({ onClick }) {
  console.log("render searchButton");
  return <button onClick={onClick}>Clear</button>;
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default memo(SearchButton);
