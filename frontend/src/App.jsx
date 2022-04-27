import React, { useState, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import MusicPlayerExtendedButtons from "@components/MusicPlayerExtendetButtons";
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
  // state for songQueue
  const [songQueue, setSongQueue] = useState([]);

  // This creates a variable representing the audio element. To connect the player with buttons (our own controls),
  // we can then call its methods, such as audioInstance.pause().
  // const [audioInstance, setAudioInstance] = useState(null);

  // state for changing responsive mode
  const [responsiveToggle, setResponsiveToggle] = useState(false);

  // state for custom shuffle button
  const [playModeOrder, setPlayModeOrder] = useState("order");

  // config options for the player (audioLists is current songQueue)
  const playerOptions = {
    audioLists: songQueue,
    mode: "full",
    showDownload: false,
    theme: "dark",
    showThemeSwitch: false,
    showReload: false,
    responsive: responsiveToggle,
    playMode: playModeOrder,
    toggleMode: false,
    glassBg: false,
    autoHiddenCover: false,
    mobileMediaQuery:
      "(max-width: 1000000px) and (orientation: landscape), (max-width: 1000000px) and (orientation: portrait)",
    showMediaSession: true,
    clearPriorAudioLists: true,
    extendsContent: (
      <MusicPlayerExtendedButtons
        playModeOrder={playModeOrder}
        setPlayModeOrder={setPlayModeOrder}
      />
    ),

    onCoverClick() {
      console.warn(`responsive: ${responsiveToggle}`);
      setResponsiveToggle(!responsiveToggle);
    },
    // TO DO: CHECK IF LINES BELOW ARE NECCESSARY OR COULD BE DELETED
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
                  <ProtectedRoute>
                    <SearchGenre />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/search-result-genre"
                element={
                  <ProtectedRoute>
                    <SearchResultGenre />
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
