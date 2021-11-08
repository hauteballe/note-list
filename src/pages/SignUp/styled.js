import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { Form } from "formik";

export const StyledBox = styled(Box)({
  color: "#0288d1",
  backgroundColor: "#424242",
  height: "100vh",
  overflowY: "scroll",
});

export const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100vw",
  maxHeight: "100vh",
});

export const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "inherit",
  padding: "32px",
  width: "400px",
  borderRadius: "8px",
  margin: "32px",
});

export const SignUpHeader = styled(Typography)({
  textAlign: "center",
  paddingTop: "50px",
  color: "#ffffff",
});
