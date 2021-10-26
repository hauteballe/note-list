import PropTypes from "prop-types";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import shortify from "utils/shortify";

import { NotesCard, NotesCardTitle, NotesCardDate } from "./styled";

const NoteCard = ({ note, onClick }) => (
  <NotesCard>
    <CardActionArea onClick={onClick}>
      <CardContent>
        <NotesCardTitle gutterBottom>{note.title}</NotesCardTitle>
        <Typography variant="h5" component="div">
          {shortify(note.description)}...
        </Typography>
        <NotesCardDate>{note.date}</NotesCardDate>
      </CardContent>
    </CardActionArea>
  </NotesCard>
);

NotesCard.propTypes = {
  note: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default NoteCard;
