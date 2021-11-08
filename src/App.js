import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import React from "react";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { ROUTES } from "config/constants";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import MyNotes from "./pages/MyNotes/MyNotes";
import "./styles.css";
import SharedNotes from "pages/SharedNotes/SharedNotes";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import { add } from "./utils/redux/features/addUser/userSlice";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(add(foundUser.email));
    }
    setIsLoading(false);
  });

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <Box sx={{ display: "flex", color: "secondary" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Router basename={ROUTES.baseName}>
          <Switch>
            <Redirect exact from={"/"} to={ROUTES.myNotes} />
            <PrivateRoute path={ROUTES.myNotes}>
              <MyNotes />
            </PrivateRoute>
            <PrivateRoute path={ROUTES.sharedNotes}>
              <SharedNotes />
            </PrivateRoute>
            <Route path={ROUTES.about}>
              <About />
            </Route>
            <Route path={ROUTES.signIn}>
              <SignIn />
            </Route>
            <Route path={ROUTES.signUp}>
              <SignUp />
            </Route>
            <Route path={ROUTES.notFound}>
              <NotFound />
            </Route>
            <Redirect from="*" to={ROUTES.notFound} />
          </Switch>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
