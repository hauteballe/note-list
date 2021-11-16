import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "components/Header/Header";

const About = () => (
  <Box>
    <Header />
    <Box p={2}>
      <Typography variant="h5" component="div">
        This is a simple notes app
      </Typography>
      <ListItem disablePadding>
        <ListItemText primary="Manage your work and tasks with this notes app. You can easily add, edit, delete and share your notes with other users. Additional features include filtering by date and by name." />
      </ListItem>
      <Typography variant="h5" component="div">
        Technologies and Tools
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="React" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Redux" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Material UI" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Material UI Icons" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="LocalStorage" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="React Router" />
        </ListItem>
      </List>
      <Typography variant="h5" component="div">
        Features
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="You can add new notes, edit and delete them" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="You can filter notes by date and by name" />
        </ListItem>
      </List>
      <Typography variant="h5" component="div">
        Planned Improvements
      </Typography>
      <ListItem disablePadding>
        <ListItemText primary="Filtering notes by category and changing backgroung color for each of them" />
      </ListItem>
    </Box>
  </Box>
);

export default About;
