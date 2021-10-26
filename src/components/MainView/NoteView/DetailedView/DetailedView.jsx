import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

import {
  SelectedBox,
  SelectedCard,
  SelectedCardActions,
  SelectedCardContent,
  SelectedTitle,
  SelectedDate,
} from "./styled";

const DetailedView = ({ note, onEditMode }) => (
  <SelectedBox>
    <SelectedCard>
      <SelectedCardActions disableSpacing>
        <IconButton aria-label="edit" onClick={onEditMode}>
          <ModeEditOutlineIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </SelectedCardActions>
      <SelectedCardContent>
        <SelectedTitle gutterBottom>{note.title}</SelectedTitle>
        <Typography variant="h5" component="div">
          {note.description}...
        </Typography>
        <SelectedDate>{note.date}</SelectedDate>
      </SelectedCardContent>
    </SelectedCard>
  </SelectedBox>
);

DetailedView.propTypes = {
  note: PropTypes.object,
  onEditMode: PropTypes.func,
};

export default DetailedView;
