import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import { RANDOM_ID } from "config/constants";
import notesApi from "api/notes";

const usePresenter = ({ onNoteAdd }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const newData = {
      id: RANDOM_ID,
      title: values.noteTitle,
      description: values.noteDescription,
      createdAt: new Date().toUTCString(),
    };
    const response = await notesApi.addNote({ data: newData });

    if (response.ok) {
      onNoteAdd(newData);
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
