// import PropTypes from "prop-types";
// import { useEffect } from "react";
// import Box from "@mui/material/Box";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import { NOTES } from "config/constants";

// import NoteCard from "./NoteCard/NoteCard";
// import NotesActionsPanel from "./NotesActionsPanel/NotesActionsPanel";
// import AddNotePanel from "./NotesActionsPanel/AddNotePanel/AddNotePanel";

// const NotesList = ({
//   notes,
//   onNoteSelecting,
//   openAddNotePanel,
//   isAddNotePanelOpen,
//   closeAddNotePanel,
//   handleAddNote,
// }) => {
//   useEffect(() => {
//     const json = JSON.stringify(NOTES);
//     localStorage.setItem("notes", json);
//   }, []);

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
//   };

//   return (
//     <Box>
//       <NotesActionsPanel openAddNotePanel={openAddNotePanel} />
//       {isAddNotePanelOpen && (
//         <AddNotePanel
//           closeAddNotePanel={closeAddNotePanel}
//           onSubmit={handleAddNote}
//         />
//       )}
//       {notes.map((note) => (
//         <NoteCard note={note} key={note.id} onClick={onNoteSelecting(note)} />
//       ))}
//     </Box>
//   );
// };

// NotesList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   note: PropTypes.object,
//   onNoteSelecting: PropTypes.func.isRequired,
// };

// export default NotesList;
import React from "react";

import { Grid, Box, List, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import shortify from "utils/shortify";

const ListNoteItem = ({ note, onClick }) => {
  return (
    <ListItem disablePadding>
      <Box sx={{ borderLeft: "3px solid #1976d2" }}>
        <ListItemButton
          sx={{ minWidth: "250px" }}
          onClick={() => onClick(note)}
        >
          <Box>
            <Typography variant="h5">{note.title}</Typography>
            <Typography>{shortify(note.description)}...</Typography>
            <Typography variant="caption">
              {new Date(note.createdAt).toDateString()}
            </Typography>
          </Box>
        </ListItemButton>
      </Box>
    </ListItem>
  );
};

const NotesList = (props) => {
  const { notes, itemProps = {} } = props;
  console.log(notes);
  return (
    <List sx={{ minWidth: "250px", mt: "8px" }} disablePadding>
      {notes.map((note) => (
        <Box p={1} key={note.id}>
          <ListNoteItem note={note} {...itemProps} />
        </Box>
      ))}
    </List>
  );
};

export default NotesList;
