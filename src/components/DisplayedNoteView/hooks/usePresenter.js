import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useState } from "react";

import notesApi from "api/notes";

const usePresenter = ({ note }) => {
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
  return { dialogOpen, setDialogOpen, shareNotes };
};

export default usePresenter;
