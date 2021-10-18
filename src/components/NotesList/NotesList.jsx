import React from "react";
import PropTypes from 'prop-types';

import Box from "@mui/material/Box";

import NoteCard from "./NoteCard/NoteCard";

function NotesList({ notes, onNoteSelecting }) {
  return (
    <Box>
      {notes.map((note) => (
        <NoteCard note={note} onClick={onNoteSelecting(note)} />
      ))}
    </Box>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  note: PropTypes.object,
  onNoteSelecting: PropTypes.func.isRequired,
};


export default NotesList;
