import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { AddCard, StyledBox } from "./styled";

const AddNotePanel = ({ closeAddNotePanel, onSubmit }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    date: "",
  });
  const submitAddNotePanel = () => {
    onSubmit(note.title, note.description);
    closeAddNotePanel();
  };

  return (
    <AddCard>
      <Typography
        sx={{ fontSize: "14px", textAlign: "center", padding: "10px 0" }}
      >
        Add a new note
      </Typography>
      <TextField
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        sx={{ width: "250px", margin: "10px auto" }}
        autoFocus
        id="title"
        label="Title"
        type="text"
        margin="dense"
        fullWidth
      />
      <TextField
        onChange={(e) => setNote({ ...note, description: e.target.value })}
        sx={{ width: "250px", margin: "10px auto" }}
        multiline
        id="description"
        label="Description"
        type="text"
        margin="dense"
        fullWidth
      />
      <StyledBox>
        <Button onClick={submitAddNotePanel}>Add</Button>
        <Button onClick={closeAddNotePanel}>Cancel</Button>
      </StyledBox>
    </AddCard>
  );
};

export default AddNotePanel;
