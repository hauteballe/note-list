import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import FormDialog from "./FormDialog";

describe("<FormDialog>", () => {
  const defaultProps = {
    dialogOpen: false,
    setDialogOpen: jest.fn(),
    setSelectedEmails: jest.fn(),
    shareNotes: jest.fn(),
    selectedEmails: [],
  };

  const { getByTestId, getByRole } = render(<FormDialog {...defaultProps} />);

  it("should render a Displayed Note container", () => {
    expect(getByTestId("formdialog-wrapper")).toBeInTheDocument();
  });
});
