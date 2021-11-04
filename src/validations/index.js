import { object, string, date } from "yup";
import * as Yup from "yup";

export const SignInValidationSchema = object({
  email: string().required("Please enter email").email("Invalid email"),
  password: string().required("Please enter password"),
});

export const SignUpValidationSchema = object({
  email: string().required("Please enter email").email("Invalid email"),
  firstName: string()
    .required("Please enter your name")
    .matches(
      /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/,
      "Name starts with a capital letter and contains at least 2 letters"
    ),
  lastName: string()
    .required("Please statusenter your surname")
    .matches(
      /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/,
      "Surname starts with a capital letter and contains at least 2 letters"
    ),
  password: string()
    .required("Please enter password")
    .matches(
      /^(?=.*[a-zA-Z])|(?=.*\d).{8,}$/,
      "Password must contain at least 8 characters, one letter, one number"
    )
    .min(8, "Password is too short"),
  confirmPassword: string()
    .required("Please confirm password")
    .oneOf(
      [Yup.ref("password"), null],
      "The password and its confirmation do not coincide"
    ),
  birthDate: date().required("Please enter your date of birth"),
});
