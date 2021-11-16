import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import notesApi from "api/notes";

const EditNoteHeader = () => (
  <Box p={1} pb={2} sx={{ color: "#0000008a" }}>
    <Typography variant="h5" align="left">
      Edit Note
    </Typography>
  </Box>
);

const EditNoteForm = ({ onSubmit, note }) => {
  const formik = useFormik({
    initialValues: { ...note },
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          sx={{ marginBottom: "20px" }}
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.noteTitle && formik.errors.noteTitle}
        />
        <TextField
          fullWidth
          multiline
          id="description"
          name="description"
          label="Description"
          rows={8}
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

const EditNoteView = ({ note, onNoteUpdate }) => {
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

  return (
    <Box p={2} pt={3}>
      <Box
        sx={{
          backgroundColor: "#d0d0d042",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <Grid item xs={12}>
            <Grid container direction="column">
              <Grid item sx={{ pb: "30px" }}>
                <Box sx={{ boxShadow: "0 4px 3px -3px #1976d2" }}>
                  <EditNoteHeader />
                </Box>
              </Grid>
              <Grid item>
                <EditNoteForm onSubmit={onSubmit} note={note} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EditNoteView;
