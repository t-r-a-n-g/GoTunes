import React, { useState, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Library from "@pages/Library";
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
  // const [audioInstance, setAudioInstance] = useState(null);

  // state for changing responsive mode
  const [responsiveToggle, setResponsiveToggle] = useState(false);

  // config options for the player (audioLists is current songQueue)
  const playerOptions = {
    audioLists: songQueue,
    mode: "full",
    showDownload: false,
    theme: "dark",
    showThemeSwitch: false,
    showReload: false,
    responsive: responsiveToggle,
    defaultPlayMode: "shufflePlay",
    toggleMode: false,
    glassBg: false,
    autoHiddenCover: false,
    onCoverClick() {
      console.warn(`responsive: ${responsiveToggle}`);
      setResponsiveToggle(!responsiveToggle);
    },

    // getAudioInstance(instance) {
    //   setAudioInstance(instance);
    // },
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
              <Route
                path="/search"
                element={
                  <ProtectedRoute>
                    <Search setSongQueue={setSongQueue} />
                  </ProtectedRoute>
                }
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
              <Route
                path="/library"
                element={
                  <ProtectedRoute user={user}>
                    <Library />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <div id="playerContainer">
              <div id="playerHeartPiece">
                <MusicPlayer playerOptions={playerOptions} />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
