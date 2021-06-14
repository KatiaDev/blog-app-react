import React, { useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  const [myRoute, setMyRoute] = useState({ path: "", params: null });

  const navigateTo = (to) => () => setMyRoute(to);

  return (
    <BrowserRouter>
      <NavigationContext.Provider
        value={{
          path: myRoute.path,
          routePermissions: myRoute.permissions,
          userPermissions: ["ADMIN", "READ_POST"],
          navigateTo,
        }}
      >
        <PostsProvider>
          <UsersProvider>
            <AlbumsProvider>
              <SearchProvider>
                <Header />
                <Switch>
                  {appRoutes.map((route) => {
                    return (
                      <Route
                        key={route.title}
                        path={route.path}
                        exact={route.exact}
                        render={route.render}
                      />
                    );
                  })}
                </Switch>
              </SearchProvider>
            </AlbumsProvider>
          </UsersProvider>
        </PostsProvider>
      </NavigationContext.Provider>
    </BrowserRouter>
  );
}
