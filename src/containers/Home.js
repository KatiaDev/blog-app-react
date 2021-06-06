import React, { useState } from "react";
import Header from "./Header";
import appRoutes from "../../src/routes";

export default function Home({ permissions }) {
  const [route, setRoute] = useState("");

  const navigateTo = (to) => () => setRoute(to);

  const renderBasedOnPath = () => {
    const activeRoute = appRoutes.find((r) => r.path === route);

    return activeRoute?.render() || "Not Found";
  };

  return (
    <>
      <Header userPermissions={permissions} navigateTo={navigateTo} />
      {renderBasedOnPath()}
    </>
  );
}
