import { Grid } from "@mui/material";
import PropTypes from "prop-types";

import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";
import CreateNoteHeader from "./CreateNoteHeader/CreateNoteHeader";
import { CreateNoteBox, HeaderBox, StyledBox, Wrapper } from "./styled";

const CreateNote = ({ onSubmit, onCancelButtonClicked }) => (
  <Wrapper>
    <CreateNoteBox>
      <StyledBox>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item sx={{ pb: "30px" }}>
              <HeaderBox>
                <CreateNoteHeader />
              </HeaderBox>
            </Grid>
            <Grid item>
              <CreateNoteForm
                onSubmit={onSubmit}
                onCancelButtonClicked={onCancelButtonClicked}
              />
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </CreateNoteBox>
  </Wrapper>
);

CreateNote.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancelButtonClicked: PropTypes.func.isRequired,
};

export default CreateNote;
