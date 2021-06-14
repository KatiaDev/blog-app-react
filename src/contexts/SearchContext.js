import React, { createContext, useContext, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { useAlbums } from "./AlbumsContext";
import { usePosts } from "./PostsContext";
import { useUsers } from "./UsersContext";

export const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const { posts } = usePosts();
  const { users } = useUsers();
  const { albums } = useAlbums();

  let location = useLocation();
  let pathname = location.pathname;

  const filteredData = useMemo(() => {
    switch (pathname) {
      case "/posts":
        if (!search) {
          return posts;
        }
        return posts.filter(({ body }) => body.includes(search));

      case "/users":
        if (!search) {
          return users;
        }
        return users.filter(({ username }) => username.includes(search));

      case "/albums":
        if (!search) {
          return albums;
        }
        return albums.filter(({ title }) => title.includes(search));

      default:
        return [];
    }
  }, [albums, pathname, posts, search, users]);

  const value = {
    search,
    setSearch,
    filteredData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
