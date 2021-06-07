import React, { useContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CommentsProvider } from "../contexts/CommentsContext";
import { NavigationContext } from "../containers/Home";
import { SINGLE_POST } from "../routes";
import CommentsView from "./CommentsView";

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

const PostView = ({ id, title, body, userId, newData = false }) => {
  const [showComments, setShowComments] = useState(false);
  const [viewPost, setViewPost] = useState(null);
  const { navigateTo } = useContext(NavigationContext);

  const fetchSelectedPost = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setViewPost(data));
  }, [id]);

  const handleClick = () => {
    setShowComments(!showComments);
  };
  useEffect(() => {
    if (newData && !viewPost) {
      fetchSelectedPost();
    }
  }, [newData, viewPost, fetchSelectedPost]);
  return (
    <StyledDiv>
      {!newData ? (
        <>
          <StyledButton
            onClick={navigateTo({
              path: SINGLE_POST,
              args: { id, title, body },
            })}
          >
            Show details
          </StyledButton>
          <StyledH4>{title}</StyledH4>
          <StyledText>{body}</StyledText>
        </>
      ) : (
        <>
          <StyledH4>{viewPost?.title}</StyledH4>
          <StyledText>{viewPost?.body}</StyledText>
          <StyledButton onClick={handleClick}>Toggle comments</StyledButton>
          <CommentsProvider>
            {showComments && <CommentsView postId={id} />}
          </CommentsProvider>
        </>
      )}
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
