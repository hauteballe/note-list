import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import image from "../../images/main-image.png";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

import {
  SelectedBox,
  SelectedCard,
  SelectedCardActions,
  SelectedCardContent,
  SelectedTitle,
  SelectedDate,
  MainBox,
  MainCard,
  MainCardMedia,
} from "./styled";

const SelectedNote = ({ note }) => {
  return (
    <Box>
      {note ? (
        <SelectedBox>
          <SelectedCard>
            <SelectedCardActions disableSpacing>
              <IconButton aria-label="edit">
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
              <SelectedTitle color="text.secondary" gutterBottom>
                {note.title}
              </SelectedTitle>
              <Typography variant="h5" component="div">
                {note.description}...
              </Typography>
              <SelectedDate>{note.date}</SelectedDate>
            </SelectedCardContent>
          </SelectedCard>
        </SelectedBox>
      ) : (
        <MainBox>
          <MainCard sx={{ width: "100%", height: "500px" }}>
            <CardContent>
              <Typography variant="h4" component="h4">
                Select note to display
              </Typography>
            </CardContent>
            <MainCardMedia component="img" image={image} alt="main image" />
          </MainCard>
        </MainBox>
      )}
    </Box>
  );
};

SelectedNote.propTypes = {
  note: PropTypes.object,
};

export default SelectedNote;
