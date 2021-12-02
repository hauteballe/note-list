import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import DisplayedNote from "./DisplayedNote";

describe("<DisplayedNote>", () => {
  const defaultProps = {
    actionsEnabled: true,
    onEditMode: jest.fn(),
    onDeleteBtnClick: jest.fn(),
    note: {},
    dialogOpen: false,
    setDialogOpen: jest.fn(),
    shareNotes: jest.fn(),
  };

  const { getByTestId } = render(<DisplayedNote {...defaultProps} />);

  it("should render a Displayed Note container", () => {
    expect(getByTestId("displayed-note-container")).toBeInTheDocument();
  });
});
