import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import notesApi from "api/notes";

import EditNote from "./EditNote";

const EditNoteContainer = ({ note, onNoteUpdate, onEditModeCancel }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const updatedNote = {
      id: note.id,
      title: values.title,
      description: values.description,
    };
    const response = await notesApi.updateNote(updatedNote);
    if (response.ok) {
      onNoteUpdate(response.data);
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
    <EditNote
      onSubmit={onSubmit}
      note={note}
      onEditModeCancel={onEditModeCancel}
    />
  );
};

EditNoteContainer.propTypes = {
  note: PropTypes.object,
  onNoteUpdate: PropTypes.func.isRequired,
  onEditModeCancel: PropTypes.func.isRequired,
};

export default EditNoteContainer;
