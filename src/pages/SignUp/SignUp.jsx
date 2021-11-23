import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";

import SignUpForm from "./SignUpForm";
import { SignUpHeader } from "./SignUpHeader";
import { StyledGrid } from "./styled";

const SignUp = ({ onSubmit }) => (
  <Container maxWidth="xs" disableGutters>
    <StyledGrid container alignItems="center">
      <Grid item xs={12}>
        <Grid container direction="column">
          <Grid item>
            <SignUpHeader />
          </Grid>
          <Grid item>
            <SignUpForm onSubmit={onSubmit} />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  </Container>
);

SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
