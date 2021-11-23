import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import { VIEW_TYPE } from "config/constants";
import notesApi from "api/notes";
import CreateNoteContainer from "components/CreateNote/CreateNoteContainer";
import DisplayedNoteContainer from "components/DisplayedNote/DisplayedNoteContainer";
import EditNoteContainer from "components/EditNote/EditNoteContainer";
import EmptyView from "components/EmptyView/EmptyView";

import MyNotes from "./MyNotes";

const MyNotesContainer = () => {
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

  const onCancelButtonClicked = () => {
    selectNote(null);
  };

  const onEditModeCancel = () => {
    selectNote(selectedNote);
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
      return (
        <CreateNoteContainer
          onNoteAdd={onNoteAdd}
          onCancelButtonClicked={onCancelButtonClicked}
        />
      );
    } else if (selectedNote && viewType === VIEW_TYPE.DISPLAY) {
      return (
        <DisplayedNoteContainer
          note={selectedNote}
          onDeleteBtnClick={onDeleteBtnClick}
          onEditMode={() => setViewType(VIEW_TYPE.EDIT)}
        />
      );
    } else if (selectedNote && viewType === VIEW_TYPE.EDIT) {
      return (
        <EditNoteContainer
          note={selectedNote}
          onNoteUpdate={onNoteUpdate}
          onEditModeCancel={onEditModeCancel}
        />
      );
    } else {
      return <EmptyView />;
    }
  };

  return (
    <MyNotes
      loadingNotes={loadingNotes}
      notes={notes}
      setNotes={setNotes}
      selectNote={selectNote}
      hasMoreNotes={hasMoreNotes}
      fetchMoreNotes={fetchMoreNotes}
      fetchFilteredNotes={fetchFilteredNotes}
      getView={getView}
      setViewType={setViewType}
    />
  );
};

export default MyNotesContainer;
