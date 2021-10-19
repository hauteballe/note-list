import { useState } from "react";
import { Grid } from "@mui/material";

import { NOTES } from "config/constants";

import { StyledBox } from "./styled";
import Header from "../../components/Header/Header";
import SelectedNote from "../../components/SelectedNote/SelectedNote";
import NotesList from "../../components/NotesList/NotesList";

const MyNotes = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const onNoteSelecting = (note) => () => {
    setSelectedNote(note);
  };

  return (
    <StyledBox>
      <Header />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={3}>
          <NotesList notes={NOTES} onNoteSelecting={onNoteSelecting} />
        </Grid>
        <Grid item xs={13}>
          <SelectedNote note={selectedNote} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default MyNotes;
