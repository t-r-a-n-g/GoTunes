import React from "react";
import User from "@components/User";
import CardTracks from "@components/CardTracks";
import LogoutButton from "@components/Logout";

export default function UserProfil() {
  return (
    <div>
      <LogoutButton />
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <CardTracks /* cover="/" name="/" details="/" */ />
    </div>
  );
}
