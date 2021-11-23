import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const Wrapper = styled(Box)({
  padding: "20px",
  paddingTop: "30px",
});

export const StyledBox = styled(Box)({
  backgroundColor: "#d0d0d042",
  width: "100%",
  borderRadius: "5px",
});

export const InnerWrapper = styled(Box)({
  padding: "10px",
});

export const StyledGrid = styled(Grid)({
  paddingBottom: "30px",
});

export const EditHeaderBox = styled(Box)({
  boxShadow: "0 4px 3px -3px #1976d2",
});
