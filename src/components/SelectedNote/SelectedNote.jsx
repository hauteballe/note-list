import React from "react";
import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import image from "../../images/main-image.png";

function SelectedNote({ note }) {
  if (note) {
    return (
      <Box
        sx={{
          width: "fit-content",
          mt: "1rem",
          mr: "1rem",
          ml: "1rem",
          height: "fit-content",
          backgroundColor: "#121212",
        }}
      >
        <Card sx={{ minWidth: 275, mt: "1rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 12, mt: "1rem" }}
              color="text.primary"
              gutterBottom
            >
              {note.title}
            </Typography>
            <Typography variant="h5" component="div">
              {note.description}...
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {note.date}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  } else {
    return (
      <Box sx={{ mt: "1rem", ml: "5rem", mr: "1rem" }}>
        <Card sx={{ width: "100%", height: "500px" }}>
          <CardContent>
            <Typography variant="h4" component="h4">
              Select note to display
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="500px"
            width="300px"
            image={image}
            alt="main image"
          />
        </Card>
      </Box>
    );
  }
}

SelectedNote.propTypes = {
  note: PropTypes.object,
};

export default SelectedNote;
