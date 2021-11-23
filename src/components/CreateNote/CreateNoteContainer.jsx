import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import notesApi from "api/notes";

import CreateNote from "./CreateNote";

const CreateNoteContainer = ({ onNoteAdd, onCancelButtonClicked }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const newData = {
      title: values.noteTitle,
      description: values.noteDescription,
    };
    const response = await notesApi.addNote({ data: newData });

    if (response.ok) {
      onNoteAdd(response.data);
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
    <CreateNote
      onSubmit={onSubmit}
      onCancelButtonClicked={onCancelButtonClicked}
    />
  );
};

CreateNoteContainer.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
  onCancelButtonClicked: PropTypes.func.isRequired,
};

export default CreateNoteContainer;
