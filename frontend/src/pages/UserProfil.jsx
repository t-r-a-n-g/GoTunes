import React from "react";
import User from "@components/User";
import Card from "@components/Card";
import LogoutButton from "@components/Logout";
import BigCard from "@components/BigCard";
import CreatePlaylist from "@components/CreatePlaylistButton";

export default function UserProfil() {
  return (
    <div>
      <LogoutButton />
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <Card /* cover="/" name="/" details="/" */ />
      <BigCard /* cover="/" title="/" */ />
      <CreatePlaylist />
    </div>
  );
}
