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

const PostView = ({ id, title, body }) => {
  const [showComments, setShowComments] = useState(false);

  const handleClick = () => {
    setShowComments(!showComments);
  };

  return (
    <StyledDiv>
      <StyledH4>{title}</StyledH4>
      <StyledText>{body}</StyledText>
      <StyledButton onClick={handleClick}>Toggle comments</StyledButton>
      {showComments && <CommentsView postId={id} />}
    </StyledDiv>
  );
};

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};

export default PostView;
