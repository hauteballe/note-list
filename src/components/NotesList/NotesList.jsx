import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { NOTES } from "config/constants";

import NoteCard from "./NoteCard/NoteCard";
import NotesActionsPanel from "./NotesActionsPanel/NotesActionsPanel";
import AddNotePanel from "./NotesActionsPanel/AddNotePanel/AddNotePanel";

const NotesList = ({
  notes,
  onNoteSelecting,
  openAddNotePanel,
  isAddNotePanelOpen,
  closeAddNotePanel,
  handleAddNote,
}) => {
  useEffect(() => {
    const json = JSON.stringify(NOTES);
    localStorage.setItem("notes", json);
  }, []);

  return (
    <Box>
      <NotesActionsPanel openAddNotePanel={openAddNotePanel} />
      {isAddNotePanelOpen && (
        <AddNotePanel
          closeAddNotePanel={closeAddNotePanel}
          onSubmit={handleAddNote}
        />
      )}
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
