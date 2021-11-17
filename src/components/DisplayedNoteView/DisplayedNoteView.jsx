import { Typography, IconButton, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import PropTypes from "prop-types";

import usePresenter from "components/CreateNote/hooks/usePresenter";

import { FormDialog } from "./FormDialog/FormDialog";

const DisplayedNoteView = ({
  note,
  onEditMode,
  onDeleteBtnClick,
  actionsEnabled = true,
}) => {
  const { dialogOpen, setDialogOpen, shareNotes } = usePresenter({ note });

  return (
    <Box p={2}>
      <Box
        sx={{
          backgroundColor: "#d0d0d042",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <Box px="10px">
          <Box
            sx={{
              padding: "10px",
              height: "40px",
              boxShadow: "0 4px 3px -3px #1976d2",
            }}
          >
            <Grid container alignContent="center" justifyContent="flex-end">
              {actionsEnabled && (
                <>
                  <IconButton onClick={onEditMode}>
                    <ModeEditIcon />
                  </IconButton>

                  <IconButton onClick={() => onDeleteBtnClick(note)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => setDialogOpen(true)}>
                    <ShareIcon />
                  </IconButton>
                </>
              )}

              {dialogOpen && (
                <FormDialog
                  dialogOpen={dialogOpen}
                  setDialogOpen={setDialogOpen}
                  shareNotes={shareNotes}
                />
              )}
            </Grid>
          </Box>
        </Box>
        <Box p={4}>
          <Typography variant="h4">{note.title}</Typography>
          <Typography>{note.description}</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            {new Date(note.createdAt).toDateString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

DisplayedNoteView.propTypes = {
  note: PropTypes.object,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default DisplayedNoteView;
