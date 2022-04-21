import React from "react";
import User from "@components/User";
import Card from "@components/Card";
import LogoutButton from "@components/Logout";

export default function UserProfil() {
  return (
    <div>
      <LogoutButton />
      <User /* avatar="/" playlistcount="/" followingcount="/" userName="/" */
      />
      <Card /* cover="/" name="/" details="/" */ />
    </div>
  );
}
