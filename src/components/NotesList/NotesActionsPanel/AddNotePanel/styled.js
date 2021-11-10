import { Card } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const AddCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  minWidth: 275,
  marginTop: "1rem",
  marginLeft: "1rem",
  padding: "10px 0",
  justifyContent: "space-around",
});

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});
