import AddIcon from "@mui/icons-material/Add";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { Card, IconButton } from "@mui/material";
import { PanelCard } from "./styled";

const NotesActionsPanel = () => {
  return (
    <PanelCard>
      <IconButton color="primary" aria-label="add picture" component="span">
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
