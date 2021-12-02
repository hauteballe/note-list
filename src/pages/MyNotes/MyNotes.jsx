import React from "react";
import AddIcon from "@mui/icons-material/Add";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";

import HeaderContainer from "components/Header/HeaderContainer";
import NotesList from "components/NotesList/NotesListContainer";
import { VIEW_TYPE } from "config/constants";

import {
  GetViewGrid,
  LinearProgressBox,
  NotesBox,
  StyledBox,
  StyledGrid,
} from "./styled";

const MyNotes = ({
  loadingNotes,
  notes,
  setNotes,
  selectNote,
  hasMoreNotes,
  fetchMoreNotes,
  fetchFilteredNotes,
  getView,
  setViewType,
}) => (
  <StyledBox data-testid="my-notes-container">
    <HeaderContainer />
    <NotesBox>
      <StyledGrid container spacing={1}>
        <StyledGrid item>
          {loadingNotes ? (
            <LinearProgressBox p={1} py={2}>
              <LinearProgress />
            </LinearProgressBox>
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
        </StyledGrid>
        <GetViewGrid item>{getView()}</GetViewGrid>
      </StyledGrid>
    </NotesBox>
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
  </StyledBox>
);

MyNotes.propTypes = {
  loadingNotes: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNotes: PropTypes.func.isRequired,
  selectNote: PropTypes.func.isRequired,
  hasMoreNotes: PropTypes.bool.isRequired,
  fetchMoreNotes: PropTypes.func.isRequired,
  fetchFilteredNotes: PropTypes.func.isRequired,
  getView: PropTypes.func.isRequired,
  setViewType: PropTypes.func.isRequired,
};

export default MyNotes;
