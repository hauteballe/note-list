import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Header from "components/Header/Header";
import NotesList from "components/NotesList/NotesList";
import image from "images/main.png";
import CreateNoteView from "components/CreateNoteView/CreateNoteView";
import notesApi from "api/notes";
import DisplayedNoteView from "components/DisplayedNoteView/DisplayedNoteView";
import EditNoteView from "components/EditNoteView/EditNoteView";

const VIEW_TYPE = {
  DISPLAY: "display",
  CREATE: "create",
  EDIT: "edit",
};

const EmptyView = () => {
  return (
    <Box>
      <Grid container>
        <Box
          component="img"
          sx={{ height: "500px" }}
          src={image}
          alt="not found"
        />
      </Grid>
    </Box>
  );
};

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [viewType, setViewType] = useState(VIEW_TYPE.DISPLAY);

  console.log("selectedNote", selectedNote);

  const getNotes = async () => {
    const response = await notesApi.getNotesList();
    console.log(response);
    if (response.ok) {
      const notes = response.data;
      setNotes(notes);
      console.log(notes);
    } else {
      console.log(response.error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const selectNote = (note) => {
    console.log("selectNote", note);
    setSelectedNote(note);
    setViewType(VIEW_TYPE.DISPLAY);
  };

  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => {
    setEditMode(true);
    console.log("edit mode on");
  };

  const onEditModeCancel = () => {
    setEditMode(false);
  };

  const [createMode, setCreateMode] = useState(false);

  const onCreateMode = () => {
    setCreateMode(true);
    console.log("create mode on");
  };

  // const onEditModeCancel = () => {
  //   setEditMode(false);
  // };

  const getView = () => {
    if (viewType === VIEW_TYPE.CREATE) {
      return <CreateNoteView />;
    } else if (selectedNote && viewType === VIEW_TYPE.DISPLAY) {
      return (
        <DisplayedNoteView
          note={selectedNote}
          onEditMode={() => setViewType(VIEW_TYPE.EDIT)}
        />
      );
    } else if (selectedNote && viewType === VIEW_TYPE.EDIT) {
      console.log("EditNoteView selectedNote", selectedNote);
      return <EditNoteView note={selectedNote} />;
    } else {
      return <EmptyView />;
    }
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Header />
      <Box sx={{ height: "calc(100% - 64px)" }}>
        <Grid container spacing={1}>
          <Grid item>
            <NotesList
              notes={notes}
              itemProps={{
                onClick: selectNote,
              }}
            />
          </Grid>
          <Grid item sx={{ flex: "1" }}>
            {getView()}
          </Grid>
        </Grid>
      </Box>
      <Fab
        onClick={() => setViewType(VIEW_TYPE.CREATE)}
        color="primary"
        aria-label="add"
        sx={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default MyNotes;
