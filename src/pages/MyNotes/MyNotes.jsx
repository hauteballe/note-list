import { Box, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LinearProgress from "@mui/material/LinearProgress";

import Header from "components/Header/Header";
import NotesList from "components/NotesList/NotesList";
import { VIEW_TYPE } from "config/constants";
import usePresenter from "pages/MyNotes/hooks/usePresenter";

const MyNotes = () => {
  const {
    notes,
    setNotes,
    hasMoreNotes,
    loadingNotes,
    fetchMoreNotes,
    fetchFilteredNotes,
    getView,
    selectNote,
    setViewType,
  } = usePresenter();
  return (
    <Box sx={{ height: "100vh" }}>
      <Header />
      <Box sx={{ height: "calc(100% - 64px)" }}>
        <Grid container spacing={1} sx={{ height: "100%" }}>
          <Grid item sx={{ height: "100%" }}>
            {loadingNotes ? (
              <Box p={1} py={2} sx={{ width: "250px" }}>
                <LinearProgress />
              </Box>
            ) : (
              <NotesList
                notes={notes}
                setNotes={setNotes}
                itemProps={{
                  onClick: selectNote,
                }}
                hasMoreNotes={hasMoreNotes}
                fetchMoreNotes={fetchMoreNotes}
                fetchFilteredNotes={fetchFilteredNotes}
              />
            )}
          </Grid>
          <Grid item sx={{ flex: "1" }}>
            {getView()}
          </Grid>
        </Grid>
      </Box>
      <Fab
        onClick={() => setViewType(VIEW_TYPE.CREATE)}
        color="primary"
        aria-label="add"
        sx={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default MyNotes;
