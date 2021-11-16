import { Box, Grid } from "@mui/material";
import image from "images/main.png";

const EmptyView = () => {
  return (
    <Grid
      sx={{ height: "100%" }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box
          component="img"
          sx={{ height: "400px" }}
          src={image}
          alt="main page"
        />
      </Grid>
    </Grid>
  );
};

export default EmptyView;
