import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./User.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CardPlaylists from "./Cards/CardPlaylists";
import FavArtist from "./User Profil/DummyFavArtist";
import UserContext from "../contexts/UserContext";

function User({ playlistcount, followingcount }) {
  const { t } = useTranslation();
  const [playlist, setPlayList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [openPlaylist, setOpenPlaylist] = React.useState(false);
  const [openArtist, setOpenArtist] = React.useState(false);
  const handleOpenPlaylist = () => setOpenPlaylist(true);
  const handleClosePlaylist = () => setOpenPlaylist(false);
  const handleOpenArtist = () => setOpenArtist(true);
  const handleCloseArtist = () => setOpenArtist(false);
  const { user } = useContext(UserContext);
  const userID = user.id;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/users/${userID}/playlists?source=internal`
      )
      .then((res) => {
        /*         console.error("Playlist query: ", res); */
        setPlayList(res.data);
        /*         console.log(res.data); */
        setDataLoaded(true);
      });
  }, []);

  return (
    <div id="user-container">
      <Avatar id="user-avatar" src={user.userProfile.avatar} />
      <br />
      <h1 id="user-userName">{user.username}</h1>
      <Button
        sx={{ px: 8, py: 1, color: "#f2f2f2" }}
        variant="outlined"
        size="small"
        onClick={() => navigate("/editprofile")}
      >
        {t("edit-profil-button")}
      </Button>
      <div id="user-button-container">
        <div id="user-playlistcount-container">
          <p id="user-playlistcount">{playlistcount}</p>
          <Button
            variant="text"
            onClick={() => {
              handleOpenPlaylist();
              handleCloseArtist();
            }}
          >
            {t("user-profil-playlist")}
          </Button>
        </div>
        <div id="user-followingcount-container">
          <p id="user-followingcount">{followingcount}</p>
          <Button
            variant="text"
            onClick={() => {
              handleClosePlaylist();
              handleOpenArtist();
            }}
          >
            {t("user-profil-following")}
          </Button>
        </div>
      </div>
      {dataLoaded && openPlaylist
        ? playlist.map((pl) => {
            return (
              <CardPlaylists
                cover={
                  pl.playlist.cover === "" || pl.playlist.cover === null
                    ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                    : pl.playlist.cover
                }
                title={pl.playlist.title}
                key={pl.playlistId}
              />
            );
          })
        : null}
      {openArtist ? <FavArtist /> : null}
    </div>
  );
}

User.propTypes = {
  playlistcount: PropTypes.number,
  followingcount: PropTypes.number,
};

User.defaultProps = {
  playlistcount: 5,
  followingcount: 10,
};
export default User;
