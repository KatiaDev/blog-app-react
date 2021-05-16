import React, { useState, useEffect } from "react";
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
    fetchPosts();
  }, []);

  useEffect(() => {
    //debugger;
    if (!searchParam) {
      fetchPosts();
    } else {
      const filteredPosts = posts.filter(({ body }) =>
        body.includes(searchParam)
      );
      setPosts(filteredPosts);
    }
  }, [searchParam]);

  return (
    <>
      {" "}
      <SearchView search={searchParam} setSearch={setSearchParam} />
      <PostsView posts={posts} />
    </>
  );
}

Posts.propTypes = {};
