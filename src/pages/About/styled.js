import styled from "styled-components";
import { Typography, List, Box } from "@mui/material";

export const StyledBox = styled(Box)({
  color: "#0288d1",
  backgroundColor: "#424242",
  height: "100vh",
  overflowY: "scroll",
});

export const AboutHeader = styled(Typography)({
  textAlign: "center",
  paddingTop: "30px",
  color: "#ffffff",
});

export const AboutListItem = styled(List)({
  textAlign: "center",
  color: "#ffffff",
  paddingTop: "10px",
});
