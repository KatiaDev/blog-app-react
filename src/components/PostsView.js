import React from "react";
import PostView from "./PostView";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 16px;
`;

export default function PostsView({ posts }) {
  return (
    <StyledDiv>
      {posts.map((post) => (
        <PostView key={post.id} {...post} newData={false} />
      ))}
    </StyledDiv>
  );
}

PostsView.propTypes = {
  posts: PropTypes.array.isRequired,
};
