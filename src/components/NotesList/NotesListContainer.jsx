import PropTypes from "prop-types";
import { useState } from "react";

import NotesList from "./NotesList";

const NotesListContainer = (props) => {
  const {
    filterEnabled,
    notes,
    setNotes,
    fetchMoreNotes,
    hasMoreNotes,
    fetchFilteredNotes,
    itemProps = {},
  } = props;

  const [filterMode, setFilterMode] = useState(false);

  const initialState = {
    name: "",
    dateFrom: "",
    dateTo: "",
  };

  const [filterData, setFilterData] = useState(initialState);

  const handleChange = (event) => {
    setFilterData({ ...filterData, [event.target.name]: event.target.value });
  };

  const filterNotes = async () => {
    await fetchFilteredNotes(filterData);
  };

  const resetFilterNotes = async () => {
    setFilterData(initialState);
    await fetchFilteredNotes(initialState);
  };

  const fetchMore = async () => {
    await fetchMoreNotes(filterData);
  };

  const reorder = (notesList, startIndex, endIndex) => {
    const result = [...notesList];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  return (
    <NotesList
      itemProps={itemProps}
      filterEnabled={filterEnabled}
      filterMode={filterMode}
      setFilterMode={setFilterMode}
      filterData={filterData}
      handleChange={handleChange}
      filterNotes={filterNotes}
      resetFilterNotes={resetFilterNotes}
      notes={notes}
      fetchMore={fetchMore}
      hasMoreNotes={hasMoreNotes}
      onDragEnd={onDragEnd}
    />
  );
};

NotesListContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMoreNotes: PropTypes.func.isRequired,
  hasMoreNotes: PropTypes.bool.isRequired,
  filterEnabled: PropTypes.bool,
  setNotes: PropTypes.func.isRequired,
  fetchFilteredNotes: PropTypes.func,
};

export default NotesListContainer;
