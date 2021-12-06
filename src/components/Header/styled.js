import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLink = styled(Link)({
  textDecoration: "none",
});

export const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});

export const TabLink = styled(StyledLink)({
  "&:hover": {
    color: "black",
  },
});
