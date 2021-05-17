import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Comments({ showComments, postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data));
    fetchComments();
  }, [postId]);

  return (
    <div style={{ textAlign: "center" }}>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h4>Name: {comment.name}</h4>
            <h4>email: {comment.email}</h4>
            <p>Comment: {comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

Comments.propTypes = {
  showComments: PropTypes.bool,
  postId: PropTypes.number,
};
