import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, Formik } from "formik";
import { object, string, date } from "yup";
import * as Yup from "yup";
import axios from "axios";

import { INITIAL_VALUES } from "config/constants";
import Header from "components/Header/Header";

import { add } from "../../utils/redux/features/addUser/userSlice";
import { FormBox, StyledBox, StyledForm, SignUpHeader } from "./styled";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToSignIn = () => {
    history.push("/sign-in");
  };

  const onSubmit = (values, formikHelpers) => {
    let newUser = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      birthday: values.birthDate,
      password: values.password,
    };

    console.log(newUser);
    console.log(typeof newUser.birthday);

    axios
      .post("https://note-app-training-server.herokuapp.com/api/users", newUser)
      .then((response) => console.log(response));

    if (values) {
      formikHelpers.resetForm();
      const json = JSON.stringify(values);
      localStorage.setItem("user", json);
      redirectToSignIn();
      dispatch(add(values.email));
    }
  };

  return (
    <StyledBox>
      <Header />
      <SignUpHeader variant="h3">Sign Up</SignUpHeader>
      <FormBox>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={onSubmit}
          validationSchema={object({
            email: string()
              .required("Please enter email")
              .email("Invalid email"),
            firstName: string()
              .required("Please enter your name")
              .min(2, "Name is too short"),
            lastName: string()
              .required("Please enter your surname")
              .min(2, "Surname is too short"),
            password: string()
              .required("Please enter password")
              .min(6, "Your password must be at least 6 characters"),
            confirmPassword: string()
              .required("Please confirm password")
              .oneOf(
                [Yup.ref("password"), null],
                "The password and its confirmation do not coincide"
              ),
            birthDate: date().required("Please enter your date of birth"),
          })}
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
