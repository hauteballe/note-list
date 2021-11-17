import { ListItem, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

import shortify from "utils/shortify";

export const ListNoteItem = ({ note, onClick, index }) => {
  return (
    <ListItem disablePadding>
      <Box
        sx={{
          borderLeft: "3px solid #1976d2",
        }}
      >
        <ListItemButton
          sx={{ minWidth: "250px" }}
          onClick={() => onClick(note)}
        >
          <Box>
            <Typography variant="h5">{note.title}</Typography>
            <Typography>{shortify(note.description)}...</Typography>
            <Typography variant="caption">
              {new Date(note.createdAt).toDateString()}
            </Typography>
          </Box>
        </ListItemButton>
      </Box>
    </ListItem>
  );
};

ListNoteItem.propTypes = {
  note: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
