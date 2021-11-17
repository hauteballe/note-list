import { useState } from "react";

const usePresenter = ({
  notes,
  setNotes,
  fetchMoreNotes,
  fetchFilteredNotes,
}) => {
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
  return {
    filterMode,
    setFilterMode,
    filterData,
    handleChange,
    filterNotes,
    resetFilterNotes,
    fetchMore,
    onDragEnd,
  };
};

export default usePresenter;
