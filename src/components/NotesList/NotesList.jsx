import PropTypes from "prop-types";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import { NOTES } from "config/constants";

import NoteCard from "./NoteCard/NoteCard";

const NotesList = ({ notes, onNoteSelecting }) => {
  useEffect(() => {
    const json = JSON.stringify(NOTES);
    localStorage.setItem("notes", json);
  }, []);

  return (
    <Box>
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} onClick={onNoteSelecting(note)} />
      ))}
    </Box>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  note: PropTypes.object,
  onNoteSelecting: PropTypes.func.isRequired,
};

export default NotesList;
