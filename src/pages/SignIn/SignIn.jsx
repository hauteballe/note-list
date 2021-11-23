import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";

import { RegisterText } from "./RegisterText";
import { SignInForm } from "./SignInForm";
import { SignInHeader } from "./SignInHeader";
import { StyledGrid } from "./styled";

const SignIn = ({ onSubmit }) => (
  <Container maxWidth="xs" disableGutters>
    <StyledGrid container alignItems="center">
      <Grid item xs={12}>
        <Grid container direction="column">
          <Grid item>
            <SignInHeader />
          </Grid>
          <Grid item>
            <SignInForm onSubmit={onSubmit} />
          </Grid>
          <Grid item>
            <RegisterText />
          </Grid>
        </Grid>
      </Grid>
    </StyledGrid>
  </Container>
);

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
