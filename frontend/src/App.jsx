import React, { useState, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import SearchResultGenre from "./pages/SearchResultGenre";
import SearchGenre from "./pages/SearchGenre";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserProfil from "./pages/UserProfil";
import Search from "./pages/Search";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

import themeGlobal from "./theme";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  // add function to check if user is auth, and return a boolean into "user"
  const user = true;

  // state for songQueue
  const [songQueue, setSongQueue] = useState([]);

  // This creates a variable representing the audio element. To connect the player with buttons (our own controls),
  // we can then call its methods, such as audioInstance.pause().
  /*  const [audioInstance, setAudioInstance] = useState(null); */

  // config options for the player (audioLists is current songQueue)
  const playerOptions = {
    audioLists: songQueue,
    mode: "full",
    showDownload: false,
    theme: "dark",
  };

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
                element={<Search setSongQueue={setSongQueue} />}
              />

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
            <MusicPlayer playerOptions={playerOptions} />
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
