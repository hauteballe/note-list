import { useState } from "react";
import PropTypes from "prop-types";
import { Button, CardContent, TextField } from "@mui/material";

import { ButtonsBox, EditBox, EditCard, SaveButton } from "./styled";

const EditView = ({ note, onCancel, onNoteUpdate }) => {
  const [editNote, setEditNote] = useState(note);

  const onChange = (ev) => {
    setEditNote({ ...editNote, [ev.target.name]: ev.target.value });
  };

  const onSave = () => {
    onNoteUpdate(editNote);
    onCancel();
  };

  return (
    <EditCard>
      <CardContent>
        <EditBox component="form">
          <TextField
            id="outlined-required"
            name="title"
            value={editNote.title}
            onChange={onChange}
            sx={{ maxWidth: "800px", p: "10px" }}
          />
          <TextField
            id="outlined-required"
            name="description"
            value={editNote.description}
            onChange={onChange}
            sx={{ maxWidth: "800px", p: "10px" }}
          />
          <ButtonsBox>
            <SaveButton onClick={onSave} variant="text">
              Save
            </SaveButton>
            <Button variant="text" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonsBox>
        </EditBox>
      </CardContent>
    </EditCard>
  );
};

EditView.propTypes = {
  note: PropTypes.object,
  onCancel: PropTypes.func,
  onNoteUpdate: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
};

export default EditView;
