import PropTypes from "prop-types";
import { Box } from "@mui/system";

import NoteView from "./NoteView/NoteView";
import DefaultView from "./DefaultView/DefaultView";

const MainView = ({ note, onNoteUpdate }) => (
  <Box>
    {note ? (
      <NoteView note={note} onNoteUpdate={onNoteUpdate} />
    ) : (
      <DefaultView />
    )}
  </Box>
);

MainView.propTypes = {
  note: PropTypes.object,
  onNoteUpdate: PropTypes.func.isRequired,
};

export default MainView;
