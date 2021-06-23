import React from "react";
import PostView from "./PostView";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

export default function PostsView({ posts }) {
  return (
    <Container>
      {posts.map((post) => (
        <PostView key={post.id} {...post} newData={false} />
      ))}
    </Container>
  );
}

PostsView.propTypes = {
  posts: PropTypes.array.isRequired,
};
