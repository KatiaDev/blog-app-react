import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentView from "./CommentView";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: left;
`;

export default function CommentsView({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data));
    fetchComments();
  }, [postId]);

  return (
    <StyledDiv>
      {comments.map((comment) => (
        <CommentView key={comment.id} {...comment} />
      ))}
    </StyledDiv>
  );
}

CommentsView.propTypes = {
  showComments: PropTypes.bool,
  postId: PropTypes.number,
};
