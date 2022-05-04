import React from "react";
import { useNavigate } from "react-router-dom";
import User from "@components/User";
import CardPlaylists from "@components/Cards/CardPlaylists";
import SettingsIcon from "@mui/icons-material/Settings";

// Fetch Playlists and display in Profil
// Fetch Favourite Artists and display in Profil
// Add functionality to Buttons (Show Playlists, Show Artists --> for now just show Playlists)
// Hide LogOut Button in Settings Drop Down
// give User choice to choose Upload Avatar

export default function UserProfil() {
  const navigate = useNavigate();

  return (
    <div>
      <SettingsIcon
        sx={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={() => navigate("/settings")}
      />
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <CardPlaylists /* cover="/" name="/" details="/" */ />
    </div>
  );
}
