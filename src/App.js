import { createTheme, ThemeProvider } from "@mui/material/styles";

import MyNotes from "./pages/MyNotes/MyNotes";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <MyNotes />
    </div>
  </ThemeProvider>
);

export default App;
