import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import CreateNote from "./CreateNote";

describe("<CreateNote>", () => {
  const defaultProps = {
    onSubmit: jest.fn(),
    onCancelButtonClicked: jest.fn(),
  };

  const { getByTestId, getByRole } = render(<CreateNote {...defaultProps} />);

  it("should render a Create Note container", () => {
    expect(getByTestId("create-note-container")).toBeInTheDocument();
    expect(getByRole("heading", { name: "Add New Note" })).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Note Title" })).toBeInTheDocument();
    expect(
      getByRole("textbox", { name: "Note Description" })
    ).toBeInTheDocument();
    expect(getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });
});
