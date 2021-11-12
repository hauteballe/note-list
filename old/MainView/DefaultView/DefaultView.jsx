import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import image from "images/main-image.png";

import { MainBox, MainCard, MainCardMedia } from "./styled";

const DefaultView = () => (
  <MainBox>
    <MainCard sx={{ width: "100%", height: "500px" }}>
      <CardContent>
        <Typography variant="h4" component="h4">
          Select note to display
        </Typography>
      </CardContent>
      <MainCardMedia component="img" image={image} alt="main image" />
    </MainCard>
  </MainBox>
);

export default DefaultView;
