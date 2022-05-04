import React from "react";
import User from "@components/User";
import CardPlaylists from "@components/Cards/CardPlaylists";
import LogoutButton from "@components/Authentification/Logout";

// Fetch Playlists and display in Profil
// Fetch Favourite Artists and display in Profil
// Add functionality to Buttons (Show Playlists, Show Artists --> for now just show Playlists)
// Hide LogOut Button in Settings Drop Down
// give User choice to choose Upload Avatar

export default function UserProfil() {
  return (
    <div>
      <LogoutButton />
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <CardPlaylists /* cover="/" name="/" details="/" */ />
    </div>
  );
}
