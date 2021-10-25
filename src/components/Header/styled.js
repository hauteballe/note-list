import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Toolbar, Typography } from "@mui/material";

import styled from "styled-components";

export const HeaderBox = styled(Box)({
  flexGrow: 1,
});

export const HeaderToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const HeaderLink = styled(Link)({
  textDecoration: "none",
});

export const ButtonsBox = styled(Box)({
  display: "flex",
  justifySelf: "flex-end",
  alignItems: "center",
});

export const HeaderLogo = styled(Typography)({
  color: "#90caf9",
  display: "flex",
  justifySelf: "flex-start",
});
