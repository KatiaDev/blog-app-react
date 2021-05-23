import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CommentView from "./CommentView";
import styled from "styled-components";
import { useComments } from "../contexts/CommentsContext";

const StyledDiv = styled.div`
  text-align: left;
`;

export default function CommentsView({ postId }) {
  const { comments, fetchComments } = useComments();

  useEffect(() => {
    fetchComments(postId);
  }, [postId, fetchComments]);

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
