import React from "react";
import User from "@components/User";
import CardPlaylists from "@components/Cards/CardPlaylists";
import LogoutButton from "@components/Authentification/Logout";

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
