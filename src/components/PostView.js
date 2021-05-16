import React from "react";
import PropTypes from "prop-types";

export default function PostView({ id, title, body, userId }) {
  return (
    <div style={{ textAlign: "left" }}>
      <h4>Title: {title}</h4>
      <p>Content: {body}</p>
    </div>
  );
}

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};
