import {
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  DialogActions,
  Autocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

import authApi from "api/auth";
import notesApi from "api/notes";

const FormDialog = ({ dialogOpen, setDialogOpen, shareNotes }) => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    const response = await authApi.getUsersList();
    if (response.ok) {
      setUsersData(response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [selectedEmails, setSelectedEmails] = useState([]);
  return (
    <div>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Share your notes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To share your notes, please enter emails of users to share the note
            with.
          </DialogContentText>
          <Autocomplete
            multiple
            onChange={(event, newValue) => {
              setSelectedEmails(newValue);
            }}
            id="tags-standard"
            options={usersData}
            getOptionLabel={(option) => option.email}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Email to share with"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={() => shareNotes(selectedEmails)}>Share</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const DisplayedNoteView = ({ note, onEditMode, onDeleteBtnClick }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const shareNotes = async (usersData) => {
    const data = {
      users: usersData.map((user) => user.email),
    };
    const response = await notesApi.shareNote(note.id, data);
    if (response.ok) {
      setDialogOpen(false);
    } else {
      enqueueSnackbar(response.error, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        ),
      });
    }
  };

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
              <IconButton onClick={onEditMode}>
                <ModeEditIcon />
              </IconButton>
              <IconButton onClick={() => onDeleteBtnClick(note)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => setDialogOpen(true)}>
                <ShareIcon />
              </IconButton>
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

FormDialog.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  setDialogOpen: PropTypes.func.isRequired,
  shareNotes: PropTypes.func.isRequired,
};

DisplayedNoteView.propTypes = {
  note: PropTypes.object,
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default DisplayedNoteView;
