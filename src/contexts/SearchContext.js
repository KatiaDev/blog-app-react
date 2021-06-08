import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigation } from "../containers/Home";
import { useAlbums } from "./AlbumsContext";
import { usePosts } from "./PostsContext";
import { useUsers } from "./UsersContext";

export const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const { path } = useNavigation();

  const { posts } = usePosts();
  const { users } = useUsers();
  const { albums } = useAlbums();

  const filteredPosts = useMemo(() => {
    if (search) return posts.filter(({ body }) => body.includes(search));
  }, [search, posts]);

  const filteredUsers = useMemo(() => {
    if (search)
      return users.filter(({ username }) => username.includes(search));
  }, [search, users]);

  const filteredAlbums = useMemo(() => {
    if (search) return albums.filter(({ title }) => title.includes(search));
  }, [search, albums]);

  switch (path) {
    case "/posts":
      return setFiltered(filteredPosts);
    case "/users":
      return setFiltered(filteredUsers);
    case "/albums":
      return setFiltered(filteredAlbums);

    default:
      setFiltered([]);
  }

  const value = {
    search,
    setSearch,
    filtered,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
