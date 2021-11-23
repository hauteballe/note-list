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

const FormDialog = ({
  dialogOpen,
  setDialogOpen,
  setSelectedEmails,
  usersData,
  shareNotes,
  selectedEmails,
}) => (
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

export default FormDialog;
