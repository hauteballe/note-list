import Header from "components/Header/Header";

import { SharedNotesText, StyledBox } from "./styled";

const SharedNotes = () => (
  <StyledBox>
    <Header />
    <SharedNotesText variant="h5" component="div">
      There will be shared notes
    </SharedNotesText>
  </StyledBox>
);

export default SharedNotes;
