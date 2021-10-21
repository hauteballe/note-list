import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { StyledBox } from "./styled";
import Header from "../../components/Header/Header";
import MainView from "../../components/MainView/MainView";
import NotesList from "../../components/NotesList/NotesList";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const json = localStorage.getItem("notes");
    const savedNotes = JSON.parse(json);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const onNoteSelecting = (note) => () => {
    setSelectedNote(note);
  };

  const onNoteUpdate = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return { ...updatedNote };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    const json = JSON.stringify(updatedNotes);
    localStorage.setItem("notes", json);
  };

  return (
    <StyledBox>
      <Header />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={3}>
          <NotesList notes={notes} onNoteSelecting={onNoteSelecting} />
        </Grid>
        <Grid item xs={13}>
          <MainView note={selectedNote} onNoteUpdate={onNoteUpdate} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default MyNotes;
