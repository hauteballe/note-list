import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const SelectedBox = styled(Box)({
  width: "fit-content",
  maxWidth: "1224px",
  margin: "1rem",
  height: "fit-content",
  backgroundColor: "#121212",
});

export const SelectedCard = styled(Card)({
  minWidth: "275px",
  marginTop: "1rem",
});

export const SelectedCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "flex-end",
  margin: "1rem 1rem 1rem 0",
});

export const SelectedCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
});

export const SelectedTitle = styled(Typography)({
  fontSize: 18,
  marginTop: 0,
  marginBottom: "3rem",
  color: "#ffffff",
});

export const SelectedDate = styled(Typography)({
  marginBottom: 1.5,
  display: "flex",
  alignSelf: "flex-end",
  color: "#ffffff",
});
