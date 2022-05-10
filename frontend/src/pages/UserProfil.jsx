/* eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "@components/User";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import i18n from "../i18nextConfig";

// Fetch Playlists and display in Profil
// Fetch Favourite Artists and display in Profil
// Add functionality to Buttons (Show Playlists, Show Artists --> for now just show Playlists)
// Hide LogOut Button in Settings Drop Down
// give User choice to choose Upload Avatar

export default function UserProfil() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(
    localStorage.getItem("languageToggle")
  );
  function handleChange() {
    const temp = !checked;
    setChecked(temp);
    localStorage.setItem("languageToggle", temp);
    temp === true ? i18n.changeLanguage("en") : i18n.changeLanguage("de");
  }

  useEffect(() => {
    handleChange();
  }, []);

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
        <Button
          onClick={handleChange}
          sx={{ height: "50px", width: "50px", color: "text.primary" }}
        >
          {i18n.language}
        </Button>

        <SettingsIcon
          sx={{ marginLeft: "20px" }}
          onClick={() => navigate("/settings")}
        />
      </div>
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
    </div>
  );
}
