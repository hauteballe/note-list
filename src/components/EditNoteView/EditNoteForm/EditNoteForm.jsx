import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";

export const EditNoteForm = ({ onSubmit, note, onEditModeCancel }) => {
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
        <Button
          onClick={onEditModeCancel}
          color="primary"
          variant="contained"
          type="reset"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

EditNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  note: PropTypes.object,
};
