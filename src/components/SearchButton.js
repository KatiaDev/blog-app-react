import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: gray;
`;

function SearchButton({ onClick, text, type = "button" }) {
  console.log("render searchButton");
  return <Button onClick={onClick}>{text}</Button>;
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default memo(SearchButton);
