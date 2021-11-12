import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { store, persistor } from "store";
import { theme } from "theme";
import { ROUTES } from "config/constants";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

import MyNotes from "pages/MyNotes/MyNotes";
import SignIn from "pages/SignIn/SignIn";
import NotFound from "pages/NotFound/NotFound";
import About from "pages/About/About";
import SignUp from "pages/SignUp/SignUp";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Router>
              <Switch>
                <Redirect exact from="/" to={ROUTES.myNotes} />
                <PrivateRoute path={ROUTES.myNotes}>
                  <MyNotes />
                </PrivateRoute>
                <Route path={ROUTES.signIn} component={SignIn} />
                <Route path={ROUTES.signUp} component={SignUp} />
                <Route path={ROUTES.about} component={About} />
                <Route path={ROUTES.notFound} component={NotFound} />
                <Redirect from="*" to={ROUTES.notFound} />
              </Switch>
            </Router>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
