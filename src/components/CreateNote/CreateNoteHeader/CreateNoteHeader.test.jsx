import React from "react";

import CreateNoteHeader from "./CreateNoteHeader";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("<CreateNoteHeader>", () => {
  let component;
  let props;

  const getComponent = () => {
    component = render(CreateNoteHeader, props);
  };

  const { getByTestId, getByText } = render(<CreateNoteHeader />);

  it("should render a CreateNoteHeader container", () => {
    getComponent();
    component.getByTestId("create-note-box");
  });

  it("should render text", () => {
    getComponent();
    component.getByText("Add New Note");
  });
});
