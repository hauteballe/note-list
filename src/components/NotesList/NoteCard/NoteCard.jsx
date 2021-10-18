import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function NoteCard({ note, onClick }) {
  return (
    <Card sx={{ minWidth: 275, mt: "1rem", ml: "1rem" }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {note.title}
          </Typography>
          <Typography variant="h5" component="div">
            {note.description.slice(0, 20)}...
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {note.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NoteCard;
