import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NOTES } from "config/constants";
import { useEffect } from "react";

import MyNotes from "./pages/MyNotes/MyNotes";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  useEffect(() => {
    const json = JSON.stringify(NOTES);
    localStorage.setItem("notes", json);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyNotes />
      </div>
    </ThemeProvider>
  );
}

export default App;
