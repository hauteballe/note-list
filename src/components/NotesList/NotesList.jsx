import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import NoteCard from "./NoteCard/NoteCard";

const NotesList = ({ notes, onNoteSelecting }) => {
  return (
    <Box>
      {notes.map((note, key) => (
        <NoteCard note={note} key={key} onClick={onNoteSelecting(note)} />
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