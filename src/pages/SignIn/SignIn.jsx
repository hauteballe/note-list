import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, createRef } from "react";

import Header from "components/Header/Header";
import { AlertMessage } from "components/AlertMessage";
import { ROUTES } from "config/constants";
import { SignInValidationSchema } from "validations";

import { logIn } from "../../api/auth";
import { add } from "../../utils/redux/features/addUser/userSlice";

import {
  FormBox,
  StyledBox,
  StyledForm,
  TypographyButton,
  StyledTypography,
  SignInHeader,
} from "./styled";

const loginValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const wrapper = createRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToHomePage = () => {
    history.push(ROUTES.myNotes);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, response) => {
    let resp = await logIn({ email: values.email, password: values.password });
    if (resp.ok) {
      dispatch(add(values.email));
      const json = JSON.stringify(values);
      localStorage.setItem("user", json);
      redirectToHomePage();
    } else {
      setErrorMessage(resp.error.response.data);
    }
  };
  return (
    <StyledBox>
      <Header />
      <AlertMessage
        ref={wrapper}
        message={errorMessage}
        onClose={() => setErrorMessage("")}
      />
      <SignInHeader variant="h3"> Sign In</SignInHeader>
      <FormBox>
        <Formik
          initialValues={loginValues}
          onSubmit={onSubmit}
          validationSchema={SignInValidationSchema}
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
      <StyledTypography>
        Don't have an account yet?
        <TypographyButton component="div">
          <Link to={ROUTES.signUp}>Register</Link>
        </TypographyButton>
      </StyledTypography>
    </StyledBox>
  );
};

export default SignIn;
