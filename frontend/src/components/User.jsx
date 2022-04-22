import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./User.css";

function User({ avatar, playlistcount, followingcount, userName }) {
  const { t } = useTranslation();
  return (
    <div id="user-container">
      <Avatar id="user-avatar" src={avatar} />
      <br />
      <h1 id="user-userName">{userName}</h1>
      <Button sx={{ px: 8, py: 1 }} variant="contained">
        {t("edit-profil-button")}
      </Button>
      <div id="user-button-container">
        <div id="user-playlistcount-container">
          <p id="user-playlistcount">{playlistcount}</p>
          <Button variant="text">{t("user-profil-playlist")}</Button>
        </div>
        <div id="user-followingcount-container">
          <p id="user-followingcount">{followingcount}</p>
          <Button variant="text">{t("user-profil-following")}</Button>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  playlistcount: PropTypes.number,
  followingcount: PropTypes.number,
  userName: PropTypes.string,
};

User.defaultProps = {
  avatar:
    "https://www.seekpng.com/png/detail/60-608286_kanye-west-is-the-avatar-kanye-avatar.png",
  userName: "User",
  playlistcount: 5,
  followingcount: 10,
};
export default User;
