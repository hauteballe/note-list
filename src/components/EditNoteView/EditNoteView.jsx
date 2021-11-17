import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

import usePresenter from "components/EditNoteView/hooks/usePresenter";

import { EditNoteHeader } from "./EditNoteHeader/EditNoteHeader";
import { EditNoteForm } from "./EditNoteForm/EditNoteForm";

const EditNoteView = ({ note, onNoteUpdate, onEditModeCancel }) => {
  const { onSubmit } = usePresenter({ note, onNoteUpdate });
  return (
    <Box p={2} pt={3}>
      <Box
        sx={{
          backgroundColor: "#d0d0d042",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <Grid item xs={12}>
            <Grid container direction="column">
              <Grid item sx={{ pb: "30px" }}>
                <Box sx={{ boxShadow: "0 4px 3px -3px #1976d2" }}>
                  <EditNoteHeader />
                </Box>
              </Grid>
              <Grid item>
                <EditNoteForm
                  onSubmit={onSubmit}
                  note={note}
                  onEditModeCancel={onEditModeCancel}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

EditNoteView.propTypes = {
  note: PropTypes.object,
  onNoteUpdate: PropTypes.func.isRequired,
};

export default EditNoteView;
