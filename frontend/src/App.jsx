import React, { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import SearchGenre from "@pages/SearchGenre";
import SearchResultGenre from "@pages/SearchResultGenre";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserProfil from "./pages/UserProfil";
import Search from "./pages/Search";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import themeGlobal from "./theme";

function App() {
  // add function to check if user is auth, and return a boolean into "user"
  const user = true;
  return (
    <Router>
      <Suspense fallback="loading">
        <ThemeProvider theme={themeGlobal}>
          <CssBaseline />

          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              {/* Search Route needs to be moved into Protected Route later on */}
              <Route
                path="/search"
                element={
                  <ProtectedRoute user={user}>
                    <Search />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute user={user}>
                    <UserProfil />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/search-genre"
                element={
                  <ProtectedRoute user={user}>
                    <SearchGenre />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/search-result-genre"
                element={
                  <ProtectedRoute user={user}>
                    <SearchResultGenre />
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
