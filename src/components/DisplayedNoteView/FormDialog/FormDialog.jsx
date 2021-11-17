import { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

import authApi from "api/auth";

export const FormDialog = ({ dialogOpen, setDialogOpen, shareNotes }) => {
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

FormDialog.propTypes = {
  dialogOpen: PropTypes.bool.isRequired,
  setDialogOpen: PropTypes.func.isRequired,
  shareNotes: PropTypes.func.isRequired,
};
