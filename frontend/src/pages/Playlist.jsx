import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Playlist.css";
import CardTracks from "../components/Cards/CardTracks";
import MenuBanner from "../components/Playlist/MenuBanner";
import { playlistsEndpoint } from "../components/API";

export default function Playlist(props) {
  const { setSongQueue, setAudioListToggle } = props;
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [playlistData, setPlaylistData] = useState();
  const [playlistTracks, setPlaylistTracks] = useState();
  const [playlistDataHasLoaded, setPlaylistDataHasLoaded] = useState(false);
  const [playlistTracksHasLoaded, setPlaylistTracksHasLoaded] = useState(false);

  // GETTING ALL DATA ABOUT THE PLAYLIST  (ON FIRST RENDER ONLY)

  useEffect(() => {
    // GET PLAYLIST'S GENERAL INFORMATION
    axios.get(`${playlistsEndpoint}/${params.playlistId}`).then((res) => {
      setPlaylistData(res.data);
      setPlaylistDataHasLoaded(true);
    });

    // GET TRACKS FOR THE PLAYLIST
    axios
      .get(`${playlistsEndpoint}/${params.playlistId}/tracks`)
      .then((res) => {
        setPlaylistTracks(res.data);
        setPlaylistTracksHasLoaded(true);
      });
  }, []);

  /*  console.log(playlistTracks); */

  if (playlistDataHasLoaded && playlistTracksHasLoaded) {
    return (
      <div>
        {/* BLACK BACKGROUND SECTION (TOP HALF) */}
        <div id="topSection">
          <ChevronLeftIcon
            sx={{
              color: "#f2f2f2",
              position: "absolute",
              top: "18px",
              left: "10px",
            }}
            onClick={() => navigate(`/search`)}
          />
          <div id="outerContainerForPlaylistCover">
            <div id="innerContainerForPlaylistCover">
              {/* PLAYLIST COVER */}
              <img
                id="playlistCover"
                src={
                  playlistData.playlist.cover === null ||
                  playlistData.playlist.cover === ""
                    ? "https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_1280.png"
                    : playlistData.playlist.cover
                }
                alt="playlist cover"
              />
            </div>
          </div>
          <div id="containerForPlaylistInfo">
            {/* PLAYLIST TITLE */}
            <h1 id="playlistTitle">{playlistData.playlist.title}</h1>
            {/* PLAYLIST DESCRIPTION */}
            <p id="playlistDescription">{playlistData.playlist.description}</p>
            {/* PLAYLIST CREATOR / USER */}
            <img
              id="playlistCreatorPicture"
              src={playlistData.user[0].userProfile.avatar}
              alt="playlist creator"
            />
            <p id="playlistCreatorName">{playlistData.user[0].username}</p>
            {/* PLAYLIST DURATION */}
            <p id="playlistDuration">
              {Math.round(playlistData.playlist.duration / 60000)} min
              {/* Seems there is no React module on npmjs for converting seconds to hh:mm
              Good plain JS modules:
              https://www.npmjs.com/package/humanize-duration
              https://github.com/RomainLt/convert-seconds-to-human#readme */}
            </p>
          </div>
        </div>
        {/* GRAY BACKGROUND SECTION (BOTTOM HALF) */}
        <MenuBanner />
        <div id="bottomSection">
          {playlistTracks !== null && playlistTracks.length !== 0 ? (
            <div>
              {playlistTracks.map((element) => (
                <CardTracks
                  onClick={() => {
                    setSongQueue([
                      {
                        name: element.title,
                        singer: element.artist.name,
                        cover: element.cover,
                        musicSrc: element.stream_url,
                      },
                    ]);
                  }}
                  setAudioListToggle={setAudioListToggle}
                  key={element.id}
                  cover={element.cover}
                  title={element.title}
                  artist={element.artist.name}
                />
              ))}
            </div>
          ) : (
            <p>{t("no-music-available")}</p>
          )}
        </div>
      </div>
    );
  }
  return <h4>{t("waiting-for-loading")}</h4>;
}

Playlist.propTypes = {
  setSongQueue: PropTypes.func,
  setAudioListToggle: PropTypes.func,
};
Playlist.defaultProps = {
  setSongQueue: () => {},
  setAudioListToggle: () => {},
};
