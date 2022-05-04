import React, { useState, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import MusicPlayerExtendedButtons from "./components/MusicPlayerExtendetButtons";
import Library from "./pages/Library";
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
import Playlist from "./pages/Playlist";
import SiteNav from "./components/SiteNav";

function App() {
  // state for songQueue
  const [songQueue, setSongQueue] = useState([]);

  // state for choosing between Soundcloud and internal playlists source
  // eslint-disable-next-line
  const [playlistSource, setPlaylistSource] = useState("soundcloud");

  // This creates a variable representing the audio element. To connect the player with buttons (our own controls),
  // we can then call its methods, such as audioInstance.pause().
  // const [audioInstance, setAudioInstance] = useState(null);

  // state for changing responsive mode
  const [responsiveToggle, setResponsiveToggle] = useState(false);

  // state for custom shuffle button
  const [playModeOrder, setPlayModeOrder] = useState("order");

  // state for audio list aka "Warteschlange"
  const [audioListToggle, setAudioListToggle] = useState(true);

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
    showPlayMode: false,
    toggleMode: false,
    glassBg: false,
    // TO DO: SPACEBAR-OPTION NOT WORKING PROBABLY
    spaceBar: true,
    showMediaSession: true,
    autoHiddenCover: false,
    mobileMediaQuery:
      "(max-width: 1000000px) and (orientation: landscape), (max-width: 1000000px) and (orientation: portrait)",
    clearPriorAudioLists: audioListToggle,
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
                    <Search
                      setSongQueue={setSongQueue}
                      setAudioListToggle={setAudioListToggle}
                    />
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
              <Route
                path="/library"
                element={
                  <ProtectedRoute>
                    <Library />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/playlists/:playlistId"
                element={
                  <ProtectedRoute>
                    <Playlist
                      playlistSource={playlistSource}
                      setSongQueue={setSongQueue}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="/*" element={<SiteNav />} />
            </Routes>

            <div id="playerContainer">
              <div id="playerHeartPiece">
                <MusicPlayer playerOptions={playerOptions} />
              </div>
            </div>
            <SiteNav />
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
