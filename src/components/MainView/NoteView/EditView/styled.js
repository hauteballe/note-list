import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const EditBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
});

export const EditCard = styled(Card)({
  marginLeft: "1rem",
  marginTop: "1rem",
  height: "250px",
  maxWidth: "1204px",
});

export const ButtonsBox = styled(Box)({
  marginTop: "1rem",
});

export const SaveButton = styled(Button)({
  marginLeft: "0.5rem",
  paddingRight: "1rem",
});
