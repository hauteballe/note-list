import { Typography } from "@mui/material";

import { HeaderBox } from "./styled";

const CreateNoteHeader = () => (
  <HeaderBox>
    <Typography variant="h5" align="left">
      Add New Note
    </Typography>
  </HeaderBox>
);

export default CreateNoteHeader;
