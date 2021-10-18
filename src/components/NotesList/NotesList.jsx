import React from "react";
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

export default NotesList;
