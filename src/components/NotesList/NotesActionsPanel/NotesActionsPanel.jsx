import AddIcon from "@mui/icons-material/Add";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { IconButton } from "@mui/material";
import { PanelCard } from "./styled";

const NotesActionsPanel = ({ openAddNotePanel }) => {
  return (
    <PanelCard>
      <IconButton
        onClick={openAddNotePanel}
        color="primary"
        aria-label="add picture"
        component="span"
      >
        <AddIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="date filter picture"
        component="span"
      >
        <DateRangeIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="sort by date picture"
        component="span"
      >
        <SortByAlphaIcon />
      </IconButton>
    </PanelCard>
  );
};

export default NotesActionsPanel;
