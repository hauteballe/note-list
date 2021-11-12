import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";

import { createNoteFormValidationScema } from "validations";
import { useSnackbar } from "notistack";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import notesApi from "api/notes";
import { useState } from "react";

const EditNoteHeader = () => (
  <Box pb={4} sx={{ color: "primary.main" }}>
    <Typography variant="h5" align="left">
      Edit Note
    </Typography>
  </Box>
);

const EditNoteForm = ({ onSubmit, note }) => {
  //   const [editNote, setEditNote] = useState({...note});
  console.log("EditNoteForm", note);
  const formik = useFormik({
    initialValues: { ...note },
    //   noteTitle: editNote.noteTitle,
    //   noteDescription: editNote.noteDescription,
    // },
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Note Title"
          sx={{ marginBottom: "20px" }}
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.noteTitle && formik.errors.noteTitle}
        />
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Note Description"
          sx={{ marginBottom: "20px" }}
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ marginRight: "10px" }}
        >
          Submit
        </Button>
        <Button color="primary" variant="contained" type="reset">
          Cancel
        </Button>
      </form>
    </div>
  );
};

const EditNoteView = ({ note }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const updatedNote = {
      id: note.id,
      title: values.noteTitle,
      description: values.noteDescription,
      updatedAt: new Date().toUTCString(),
      createdAt: values.createdAt,
    };
    const response = await notesApi.updateNote({ data: updatedNote });

    if (response.ok) {
      console.log("ok", response.data);
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
    <Grid
    // sx={{
    //   height: "100vh",
    //   marginTop: "17px",
    //   marginLeft: "30px",
    // }}
    // container
    // alignItems="top"
    >
      <Grid item xs={12}>
        <Grid container direction="column">
          <Grid item>
            <EditNoteHeader />
          </Grid>
          <Grid item>
            <EditNoteForm onSubmit={onSubmit} note={note} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditNoteView;
