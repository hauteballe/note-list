import { ExitToApp } from "@mui/icons-material";
import { AppBar, IconButton, Button } from "@mui/material";

import { ROUTES } from "config/constants";

import {
  HeaderBox,
  HeaderToolbar,
  HeaderLink,
  ButtonsBox,
  HeaderLogo,
} from "./styled";

const Header = () => (
  <HeaderBox>
    <AppBar position="static">
      <HeaderToolbar>
        <HeaderLink to={ROUTES.myNotes}>
          <HeaderLogo variant="h5" component="span">
            Notes app
          </HeaderLogo>
        </HeaderLink>
        <ButtonsBox>
          <HeaderLink to={ROUTES.myNotes}>
            <Button variant="text">MY NOTES</Button>
          </HeaderLink>
          <HeaderLink to={ROUTES.sharedNotes}>
            <Button variant="text">SHARED NOTES</Button>
          </HeaderLink>
          <HeaderLink to={ROUTES.about}>
            <Button variant="text">ABOUT</Button>
          </HeaderLink>
          <HeaderLink to={ROUTES.signIn}>
            <Button variant="text">Sign In</Button>
          </HeaderLink>
          {/* <IconButton color="inherit">
            <ExitToApp />
          </IconButton> */}
        </ButtonsBox>
      </HeaderToolbar>
    </AppBar>
  </HeaderBox>
);

export default Header;
