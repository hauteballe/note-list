import { Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";

const DisplayedNoteView = ({ note, onEditMode }) => {
  return (
    <Box p={2}>
      <Box
        sx={{
          backgroundColor: "#d0d0d042",
          width: "100%",
          height: "300px",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "center",
            height: "40px",
            boxShadow: "0 4px 3px -3px #1976d2",
            padding: "10px",
          }}
        >
          <IconButton onClick={onEditMode}>
            <ModeEditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>
        <Box p={4}>
          <Typography variant="h4">{note.title}</Typography>
          <Typography>{note.description}</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            {new Date(note.createdAt).toDateString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayedNoteView;
