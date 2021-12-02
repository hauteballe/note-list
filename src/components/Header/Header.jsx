import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { ROUTES } from "config/constants";

import { HeaderLink, StyledLink, TabLink } from "./styled";

const Header = ({ props, user, onClick }) => (
  <AppBar position="static" {...props} data-testid="header-appbar">
    <Toolbar>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" component={StyledLink} to={ROUTES.myNotes}>
            Notes app
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography component={TabLink} to={ROUTES.myNotes}>
                MY NOTES
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={TabLink} to={ROUTES.sharedNotes}>
                SHARED NOTES
              </Typography>
            </Grid>
            <Grid item>
              <Typography component={TabLink} to={ROUTES.about}>
                ABOUT
              </Typography>
            </Grid>
            <Grid item>
              {user.email ? (
                <IconButton color="inherit" onClick={onClick}>
                  <ExitToApp />
                </IconButton>
              ) : (
                <HeaderLink to={ROUTES.signIn}>
                  <Button variant="text">Sign In</Button>
                </HeaderLink>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
