import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import image from "images/not-found.png";

import { StyledBox, StyledGrid } from "./styled";

const NotFound = () => (
  <Box>
    <StyledGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <StyledBox component="img" src={image} alt="not found" />
      </Grid>
    </StyledGrid>
  </Box>
);

export default NotFound;
