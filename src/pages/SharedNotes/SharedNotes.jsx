import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import Header from "components/Header/Header";
import NotesList from "components/NotesList/NotesList";
import DisplayedNoteView from "components/DisplayedNoteView/DisplayedNoteView";
import EmptyView from "components/EmptyView/EmptyView";
import notesApi from "api/notes";
import { VIEW_TYPE } from "config/constants";

const SharedNotes = () => {
  const [page, setPage] = useState(0);
  const [hasMoreNotes, setHasMoreNotes] = useState(true);
  const [sharedNotes, setSharedNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [viewType, setViewType] = useState(VIEW_TYPE.DISPLAY);
  const [loadingNotes, setLoadingNotes] = useState(false);

  const fetchSharedNotes = async () => {
    let nextPage = page + 1;
    const response = await notesApi.getSharedNotesList({
      page: nextPage,
    });
    if (response.ok) {
      setSharedNotes(sharedNotes.concat(response.data));

      if (response.data && Boolean(response.data.length)) {
        setPage(nextPage);
      } else {
        setHasMoreNotes(false);
      }
    }
  };

  const getNotesOnPageLoad = async () => {
    setLoadingNotes(true);
    const pageOne = await notesApi.getSharedNotesList({ page: 1 });
    const pageTwo = await notesApi.getSharedNotesList({ page: 2 });
    if (pageOne.ok && pageTwo.ok) {
      setSharedNotes([...pageOne.data, ...pageTwo.data]);
    }
    setPage(2);
    setLoadingNotes(false);
  };
  useEffect(() => {
    getNotesOnPageLoad();
  }, []);

  const selectNote = (note) => {
    setSelectedNote(note);
    setViewType(VIEW_TYPE.DISPLAY);
  };

  const getView = () => {
    if (selectedNote && viewType === VIEW_TYPE.DISPLAY) {
      return <DisplayedNoteView note={selectedNote} actionsEnabled={false} />;
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
                filterEnabled={false}
                notes={sharedNotes}
                setNotes={setSharedNotes}
                itemProps={{
                  onClick: selectNote,
                }}
                hasMoreNotes={hasMoreNotes}
                fetchSharedNotes={fetchSharedNotes}
              />
            )}
          </Grid>
          <Grid item sx={{ flex: "1" }}>
            {getView()}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SharedNotes;
