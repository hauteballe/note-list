import { Grid } from "@mui/material";
import PropTypes from "prop-types";

import { EditNoteForm } from "./EditNoteForm/EditNoteForm";
import { EditNoteHeader } from "./EditNoteHeader/EditNoteHeader";
import {
  EditHeaderBox,
  InnerWrapper,
  StyledBox,
  StyledGrid,
  Wrapper,
} from "./styled";

const EditNote = ({ onSubmit, note, onEditModeCancel }) => (
  <Wrapper>
    <StyledBox>
      <InnerWrapper>
        <Grid item xs={12}>
          <Grid container direction="column">
            <StyledGrid item>
              <EditHeaderBox>
                <EditNoteHeader />
              </EditHeaderBox>
            </StyledGrid>
            <Grid item>
              <EditNoteForm
                onSubmit={onSubmit}
                note={note}
                onEditModeCancel={onEditModeCancel}
              />
            </Grid>
          </Grid>
        </Grid>
      </InnerWrapper>
    </StyledBox>
  </Wrapper>
);

EditNote.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onEditModeCancel: PropTypes.func.isRequired,
  note: PropTypes.object,
};

export default EditNote;
