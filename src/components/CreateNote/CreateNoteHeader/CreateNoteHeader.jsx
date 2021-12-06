import React from "react";
import { Typography } from "@mui/material";

import { HeaderBox } from "./styled";

const CreateNoteHeader = () => (
  <HeaderBox data-testid="create-note-box">
    <Typography variant="h5" align="left" data-testid="create-note-description">
      Add New Note
    </Typography>
  </HeaderBox>
);

export default CreateNoteHeader;
