import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import EditNote from "./EditNote";

describe("<EditNote>", () => {
  const defaultProps = {
    onSubmit: jest.fn(),
    note: {},
    onEditModeCancel: jest.fn(),
  };

  const { getByTestId, getByRole } = render(<EditNote {...defaultProps} />);

  it("should render an EditNote container", () => {
    expect(getByTestId("edit-note-container")).toBeInTheDocument();
    expect(getByRole("heading", { name: "Edit Note" })).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Title" })).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Description" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });
});
