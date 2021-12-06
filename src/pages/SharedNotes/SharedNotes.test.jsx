import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "store";

import SharedNotes from "./SharedNotes";

describe("<SharedNotes>", () => {
  const defaultProps = {
    loadingNotes: true,
    sharedNotes: [],
    setSharedNotes: jest.fn(),
    selectNote: jest.fn(),
    hasMoreNotes: true,
    fetchMoreNotes: jest.fn(),
    fetchSharedNotes: jest.fn(),
    getView: jest.fn(),
  };

  const { getByTestId, getByRole } = render(
    <Provider store={store}>
      <BrowserRouter>
        <SharedNotes {...defaultProps} />
      </BrowserRouter>
    </Provider>
  );

  it("should render an EditNote container", () => {
    expect(getByTestId("shared-notes-container")).toBeInTheDocument();
    expect(getByRole("link", { name: "MY NOTES" })).toBeInTheDocument();
    expect(getByRole("link", { name: "SHARED NOTES" })).toBeInTheDocument();
    expect(getByRole("link", { name: "ABOUT" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Sign In" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });
});
