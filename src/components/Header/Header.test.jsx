import { render } from "react-dom";
import Header from "./Header";

describe("<Header>", () => {
  let props;
  let component;

  const defaultProps = {
    onClick: jest.fn(),
    user: {
      email: "hauteballe@gmail.com",
    },
  };

  const getComponent = () => {
    component = render(Header, props);
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
