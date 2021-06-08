import React, { useEffect } from "react";
import PostsView from "../components/PostsView";
import { usePosts } from "../contexts/PostsContext";
import { useSearch } from "../contexts/SearchContext";

export default function Posts() {
  const { posts, fetchPosts } = usePosts();
  const { filtered } = useSearch();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const postsList = () => {
    if (filtered) {
      return <PostsView posts={filtered} />;
    }
    return <PostsView posts={posts} />;
  };

  return <>{postsList}</>;
}

Posts.propTypes = {};
