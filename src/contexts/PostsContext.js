import React, { useContext, useState, useMemo, useCallback } from "react";

export const PostsContext = React.createContext();

export function usePosts() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPosts = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = useMemo(() => {
    if (!search) {
      return posts;
    }
    return posts.filter(({ body }) => body.includes(search));
  }, [search, posts]);

  const value = {
    posts,
    filteredPosts,
    search,
    setSearch,
    fetchPosts,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
