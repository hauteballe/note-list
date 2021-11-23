import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { useState } from "react";

import notesApi from "api/notes";

import DisplayedNote from "./DisplayedNote";

const DisplayedNoteContainer = ({
  note,
  onEditMode,
  onDeleteBtnClick,
  actionsEnabled = true,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const shareNotes = async (usersData) => {
    const data = {
      users: usersData.map((user) => user.email),
    };
    const response = await notesApi.shareNote(note.id, data);
    if (response.ok) {
      setDialogOpen(false);
    } else {
      enqueueSnackbar(response.error, {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        ),
      });
    }
  };

  return (
    <DisplayedNote
      actionsEnabled={actionsEnabled}
      onEditMode={onEditMode}
      onDeleteBtnClick={onDeleteBtnClick}
      note={note}
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      shareNotes={shareNotes}
    />
  );
};

DisplayedNoteContainer.propTypes = {
  note: PropTypes.object,
  onDeleteBtnClick: PropTypes.func,
  onEditMode: PropTypes.func,
  actionsEnable: PropTypes.bool,
};

export default DisplayedNoteContainer;
