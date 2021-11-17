import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import notesApi from "api/notes";

const usePresenter = ({ note, onNoteUpdate }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const updatedNote = {
      id: note.id,
      title: values.title,
      description: values.description,
      updatedAt: new Date().toUTCString(),
      createdAt: values.createdAt,
    };
    const response = await notesApi.updateNote(updatedNote);
    if (response.ok) {
      onNoteUpdate(updatedNote);
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

  return { onSubmit };
};

export default usePresenter;
