import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const CreateNoteHeader = () => (
  <Box p={1} pb={2} sx={{ color: "#0000008a" }}>
    <Typography variant="h5" align="left">
      Add New Note
    </Typography>
  </Box>
);

export default CreateNoteHeader;
