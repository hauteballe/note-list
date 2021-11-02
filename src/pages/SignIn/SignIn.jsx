import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Formik } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "components/Header/Header";
import { ROUTES } from "config/constants";

import { add } from "../../utils/redux/features/addUser/userSlice";

import {
  FormBox,
  StyledBox,
  StyledForm,
  TypographyButton,
  StyledTypography,
} from "./styled";

const loginValues = {
  email: "",
  password: "",
};

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToHomePage = () => {
    history.push("/notes");
  };

  const onSubmit = (values, formikHelpers) => {
    const session_url =
      "https://note-app-training-server.herokuapp.com/api/users/auth";
    let email = values.email;
    let password = values.password;
    let basicAuth = "Basic " + utf8_to_b64(`${email}:${password}`);
    let isLoggedIn = false;

    axios
      .post(
        session_url,
        {
          email: email,
          password: password,
        },
        {
          headers: { Authorization: basicAuth },
        }
      )
      .then(function (response) {
        axios.defaults.headers.common["Authorization"] = basicAuth;
        redirectToHomePage();
        dispatch(add(values.email));
        const json = JSON.stringify(values);
        localStorage.setItem("user", json);
      })
      .catch(function (error) {
        console.log("Error on Authentication");
      });
  };

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
