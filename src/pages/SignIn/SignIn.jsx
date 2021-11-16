import {
  Button,
  IconButton,
  Container,
  Grid,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { ROUTES } from "config/constants";
import { signInValidationSchema } from "validations";
import authApi from "api/auth";
import { actions } from "store/features/userSlice";

const SignInHeader = () => (
  <Box pb={4} sx={{ color: "primary.main" }}>
    <Typography variant="h3" align="center">
      Sign In
    </Typography>
  </Box>
);

const RegisterText = () => (
  <Box p={2}>
    <Typography align="center">
      Don't have an account yet?{" "}
      <Link sx={{}} to={ROUTES.signUp}>
        Register
      </Link>
    </Typography>
  </Box>
);

const SignInForm = ({ onSubmit }) => {
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
          sx={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const response = await authApi.logIn({ ...values });
    if (response.ok) {
      dispatch(
        actions.login({
          ...response.data,
          basicAuth: authApi.getBasicAuthString({ ...values }),
        })
      );
      history.push(ROUTES.myNotes);
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
      <Grid sx={{ height: "100vh" }} container alignItems="center">
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item>
              <SignInHeader />
            </Grid>
            <Grid item>
              <SignInForm onSubmit={onSubmit} />
            </Grid>
            <Grid item>
              <RegisterText />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
