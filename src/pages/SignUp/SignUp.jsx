import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

import { INITIAL_VALUES, ROUTES } from "config/constants";
import { signUpValidationSchema } from "validations";
import authApi from "api/auth";

const SignUpHeader = () => (
  <Box pb={4} sx={{ color: "primary.main" }}>
    <Typography variant="h3" align="center">
      Sign Up
    </Typography>
  </Box>
);

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
          sx={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          sx={{ marginBottom: "20px" }}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          sx={{ marginBottom: "20px" }}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="birthday"
          type="date"
          name="birthday"
          sx={{ marginBottom: "20px" }}
          value={formik.values.birthday}
          onChange={formik.handleChange}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          sx={{ marginBottom: "20px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          sx={{ marginBottom: "20px" }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
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

const SignUp = () => {
  const history = useHistory();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const response = await authApi.registration({ data: values });

    if (response.ok) {
      history.push(ROUTES.signIn);
    } else {
      enqueueSnackbar(response.error.response.data, {
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
      <Grid sx={{ height: "100vh" }} container alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <SignUpHeader />
            </Grid>
            <Grid item>
              <SignUpForm onSubmit={onSubmit} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
