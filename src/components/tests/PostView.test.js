import React from "react";
import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import PostView from "../PostView";

const defaultProps = {
  onClick: jest.fn(),
};

describe("Toggle Button", () => {
  it("should call onClick event", () => {
    const { debug, getByTestId } = render(<PostView />);
    debug();
    const toggleBtn = getByTestId("toggleButton-element");
    const commentsList = getAllByTestId("commentsList-element");

    expect(commentsList).not.toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    expect(commentsList).toBeInTheDocument();
  });
});
