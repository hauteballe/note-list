import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signInValidationSchema } from "validations";
import PropTypes from "prop-types";

export const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
