import { Grid } from "@mui/material";

import image from "images/main.png";

import { ImageBox, StyledGrid } from "./styled";

const EmptyView = () => (
  <StyledGrid container justifyContent="center" alignItems="center">
    <Grid item>
      <ImageBox component="img" src={image} alt="main page" />
    </Grid>
  </StyledGrid>
);

export default EmptyView;
