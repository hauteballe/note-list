import { useEffect, useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LinearProgress from "@mui/material/LinearProgress";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

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
    <Grid
      sx={{ height: "100%" }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box
          component="img"
          sx={{ height: "400px" }}
          src={image}
          alt="main page"
        />
      </Grid>
    </Grid>
  );
};

const MyNotes = () => {
  const [page, setPage] = useState(0);
  const [hasMoreNotes, setHasMoreNotes] = useState(true);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [viewType, setViewType] = useState(VIEW_TYPE.DISPLAY);
  const [loadingNotes, setLoadingNotes] = useState(false);

  const fetchMoreNotes = async (filterData) => {
    let nextPage = page + 1;
    const response = await notesApi.getNotesList({
      page: nextPage,
      ...filterData,
    });
    if (response.ok) {
      setNotes(notes.concat(response.data));

      if (response.data && Boolean(response.data.length)) {
        setPage(nextPage);
      } else {
        setHasMoreNotes(false);
      }
    }
  };

  const getNotesOnPageLoad = async () => {
    setLoadingNotes(true);
    const pageOne = await notesApi.getNotesList({ page: 1 });
    const pageTwo = await notesApi.getNotesList({ page: 2 });
    if (pageOne.ok && pageTwo.ok) {
      setNotes([...pageOne.data, ...pageTwo.data]);
    }
    setPage(2);
    setLoadingNotes(false);
  };
  useEffect(() => {
    getNotesOnPageLoad();
  }, []);

  const fetchFilteredNotes = async (filterData) => {
    const pageOne = await notesApi.getNotesList({ page: 1, ...filterData });
    const pageTwo = await notesApi.getNotesList({ page: 2, ...filterData });
    if (pageOne.ok && pageTwo.ok) {
      setNotes([...pageOne.data, ...pageTwo.data]);
    }
    setPage(2);
    setHasMoreNotes(true);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
    setViewType(VIEW_TYPE.DISPLAY);
  };

  const onNoteUpdate = (note) => {
    const newNotes = notes.map((item) => {
      if (item.id === note.id) {
        return note;
      } else {
        return item;
      }
    });
    selectNote(note);
    setNotes(newNotes);
  };

  const onNoteAdd = (newNote) => {
    const newNotes = [newNote, ...notes];
    selectNote(newNote);
    setNotes(newNotes);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const onNoteDelete = (noteToDelete) => {
    const newNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(newNotes);
    selectNote(null);
  };

  const onDeleteBtnClick = async (note) => {
    const noteToDelete = {
      id: note.id,
    };
    const response = await notesApi.deleteNote(noteToDelete);
    if (response.ok) {
      onNoteDelete(noteToDelete);
    } else {
      enqueueSnackbar(response.error, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        ),
      });
    }
  };

  const getView = () => {
    if (viewType === VIEW_TYPE.CREATE) {
      return <CreateNoteView onNoteAdd={onNoteAdd} />;
    } else if (selectedNote && viewType === VIEW_TYPE.DISPLAY) {
      return (
        <DisplayedNoteView
          note={selectedNote}
          onDeleteBtnClick={onDeleteBtnClick}
          onEditMode={() => setViewType(VIEW_TYPE.EDIT)}
        />
      );
    } else if (selectedNote && viewType === VIEW_TYPE.EDIT) {
      return <EditNoteView note={selectedNote} onNoteUpdate={onNoteUpdate} />;
    } else {
      return <EmptyView />;
    }
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Header />
      <Box sx={{ height: "calc(100% - 64px)" }}>
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item sx={{ height: "100%" }}>
            {loadingNotes ? (
              <Box p={1} py={2} sx={{ width: "250px" }}>
                <LinearProgress />
              </Box>
            ) : (
              <NotesList
                notes={notes}
                setNotes={setNotes}
                itemProps={{
                  onClick: selectNote,
                }}
                hasMoreNotes={hasMoreNotes}
                fetchMoreNotes={fetchMoreNotes}
                fetchFilteredNotes={fetchFilteredNotes}
              />
            )}
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
