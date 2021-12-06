import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const Wrapper = styled(Box)({
  padding: "30px",
});

export const StyledBox = styled(Box)({
  backgroundColor: "#d0d0d042",
  width: "100%",
  borderRadius: "5px",
});

export const InnerWrapper = styled(Box)({
  padding: "10px",
  height: "40px",
  boxShadow: "0 4px 3px -3px #1976d2",
});

export const DateText = styled(Typography)({
  color: "gray",
});
