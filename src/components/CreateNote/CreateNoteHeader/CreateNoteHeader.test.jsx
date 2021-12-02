import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import CreateNoteHeader from "./CreateNoteHeader";

describe("<CreateNoteHeader>", () => {
  const { getByTestId } = render(<CreateNoteHeader />);

  it("should render a CreateNoteHeader container", () => {
    expect(getByTestId("create-note-box")).toBeInTheDocument();
  });
});
