import React, { useState, useEffect, useMemo } from "react";
import PostsView from "../components/PostsView";
import SearchView from "../components/SearchView";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

  useEffect(() => {
    //debugger;
    if (!searchParam) {
      fetchPosts();
    }
  }, [searchParam]);

  const filteredPosts = useMemo(() => {
    if (!searchParam) {
      return posts;
    }
    return posts.filter(({ body }) => body.includes(searchParam));
  }, [searchParam, posts]);

  return (
    <>
      <SearchView search={searchParam} setSearch={setSearchParam} />
      <PostsView posts={filteredPosts} />
    </>
  );
}

Posts.propTypes = {};
