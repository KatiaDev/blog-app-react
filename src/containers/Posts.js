import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import PostsView from "../components/PostsView";
import SearchView from "../components/SearchView";

import { setPosts, setLoadingFlag } from "../actions/posts";
import { setError } from "../actions/error";

let Posts = (props) => {
  return (
    <>
      <SearchView />
      <PostsView posts={filteredPosts} />
    </>
  );
};

Posts.propTypes = {};
