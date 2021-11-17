import InfiniteScroll from "react-infinite-scroll-component";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, List, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ListNoteItem } from "./ListNoteItem/ListNoteItem";

import usePresenter from "components/NotesList/hooks/usePresenter";

const NotesList = (props) => {
  const {
    notes,
    setNotes,
    fetchMoreNotes,
    hasMoreNotes,
    fetchFilteredNotes,
    filterEnabled = true,
    itemProps = {},
  } = props;

  const {
    filterMode,
    setFilterMode,
    filterData,
    handleChange,
    filterNotes,
    resetFilterNotes,
    fetchMore,
    onDragEnd,
  } = usePresenter({
    notes,
    setNotes,
    fetchMoreNotes,
    fetchFilteredNotes,
  });

  return (
    <Box sx={{ height: "100%" }}>
      {filterEnabled && (
        <Box p={1}>
          <Grid container justifyContent="flex-start">
            <IconButton
              onClick={() => {
                setFilterMode(!filterMode);
              }}
              size="small"
              color="primary"
            >
              <FilterAltIcon />
            </IconButton>
          </Grid>
          {filterMode && (
            <Box sx={{ width: "250px" }} pt={1}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    id="outlined-search"
                    type="search"
                    fullWidth
                    size="small"
                    label="Title"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={filterData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="dateFrom"
                    type="date"
                    fullWidth
                    size="small"
                    label="Date From"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="dateTo"
                    type="date"
                    fullWidth
                    size="small"
                    label="Date To"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={1} justifyContent="space-around">
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        onClick={filterNotes}
                      >
                        Filter
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        onClick={resetFilterNotes}
                      >
                        Reset
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      )}

      <Box
        id="scrollableBox"
        sx={{
          minWidth: "250px",
          height: "calc(100% - 50px)",
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <InfiniteScroll
          dataLength={notes.length}
          next={fetchMore}
          hasMore={hasMoreNotes}
          scrollableTarget="scrollableBox"
          style={{ height: "100%" }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="notesList">
              {(provided) => (
                <List
                  id="notesList"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{
                    minWidth: "250px",
                    height: "100%",
                  }}
                  disablePadding
                >
                  {notes.map((note, index) => {
                    return (
                      <Draggable
                        key={note.id}
                        index={index}
                        draggableId={String(note.id)}
                      >
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            p={1}
                            key={note.id}
                          >
                            <ListNoteItem note={note} {...itemProps} />
                          </Box>
                        )}
                      </Draggable>
                    );
                  })}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMoreNotes: PropTypes.func.isRequired,
  hasMoreNotes: PropTypes.bool.isRequired,
};

export default NotesList;
