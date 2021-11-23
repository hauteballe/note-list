import { useEffect, useState } from "react";

import EmptyView from "components/EmptyView/EmptyView";
import DisplayedNoteContainer from "components/DisplayedNote/DisplayedNoteContainer";
import notesApi from "api/notes";
import { VIEW_TYPE } from "config/constants";

import SharedNotes from "./SharedNotes";

const SharedNotesContainer = () => {
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
      return (
        <DisplayedNoteContainer note={selectedNote} actionsEnabled={false} />
      );
    } else {
      return <EmptyView />;
    }
  };

  return (
    <SharedNotes
      loadingNotes={loadingNotes}
      sharedNotes={sharedNotes}
      setSharedNotes={setSharedNotes}
      selectNote={selectNote}
      hasMoreNotes={hasMoreNotes}
      fetchSharedNotes={fetchSharedNotes}
      getView={getView}
    />
  );
};

export default SharedNotesContainer;
