import React, { useEffect } from "react";
import PostsView from "../components/PostsView";
import SearchView from "../components/SearchView";
import { usePosts } from "../contexts/PostsContext";

export default function Posts() {
  const { filteredPosts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <SearchView />
      <PostsView posts={filteredPosts} />
    </>
  );
}

Posts.propTypes = {};
