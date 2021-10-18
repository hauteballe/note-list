import React from "react";
import { ExitToApp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="span"
            sx={{ color: "primary.main", flexGrow: 1 }}
          >
            Notes app
          </Typography>
          <IconButton color="inherit">
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
