import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

describe("<Header>", () => {
  let props;
  let component;
  const headerProps = {
    onclick: jest.fn(),
    user: {
      email: "hauteballe@gmail.com",
    },
  };
  const { getByTestId } = render(
    <BrowserRouter>
      <Header {...headerProps} />)
    </BrowserRouter>
  );

  it("test that component renders correctly", () => {
    expect(getByTestId("header-appbar")).toBeInTheDocument();
  });

  const defaultProps = {
    onClick: jest.fn(),
    user: {
      email: "hauteballe@gmail.com",
    },
  };

  const getComponent = () => {
    component = render(<Header {...props} />);
  };

  beforeEach(() => {
    props = {
      ...defaultProps,
    };
  });

  it("should render a header appbar", () => {
    getComponent();
    component.getByTestId("header-appbar");
  });
});
