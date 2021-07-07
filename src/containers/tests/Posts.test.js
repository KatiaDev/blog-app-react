import { render, screen } from "@testing-library/react";
import Posts from "../Posts";
import { SearchProvider } from "../../contexts/SearchContext";
import { PostsProvider } from "../../contexts/PostsContext";
import { UsersProvider } from "../../contexts/UsersContext";
import { AlbumsProvider } from "../../contexts/AlbumsContext";
import renderer from "react-test-renderer";

describe("Posts component", () => {
  it("should match snapshot", () => {
    const postsList = renderer
      .create(
        <PostsProvider>
          <UsersProvider>
            <AlbumsProvider>
              <SearchProvider>
                <Posts />
              </SearchProvider>
            </AlbumsProvider>
          </UsersProvider>
        </PostsProvider>
      )
      .toJSON();
    expect(postsList).toMatchSnapshot();
  });
});
