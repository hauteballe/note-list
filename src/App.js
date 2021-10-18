import React from "react";
import MyNotes from "./pages/MyNotes/MyNotes";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyNotes />
      </div>
    </ThemeProvider>
  );
}

export default App;
