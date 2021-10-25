import { Card, CardMedia } from "@mui/material";

import Header from "components/Header/Header";
import image from "images/notfound-image.png";

import { StyledBox } from "./styled";


const NotFound = () => (
    <StyledBox>
        <Header />
        <Card sx={{ border: "none", maxWidth: "100vw", maxHeight: "100vw"}}>
      <CardMedia
        component="img"
        alt="not found image"
        sx={{height: "94vh" }}
        image={image}
      />
        </Card>
    </StyledBox>)

export default NotFound;