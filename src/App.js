import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ROUTES } from "config/constants";

import MyNotes from "./pages/MyNotes/MyNotes";
import "./styles.css";
import SharedNotes from "pages/SharedNotes/SharedNotes";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Router basename={ROUTES.baseName}>
        <Switch>
          <Redirect exact from={"/"} to={ROUTES.myNotes} />
          <Route path={ROUTES.myNotes}>
            <MyNotes />
          </Route>
          <Route path={ROUTES.sharedNotes}>
            <SharedNotes />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.notFound}>
            <NotFound />
          </Route>
          <Redirect from="*" to={ROUTES.notFound} />
        </Switch>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;