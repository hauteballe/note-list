import * as yup from "yup";

export const signInValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

export const signUpValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string("Enter your first name")
    .required("Password is required")
    .matches(
      /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/,
      "Name starts with a capital letter and contains at least 2 letters"
    ),
  lastName: yup
    .string()
    .required("Enter your surname")
    .matches(
      /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/,
      "Surname starts with a capital letter and contains at least 2 letters"
    ),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      "([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*",
      "Password must contain at least 8 characters, one letter, one number"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm password")
    .oneOf(
      [yup.ref("password"), null],
      "The password and its confirmation do not coincide"
    ),
  birthday: yup.date().required("Please enter your date of birth"),
});

export const createNoteFormValidationScema = yup.object({
  noteTitle: yup.string("Enter note title").required("Note title is required"),
  noteDescription: yup
    .string("Enter note description")
    .required("Note description is required"),
});
