import React from "react";
import PostView from "./PostView";
import PropTypes from "prop-types";

export default function PostsView({ posts }) {
  return (
    <div style={{ padding: 16 }}>
      {posts.map((post) => (
        <PostView key={post.id} {...post} />
      ))}
    </div>
  );
}

PostsView.propTypes = {
  posts: PropTypes.array.isRequired,
};
