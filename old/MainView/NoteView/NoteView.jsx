import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { useState } from "react";

import DetailedView from "./DetailedView/DetailedView";
import EditView from "./EditView/EditView";

const NoteView = ({ note, onNoteUpdate, handleDeleteNote }) => {
  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => {
    setEditMode(true);
  };

  const onEditModeCancel = () => {
    setEditMode(false);
  };

  return (
    <Box>
      {editMode ? (
        <EditView
          note={note}
          onCancel={onEditModeCancel}
          onNoteUpdate={onNoteUpdate}
        />
      ) : (
        <DetailedView
          note={note}
          onEditMode={onEditMode}
          handleDeleteNote={handleDeleteNote}
        />
      )}
    </Box>
  );
};

NoteView.propTypes = {
  note: PropTypes.object,
  onNoteUpdate: PropTypes.func,
  onEditMode: PropTypes.func,
  onEditModeCancel: PropTypes.func,
};

export default NoteView;
