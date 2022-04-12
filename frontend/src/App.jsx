import React, { Suspense } from "react";
import Home from "@pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#EE4540",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#801336",
    },
  },
});

function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
