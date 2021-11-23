import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";

import HeaderContainer from "components/Header/HeaderContainer";
import NotesList from "components/NotesList/NotesListContainer";

import {
  GetViewGrid,
  InnerBox,
  LinearProgressBox,
  StyledBox,
  StyledGrid,
} from "./styled";

const SharedNotes = ({
  loadingNotes,
  sharedNotes,
  setSharedNotes,
  selectNote,
  hasMoreNotes,
  fetchSharedNotes,
  getView,
}) => (
  <StyledBox>
    <HeaderContainer />
    <InnerBox>
      <StyledGrid container spacing={1}>
        <StyledGrid item>
          {loadingNotes ? (
            <LinearProgressBox p={1} py={2}>
              <LinearProgress />
            </LinearProgressBox>
          ) : (
            <NotesList
              filterEnabled={false}
              notes={sharedNotes}
              setNotes={setSharedNotes}
              itemProps={{
                onClick: selectNote,
              }}
              hasMoreNotes={hasMoreNotes}
              fetchMoreNotes={fetchSharedNotes}
            />
          )}
        </StyledGrid>
        <GetViewGrid item>{getView()}</GetViewGrid>
      </StyledGrid>
    </InnerBox>
  </StyledBox>
);

SharedNotes.propTypes = {
  loadingNotes: PropTypes.bool.isRequired,
  sharedNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSharedNotes: PropTypes.func.isRequired,
  selectNote: PropTypes.func.isRequired,
  hasMoreNotes: PropTypes.bool.isRequired,
  fetchSharedNotes: PropTypes.func.isRequired,
  getView: PropTypes.func.isRequired,
};

export default SharedNotes;
