import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { ListNoteItem } from "./ListNoteItem";

describe("<ListNoteItem>", () => {
  const defaultProps = {
    onClick: jest.fn(),
    note: {
      title: "My new note",
      description: "new",
      createdAt: "2021-11-14T23:52:17.000Z",
    },
  };

  const { getByTestId } = render(<ListNoteItem {...defaultProps} />);

  it("should render a ListNoteItem container", () => {
    expect(getByTestId("note-container")).toBeInTheDocument();
  });
});
