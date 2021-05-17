import React, { useState } from "react";
import PropTypes from "prop-types";
import CommentsView from "./CommentsView";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 95%;
  margin: 20px;
  padding: 10px;
  box-shadow: 0 0.5em 0.5em -0.2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledH4 = styled.h4`
  color: white;
  text-transform: capitalize;
`;

const StyledText = styled.p`
  font-family: "Flamenco", cursive;
  font-size: 1.3em;
  font-weight: bold;
`;

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
`;

export default function PostView({ id, title, body, userId }) {
  const [showComments, setShowComments] = useState(false);

  const onClick = () => {
    setShowComments(!showComments);
  };

  return (
    <StyledDiv style={{ textAlign: "left" }}>
      <StyledH4>{title}</StyledH4>
      <StyledText>{body}</StyledText>
      <StyledButton onClick={onClick}>Toggle comments</StyledButton>
      {showComments ? (
        <CommentsView showComments={showComments} postId={id} />
      ) : null}
    </StyledDiv>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};
