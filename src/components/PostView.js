import React, { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CommentsProvider } from "../contexts/CommentsContext";
import { useNavigation } from "../containers/Home";
import CommentsView from "./CommentsView";

import PropTypes from "prop-types";
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

const PostView = ({ id, title, body, userId, newData }) => {
  const [showComments, setShowComments] = useState(false);
  const [newPost, setNewPost] = useState(null);
  const { userPermissions } = useNavigation();

  let location = useLocation();
  let params = useParams();
  const { state } = location;

  const fetchNewPost = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params?.idPost}`)
      .then((response) => response.json())
      .then((data) => setNewPost(data));
  }, [params?.idPost]);

  const handleClick = () => {
    setShowComments(!showComments);
  };
  useEffect(() => {
    if (params?.idPost) {
      fetchNewPost();
    }
  }, [params?.idPost, fetchNewPost]);

  const restrict = userPermissions.find(
    (permission) => permission === "READ_POST"
  );

  return (
    <StyledDiv>
      {!newData ? (
        <>
          <StyledH4>{title}</StyledH4>
          <StyledText>{body}</StyledText>

          {restrict && (
            <Link to={{ pathname: `/posts/${id}`, state: { title, body, id } }}>
              <StyledButton>Show details</StyledButton>
            </Link>
          )}
        </>
      ) : (
        <>
          <StyledH4>{state?.title || newPost?.title}</StyledH4>
          <StyledText>{state?.body || newPost?.body}</StyledText>
          <StyledButton onClick={handleClick}>Toggle comments</StyledButton>
          <CommentsProvider>
            {showComments && <CommentsView postId={newPost?.id || state?.id} />}
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
