import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ROUTES } from "config/constants";
import { Link } from "react-router-dom";

export const RegisterText = () => (
  <Box p={2}>
    <Typography align="center">
      Don't have an account yet? <Link to={ROUTES.signUp}>Register</Link>
    </Typography>
  </Box>
);
