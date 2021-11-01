import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

import Header from "components/Header/Header";
import { ROUTES } from "config/constants";

import { FormBox, StyledBox, StyledForm } from "./styled";

const loginValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values, formikHelpers) => {};

  return (
    <StyledBox>
      <Header />
      <Typography
        variant="h3"
        sx={{ textAlign: "center", pt: "50px", color: "#ffffff" }}
      >
        Sign In
      </Typography>
      <FormBox>
        <Formik
          initialValues={loginValues}
          onSubmit={onSubmit}
          validationSchema={object({
            email: string()
              .required("Please enter email")
              .email("Invalid email"),
            password: string().required("Please enter password"),
          })}
        >
          {({ errors, isValid, touched, dirty }) => (
            <StyledForm>
              <Field
                name="email"
                type="name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="E-mail"
                fullWidth
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Box height={16} />
              <Field
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Password"
                fullWidth
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Box height={16} />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!dirty || !isValid}
              >
                Login
              </Button>
            </StyledForm>
          )}
        </Formik>
      </FormBox>
      <Typography
        sx={{ textAlign: "center", fontSize: "14px", color: "#ffffff" }}
      >
        Don't have an account yet?
        <Typography component="div">
          <Link to={ROUTES.signUp} sx={{ color: "#ffffff" }}>
            Register
          </Link>
        </Typography>
      </Typography>
    </StyledBox>
  );
};

export default SignIn;
