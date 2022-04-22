import React, { useState, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import SearchResultGenre from "./pages/SearchResultGenre";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserProfil from "./pages/UserProfil";
import Search from "./pages/Search";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import MusicPlayerTestPage from "./pages/MusicPlayerTestPage";
import themeGlobal from "./theme";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  // add function to check if user is auth, and return a boolean into "user"
  const user = true;

  // state for songQueue
  const [songQueue, setSongQueue] = useState([]);

  // This creates a variable representing the audio element. To connect the player with buttons (our own controls),
  // we can then call its methods, such as audioInstance.pause().
  const [audioInstance, setAudioInstance] = useState(null);

  // config options for the player (audioLists is current songQueue)
  const playerOptions = {
    audioLists: songQueue,
    mode: "full",
    showDownload: false,
    theme: "dark",
    getAudioInstance(instance) {
      setAudioInstance(instance);
    },
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
                path="/MusicPlayerTestPage"
                element={<MusicPlayerTestPage />}
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
                    <SearchResultGenre />
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

            <div id="playerContainer">
              <div id="playerHeartPiece">
                <MusicPlayer playerOptions={playerOptions} />
              </div>
              <button type="button" onClick={() => audioInstance.playPrev()}>
                Previous track
              </button>
              <button type="button" onClick={() => audioInstance.togglePlay()}>
                Play / Pause
              </button>
              <button type="button" onClick={() => audioInstance.playNext()}>
                Next track
              </button>
            </div>
          </div>
        </ThemeProvider>
      </Suspense>
    </Router>
  );
}

export default App;
