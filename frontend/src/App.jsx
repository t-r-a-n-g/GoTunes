import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserProfil from "./pages/UserProfil";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import themeGlobal from "./theme";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <ThemeProvider theme={themeGlobal}>
          <CssBaseline />

          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route exact path="/login" element={<Login />} />
              <Route excat path="/registration" element={<Registration />} />
              <Route
                excat
                path="/profile"
                element={
                  <ProtectedRoute>
                    <UserProfil />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
