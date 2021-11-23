import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import InfiniteScroll from "react-infinite-scroll-component";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import { ListNoteItem } from "./ListNoteItem/ListNoteItem";
import { FilterBox, StyledBox, StyledList } from "./styled";

const NotesList = ({
  filterEnabled = true,
  setFilterMode,
  filterMode,
  filterData,
  handleChange,
  filterNotes,
  resetFilterNotes,
  notes,
  fetchMore,
  hasMoreNotes,
  onDragEnd,
  itemProps,
}) => (
  <StyledBox>
    {filterEnabled && (
      <Box p={1}>
        <Grid container justifyContent="flex-start">
          <IconButton
            onClick={() => setFilterMode(!filterMode)}
            size="small"
            color="primary"
          >
            <FilterAltIcon />
          </IconButton>
        </Grid>
        {filterMode && (
          <FilterBox>
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
          </FilterBox>
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
              <StyledList
                id="notesList"
                {...provided.droppableProps}
                ref={provided.innerRef}
                disablePadding
              >
                {notes.map((note, index) => {
                  return (
                    <Draggable
                      key={note.id}
                      index={index}
                      draggableId={note.id}
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
              </StyledList>
            )}
          </Droppable>
        </DragDropContext>
      </InfiniteScroll>
    </Box>
  </StyledBox>
);

NotesList.propTypes = {
  filterEnabled: PropTypes.bool,
  setFilterMode: PropTypes.func.isRequired,
  filterMode: PropTypes.bool.isRequired,
  filterData: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  filterNotes: PropTypes.func.isRequired,
  resetFilterNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMore: PropTypes.func.isRequired,
  hasMoreNotes: PropTypes.bool.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default NotesList;
