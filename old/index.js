// import { useEffect, useState } from "react";
// import { Grid } from "@mui/material";

// import { StyledBox } from "./styled";
// import Header from "../../components/Header/Header";
// import MainView from "../../components/MainView/MainView";
// import NotesList from "../../components/NotesList/NotesList";

// const MyNotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [selectedNote, setSelectedNote] = useState(null);

//   // useEffect(() => {
//   //   // const json = localStorage.getItem("notes");
//   //   // const savedNotes = JSON.parse(json);
//   //   if (savedNotes) {
//   //     setNotes(savedNotes);
//   //   }
//   // }, []);

//   const onNoteSelecting = (note) => () => {
//     setSelectedNote(note);
//   };

//   const onNoteUpdate = (updatedNote) => {
//     const updatedNotes = notes.map((note) => {
//       if (note.id === updatedNote.id) {
//         return updatedNote;
//       } else {
//         return note;
//       }
//     });
//     setNotes(updatedNotes);
//     setSelectedNote(updatedNote);
//     const json = JSON.stringify(updatedNotes);
//     localStorage.setItem("notes", json);
//   };

//   const [isAddNotePanelOpen, setAddNotePanelOpen] = useState(false);

//   const openAddNotePanel = () => {
//     setAddNotePanelOpen(true);
//   };
//   const closeAddNotePanel = () => {
//     setAddNotePanelOpen(false);
//   };
//   const handleAddNote = (title, description) => {
//     console.log(title, "title");
//     const newNote = {
//       id: Math.random(),
//       title: title,
//       description: description,
//       date: new Date().toDateString(),
//     };
//     const newNoteData = notes.concat(newNote);
//     setNotes(newNoteData);
//     const json = JSON.stringify(newNoteData);
//     localStorage.setItem("notes", json);
//   };

//   const [isDeleteButtonClicked, setDeleteButtonClicked] = useState(false);

//   const handleDeleteNote = (id) => {
//     console.log("note id", id);
//     const newNoteData = notes.filter((note) => note.id !== id);
//     setNotes(newNoteData);
//     setDeleteButtonClicked(true);
//     const json = JSON.stringify(newNoteData);
//     localStorage.setItem("notes", json);
//   };

//   return (
//     <StyledBox>
//       <Header />
//       <Grid container spacing={2} columns={16}>
//         <Grid item xs={3}>
//           <NotesList
//             notes={notes}
//             onNoteSelecting={onNoteSelecting}
//             openAddNotePanel={openAddNotePanel}
//             isAddNotePanelOpen={isAddNotePanelOpen}
//             closeAddNotePanel={closeAddNotePanel}
//             handleAddNote={handleAddNote}
//           />
//         </Grid>
//         <Grid item xs={13}>
//           <MainView
//             note={selectedNote}
//             onNoteUpdate={onNoteUpdate}
//             handleDeleteNote={handleDeleteNote}
//             isDeleteButtonClicked={isDeleteButtonClicked}
//           />
//         </Grid>
//       </Grid>
//     </StyledBox>
//   );
// };

// export default MyNotes;
