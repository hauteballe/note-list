// import { render } from "react-dom";
// import ListNoteItem from "./ListNoteItem";
// import { formatDate } from "../../../utils/formatDate";

// describe("<ListNoteItem>", () => {
//   let props;
//   let component;

//   const defaultProps = {
//     onClick: jest.fn(),
//     note: {
//       title: "My new note",
//       description: "new",
//       createdAt: "2021-11-14T23:52:17.000Z",
//     },
//   };

//   const getComponent = () => {
//     component = render(ListNoteItem, props);
//   };

//   beforeEach(() => {
//     props = {
//       ...defaultProps,
//     };
//   });
//   afterEach(tearDown);

//   it("should render a ListNote container", () => {
//     getComponent();
//     component.getByTestId("list-note-container");
//   });
// });
