import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, Formik } from "formik";
import { useState } from "react";
import { createRef } from "react";

import { INITIAL_VALUES, ROUTES } from "config/constants";
import Header from "components/Header/Header";
import { AlertMessage } from "components/AlertMessage";
import { SignUpValidationSchema } from "validations";

import { add } from "../../utils/redux/features/addUser/userSlice";
import { FormBox, StyledBox, StyledForm, SignUpHeader } from "./styled";
import { registration } from "api/auth";

const SignUp = () => {
  const wrapper = createRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToSignIn = () => {
    history.push(ROUTES.signIn);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values, formikHelpers) => {
    const newUser = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: values.birthDate,
      password: values.password,
    };
    let resp = await registration({ newUser: newUser });
    if (resp.ok) {
      formikHelpers.resetForm();
      const json = JSON.stringify(values);
      localStorage.setItem("user", json);
      dispatch(add(values.email));
      redirectToSignIn();
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
      <SignUpHeader variant="h3">Sign Up</SignUpHeader>
      <FormBox>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={onSubmit}
          validationSchema={SignUpValidationSchema}
        >
          {({ errors, isValid, touched, dirty }) => (
            <StyledForm>
              <Field
                name="email"
                type="email"
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
                name="firstName"
                type="name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="First name"
                fullWidth
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={Boolean(touched.firstName) && errors.firstName}
              />
              <Box height={16} />
              <Field
                name="lastName"
                type="name"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Last name"
                fullWidth
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={Boolean(touched.lastName) && errors.lastName}
              />
              <Box height={16} />
              <Field
                name="birthDate"
                type="date"
                as={TextField}
                variant="outlined"
                color="primary"
                fullWidth
                error={Boolean(errors.birthDate) && Boolean(touched.birthDate)}
                helperText={Boolean(touched.birthDate) && errors.birthDate}
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
              <Field
                name="confirmPassword"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Сonfirm password"
                fullWidth
                error={
                  Boolean(errors.confirmPassword) &&
                  Boolean(touched.confirmPassword)
                }
                helperText={
                  Boolean(touched.confirmPassword) && errors.confirmPassword
                }
              />
              <Box height={16} />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!dirty || !isValid}
              >
                Sign Up
              </Button>
            </StyledForm>
          )}
        </Formik>
      </FormBox>
    </StyledBox>
  );
};

export default SignUp;
