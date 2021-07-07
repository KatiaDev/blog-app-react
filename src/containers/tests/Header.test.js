import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { NavigationContext } from "../Home";
import { SearchProvider } from "../../contexts/SearchContext";
import Header from "../Header";

describe("Header component", () => {
  it("should render the corect snapshot", () => {
    const tree = renderer
      .create(
        <NavigationContext.Provider
          value={{
            userPermissions: ["ADMIN", "READ_POST"],
          }}
        >
          <SearchProvider>
            <Header />
          </SearchProvider>
        </NavigationContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
