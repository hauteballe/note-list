import styled from "styled-components";
import { Box } from "@mui/material";
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
  minWidth: "350px",
  borderRadius: "8px",
  margin: "32px",
});
