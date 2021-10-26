import { List, ListItemText } from "@mui/material";

import Header from "components/Header/Header";

import { AboutHeader, StyledBox, AboutListItem } from "./styled";

const About = () => (
  <StyledBox>
    <Header />
    <AboutHeader variant="h3" component="div">
      This is a simple notes app
    </AboutHeader>
    <AboutListItem disablePadding>
      <ListItemText primary="Manage your work and tasks with this notes app. You can easily add, edit, delete and share your notes with other users. Additional features include filtering by date and by name." />
    </AboutListItem>
    <AboutHeader variant="h4" component="div">
      Technologies and Tools
    </AboutHeader>
    <List>
      <AboutListItem disablePadding>
        <ListItemText primary="React" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="Redux" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="Material UI" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="Material UI Icons" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="LocalStorage" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="React Router" />
      </AboutListItem>
    </List>
    <AboutHeader variant="h4" component="div">
      Features
    </AboutHeader>
    <List>
      <AboutListItem disablePadding>
        <ListItemText primary="You can add new notes, edit and delete them" />
      </AboutListItem>
      <AboutListItem disablePadding>
        <ListItemText primary="You can filter notes by date and by name" />
      </AboutListItem>
    </List>
    <AboutHeader variant="h4" component="div">
      Planned Improvements
    </AboutHeader>
    <AboutListItem disablePadding>
      <ListItemText primary="Filtering notes by category and changing backgroung color for each of them" />
    </AboutListItem>
  </StyledBox>
);

export default About;
