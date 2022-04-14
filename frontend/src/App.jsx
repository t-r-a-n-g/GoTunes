import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import themeGlobal from "./theme";
import "./App.css";

function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={themeGlobal}>
        <CssBaseline />
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
