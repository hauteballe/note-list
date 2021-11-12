import { Card, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const MainBox = styled(Box)({
  marginTop: "1rem",
  marginLeft: "1rem",
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
