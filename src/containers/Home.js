import React, { useState, createContext, useContext } from "react";
import Header from "./Header";
import appRoutes from "../../src/routes";
import { SearchProvider } from "../contexts/SearchContext";
import { PostsProvider } from "../contexts/PostsContext";
import { UsersProvider } from "../contexts/UsersContext";
import { AlbumsProvider } from "../contexts/AlbumsContext";

export const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export default function Home() {
  const [route, setRoute] = useState({ path: "", params: null });

  const navigateTo = (to) => () => setRoute(to);

  const renderBasedOnPath = () => {
    const activeRoute = appRoutes.find((r) => r.path === route.path);

    return activeRoute.render(route.params);
  };

  return (
    <NavigationContext.Provider
      value={{
        path: route.path,
        routePermissions: route.permissions,
        userPermissions: ["ADMIN", "READ_POST"],
        navigateTo,
      }}
    >
      <PostsProvider>
        <UsersProvider>
          <AlbumsProvider>
            <SearchProvider>
              <Header />
              {renderBasedOnPath()}
            </SearchProvider>
          </AlbumsProvider>
        </UsersProvider>
      </PostsProvider>
    </NavigationContext.Provider>
  );
}
