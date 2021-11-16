import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

import { createNoteFormValidationScema } from "validations";
import notesApi from "api/notes";

const CreateNoteHeader = () => (
  <Box p={1} pb={2} sx={{ color: "#0000008a" }}>
    <Typography variant="h5" align="left">
      Add New Note
    </Typography>
  </Box>
);

const CreateNoteForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      noteTitle: "",
      noteDescription: "",
    },
    validationSchema: createNoteFormValidationScema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="noteTitle"
          name="noteTitle"
          label="Note Title"
          sx={{ marginBottom: "20px" }}
          value={formik.values.noteTitle}
          onChange={formik.handleChange}
          error={formik.touched.noteTitle && Boolean(formik.errors.noteTitle)}
          helperText={formik.touched.noteTitle && formik.errors.noteTitle}
        />
        <TextField
          fullWidth
          multiline
          rows={8}
          id="noteDescription"
          name="noteDescription"
          label="Note Description"
          sx={{ marginBottom: "20px" }}
          value={formik.values.noteDescription}
          onChange={formik.handleChange}
          error={
            formik.touched.noteDescription &&
            Boolean(formik.errors.noteDescription)
          }
          helperText={
            formik.touched.noteDescription && formik.errors.noteDescription
          }
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

const CreateNoteView = ({ onNoteAdd }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const newData = {
      id: Math.floor(Math.random() * 1000),
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
                  <CreateNoteHeader />
                </Box>
              </Grid>
              <Grid item>
                <CreateNoteForm onSubmit={onSubmit} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

CreateNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

CreateNoteView.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
  values: PropTypes.object,
};

export default CreateNoteView;
