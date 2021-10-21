import { ExitToApp } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component="span"
          sx={{ color: "primary.main", flexGrow: 1 }}
        >
          Notes app
        </Typography>
        <Button variant="text">MY NOTES</Button>
        <Button variant="text">SHARED NOTES</Button>
        <Button variant="text">ABOUT</Button>
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
