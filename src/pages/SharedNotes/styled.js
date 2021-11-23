import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledGrid = styled(Grid)({
  height: "100%",
});

export const StyledBox = styled(Box)({
  height: "100vh",
});

export const InnerBox = styled(Box)({
  height: "calc(100% - 64px)",
});

export const LinearProgressBox = styled(Box)({
  width: "250px",
});

export const GetViewGrid = styled(Grid)({
  flex: "1",
});
