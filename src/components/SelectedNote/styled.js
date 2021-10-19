import styled from "styled-components";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

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

export const MainBox = styled(Box)({
  marginTop: "1rem",
  marginLeft: "5rem",
  marginRight: "1rem",
});

export const MainCard = styled(Card)({
  width: "100%",
  height: "500px",
});

export const MainCardMedia = styled(CardMedia)({
  height: "500px",
  width: "300px",
});
