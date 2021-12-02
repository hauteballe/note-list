import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import NotesList from "./NotesList";

describe("<NotesList>", () => {
  const defaultProps = {
    filterEnabled: true,
    setFilterMode: jest.fn(),
    filterMode: false,
    filterNotes: jest.fn(),
    resetFilterNotes: jest.fn(),
    notes: [],
    onDragEnd: jest.fn(),
  };

  const { getByTestId, queryByTestId } = render(
    <NotesList {...defaultProps} />
  );

  it("should render a NotesList container", () => {
    expect(getByTestId("notes-list-box")).toBeInTheDocument();
  });

  it("shouldn't render a filter section", () => {
    expect(queryByTestId("filter-box")).toBeNull();
  });
});
