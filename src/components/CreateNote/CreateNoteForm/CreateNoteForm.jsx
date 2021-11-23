import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import { createNoteFormValidationScema } from "validations";

const CreateNoteForm = ({ onSubmit, onCancelButtonClicked }) => {
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
          value={formik.values.noteTitle}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
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
          value={formik.values.noteDescription}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
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
          sx={{ mr: 2 }}
        >
          Submit
        </Button>
        <Button
          onClick={onCancelButtonClicked}
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

CreateNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancelButtonClicked: PropTypes.func.isRequired,
};

export default CreateNoteForm;
