import React from "react";
import { useNavigate } from "react-router-dom";
import User from "@components/User";
import CardPlaylists from "@components/Cards/CardPlaylists";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Fetch Playlists and display in Profil
// Fetch Favourite Artists and display in Profil
// Add functionality to Buttons (Show Playlists, Show Artists --> for now just show Playlists)
// Hide LogOut Button in Settings Drop Down
// give User choice to choose Upload Avatar

export default function UserProfil() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Stack direction="row" alignItems="baseline">
          <Typography>EN</Typography>
          <Switch defaultChecked />
          <Typography>DE</Typography>
        </Stack>

        <SettingsIcon
          sx={{ marginLeft: "20px" }}
          onClick={() => navigate("/settings")}
        />
      </div>
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <CardPlaylists /* cover="/" name="/" details="/" */ />
    </div>
  );
}
