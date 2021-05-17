import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 75%;
  margin: 10px 120px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  @media (max-width: 700px) {
    margin: 10px auto;
  }
`;

const StyledH4 = styled.h4`
  text-align: center;
`;
const StyledH5 = styled.h5`
  color: blue;
`;

const StyledText = styled.p`
  text-align: justify;
`;

export default function CommentView({ id, name, email, body }) {
  return (
    <StyledDiv>
      <StyledH4>
        <em>Name: </em> {name}
      </StyledH4>
      <StyledText>{body}</StyledText>
      <StyledH5>
        <em>email: </em>
        {email}
      </StyledH5>
    </StyledDiv>
  );
}

CommentView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};
