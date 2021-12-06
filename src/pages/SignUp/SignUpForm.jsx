import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";

import { signUpValidationSchema } from "validations";
import { INITIAL_VALUES } from "config/constants";

const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: signUpValidationSchema,
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
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="birthday"
          type="date"
          name="birthday"
          value={formik.values.birthday}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
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
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          sx={{ mb: 2 }}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
