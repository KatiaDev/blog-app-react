import React, { useEffect } from "react";
import PostsView from "../components/PostsView";
import { usePosts } from "../contexts/PostsContext";
import { useSearch } from "../contexts/SearchContext";

export default function Posts() {
  const { fetchPosts } = usePosts();
  const { filteredData } = useSearch();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return <PostsView posts={filteredData} />;
}
