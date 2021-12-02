import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "store";

import MyNotes from "./MyNotes";

describe("<MyNotes>", () => {
  const defaultProps = {
    loadingNotes: true,
    notes: [],
    setNotes: jest.fn(),
    selectNote: jest.fn(),
    hasMoreNotes: true,
    fetchMoreNotes: jest.fn(),
    fetchFilteredNotes: jest.fn(),
    getView: jest.fn(),
    setViewType: jest.fn(),
  };

  const { getByTestId, getByRole } = render(
    <Provider store={store}>
      <BrowserRouter>
        <MyNotes {...defaultProps} />
      </BrowserRouter>
    </Provider>
  );

  it("should render an EditNote container", () => {
    expect(getByTestId("my-notes-container")).toBeInTheDocument();
    expect(getByRole("link", { name: "MY NOTES" })).toBeInTheDocument();
    expect(getByRole("link", { name: "SHARED NOTES" })).toBeInTheDocument();
    expect(getByRole("link", { name: "ABOUT" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Sign In" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });
});
