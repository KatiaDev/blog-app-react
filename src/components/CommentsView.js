import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CommentView from "./CommentView";

import { setComments, setLoadingComments } from "../actions/comments";
import { setError } from "../actions/error";

import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: left;
`;

let CommentsView = ({
  comments,
  error,
  isLoading,
  postId,
  dispatchSetComments,
  dispatchSetError,
  dispatchSetLoading,
}) => {
  const fetchComments = () => {
    dispatchSetLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        dispatchSetComments(data);
        dispatchSetLoading(false);
      })
      .catch((error) => {
        dispatchSetError(error);
      });
  };
  useEffect(() => {
    if (!isLoading) {
      fetchComments();
    }
  }, [isLoading]);

  return (
    <StyledDiv>
      {isLoading && <div>Pagina se incarca!</div>}
      {comments.comments.map((comment) => (
        <CommentView key={comment.id} {...comment} />
      ))}
      {error?.message && <div>{error.message}</div>}
    </StyledDiv>
  );
};

CommentsView.propTypes = {
  showComments: PropTypes.bool,
  postId: PropTypes.number,
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    comments: state.comments,
    error: state.error,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  dispatchSetComments: setComments,
  dispatchSetLoading: setLoadingComments,
  dispatchSetError: setError,
};

CommentsView = connect(mapStateToProps, mapDispatchToProps)(CommentsView);
export default CommentsView;
