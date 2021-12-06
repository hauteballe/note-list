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
import MyNotesContainer from "pages/MyNotes/MyNotesContainer";
import SharedNotesContainer from "pages/SharedNotes/SharedNotesContainer";
import SignInContainer from "pages/SignIn/SignInContainer";
import NotFound from "pages/NotFound/NotFound";
import About from "pages/About/About";
import SignUp from "pages/SignUp/SignUpContainer";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Router basename={ROUTES.baseName}>
              <Switch>
                <Redirect exact from="/" to={ROUTES.myNotes} />
                <PrivateRoute path={ROUTES.myNotes}>
                  <MyNotesContainer />
                </PrivateRoute>
                <PrivateRoute path={ROUTES.sharedNotes}>
                  <SharedNotesContainer />
                </PrivateRoute>
                <Route path={ROUTES.signIn} component={SignInContainer} />
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
