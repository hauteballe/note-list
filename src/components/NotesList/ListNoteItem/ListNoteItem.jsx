import { ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

import shortify from "utils/shortify";

import { StyledBox, StyledListItemButton } from "./styled";

export const ListNoteItem = ({ note, onClick }) => {
  return (
    <ListItem disablePadding>
      <StyledBox>
        <StyledListItemButton onClick={() => onClick(note)}>
          <Box>
            <Typography variant="h5">{note.title}</Typography>
            <Typography>{shortify(note.description)}...</Typography>
            <Typography variant="caption">
              {new Date(note.createdAt).toDateString()}
            </Typography>
          </Box>
        </StyledListItemButton>
      </StyledBox>
    </ListItem>
  );
};

ListNoteItem.propTypes = {
  note: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
