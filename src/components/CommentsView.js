import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CommentView from "./CommentView";
import { Container } from "@material-ui/core";
import { useComments } from "../contexts/CommentsContext";

export default function CommentsView({ postId }) {
  const { comments, fetchComments } = useComments();
  //const mountedRef = useRef(true);

  useEffect(() => {
    fetchComments(postId);
    /*return () => {
      mountedRef.current = false;
    };*/
  }, [postId, fetchComments]);

  return (
    <Container>
      {comments.map((comment) => (
        <CommentView key={comment.id} {...comment} />
      ))}
    </Container>
  );
}

CommentsView.propTypes = {
  showComments: PropTypes.bool,
  postId: PropTypes.number,
};
