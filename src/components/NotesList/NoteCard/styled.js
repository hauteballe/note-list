import styled from "styled-components";
import { Typography, Card } from "@mui/material";

export const NotesCard = styled(Card)({
  minWidth: 275,
  marginTop: "1rem",
  marginLeft: "1rem",
});

export const NotesCardTitle = styled(Typography)({
  fontSize: 14,
  color: "#ffffff",
});

export const NotesCardDate = styled(Typography)({
  marginBottom: 1.5,
  color: "#ffffff",
});
