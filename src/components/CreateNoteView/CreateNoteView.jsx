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
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";

import { createNoteFormValidationScema } from "validations";
import { useSnackbar } from "notistack";

const CreateNoteHeader = () => (
  <Box pb={4} sx={{ color: "primary.main" }}>
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

const CreateNoteView = () => {
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
    <Container maxWidth="xs" disableGutters>
      <Grid
        sx={{
          height: "100vh",
          marginTop: "17px",
          marginLeft: "30px",
        }}
        container
        alignItems="top"
      >
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <CreateNoteHeader />
            </Grid>
            <Grid item>
              <CreateNoteForm onSubmit={onSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateNoteView;
