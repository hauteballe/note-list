import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";
import CreateNoteHeader from "./CreateNoteHeader/CreateNoteHader";
import usePresenter from "./hooks/usePresenter";

const CreateNoteView = ({ onNoteAdd, onCancelButtonClicked }) => {
  const { onSubmit } = usePresenter({ onNoteAdd });

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
                  <CreateNoteHeader />
                </Box>
              </Grid>
              <Grid item>
                <CreateNoteForm
                  onSubmit={onSubmit}
                  onCancelButtonClicked={onCancelButtonClicked}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

CreateNoteView.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
  values: PropTypes.object,
};

export default CreateNoteView;
