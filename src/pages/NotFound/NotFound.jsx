import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import image from "images/not-found.png";

const NotFound = () => (
  <Box>
    <Grid
      sx={{ height: "100vh" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box
          component="img"
          sx={{ height: "500px" }}
          src={image}
          alt="not found"
        />
      </Grid>
    </Grid>
  </Box>
);

export default NotFound;
