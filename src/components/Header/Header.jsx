import { ExitToApp } from "@mui/icons-material";
import { AppBar, IconButton, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ROUTES } from "config/constants";

import {
  HeaderBox,
  HeaderToolbar,
  HeaderLink,
  ButtonsBox,
  HeaderLogo,
} from "./styled";
import { remove } from "../../utils/redux/features/addUser/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const redirectToSignIn = () => {
    history.push(ROUTES.signIn);
  };

  const onClick = () => {
    localStorage.removeItem("user");
    dispatch(remove(user));
    redirectToSignIn();
  };

  return (
    <HeaderBox>
      <AppBar position="static">
        <HeaderToolbar>
          <HeaderLink to={ROUTES.myNotes}>
            <HeaderLogo variant="h5" component="span">
              Notes app
            </HeaderLogo>
          </HeaderLink>
          <ButtonsBox>
            <HeaderLink to={ROUTES.myNotes}>
              <Button variant="text">MY NOTES</Button>
            </HeaderLink>
            <HeaderLink to={ROUTES.sharedNotes}>
              <Button variant="text">SHARED NOTES</Button>
            </HeaderLink>
            <HeaderLink to={ROUTES.about}>
              <Button variant="text">ABOUT</Button>
            </HeaderLink>
            {user.email ? (
              <IconButton color="inherit" onClick={onClick}>
                <ExitToApp />
              </IconButton>
            ) : (
              <HeaderLink to={ROUTES.signIn}>
                <Button variant="text">Sign In</Button>
              </HeaderLink>
            )}
          </ButtonsBox>
        </HeaderToolbar>
      </AppBar>
    </HeaderBox>
  );
};

export default Header;
