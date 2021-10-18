import React from "react";
import { useState } from "react";

import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import SelectedNote from "../../components/SelectedNote/SelectedNote";
import NotesList from "../../components/NotesList/NotesList";
import { NOTES } from "../../config/constants";

function MyNotes() {
  const [selectedNote, setSelectedNote] = useState(null);

  const onNoteSelecting = (note) => () => {
    setSelectedNote(note);
  };
  return (
    <Box sx={{ bgcolor: "grey.800", color: "info.main" }}>
      <Header />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={3}>
          <NotesList notes={NOTES} onNoteSelecting={onNoteSelecting} />
        </Grid>
        <Grid item xs={13}>
          <SelectedNote note={selectedNote} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyNotes;
