import React, { useState, createContext } from "react";
import Header from "./Header";
import appRoutes from "../../src/routes";

export const NavigationContext = createContext();

export default function Home({ permissions }) {
  const [route, setRoute] = useState({path:"", args: null});

  const navigateTo = (to) => () => setRoute(to);

  const renderBasedOnPath = () => {
    const activeRoute = appRoutes.find((r) => r.path === route.path);

    return activeRoute.render(route.args);
  };

  return (
   
    <NavigationContext.Provider value={{path: route.path, navigateTo}}  >
      <Header userPermissions={permissions} navigateTo={navigateTo} />
      {renderBasedOnPath()}
      </NavigationContext.Provider>
    
  );
}
