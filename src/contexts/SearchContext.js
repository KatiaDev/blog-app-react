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

  const { path } = useNavigation();

  const { posts } = usePosts();
  const { users } = useUsers();
  const { albums } = useAlbums();

  const filteredData = useMemo(() => {
    switch (path) {
      case "/posts":
        if (!search) {
          return posts;
        } else {
          return posts.filter(({ body }) => body.includes(search));
        }

      case "/users":
        if (!search) {
          return users;
        } else {
          return users.filter(({ username }) => username.includes(search));
        }

      case "/albums":
        if (!search) {
          return albums;
        } else {
          return albums.filter(({ title }) => title.includes(search));
        }

      default:
        return path;
    }
  }, [albums, path, posts, search, users]);

  const value = {
    search,
    setSearch,
    filteredData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
