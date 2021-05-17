import React, { useState } from "react";
import PropTypes from "prop-types";
import Comments from "./Comments";

export default function PostView({ id, title, body, userId }) {
  const [showComments, setShowComments] = useState(false);

  const onClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h4>Title: {title}</h4>
      <p>Content: {body}</p>
      <button onClick={onClick}>Toggle comments</button>
      {showComments ? (
        <Comments showComments={showComments} postId={id} />
      ) : null}
    </div>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};
