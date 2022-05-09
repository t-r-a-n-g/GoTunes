import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Playlist.css";
import CardTracks from "../components/Cards/CardTracks";
import MenuBanner from "../components/Playlist/MenuBanner";
import { albumsEndpoint } from "../components/API";

/* THIS IS A COPY OF THE PLAYLIST PAGE */

export default function Album(props) {
  const { setSongQueue, setAudioListToggle } = props;
  const params = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [albumData, setAlbumData] = useState();
  const [albumTracks, setAlbumTracks] = useState();
  const [albumDataHasLoaded, setAlbumDataHasLoaded] = useState(false);
  const [albumTracksHasLoaded, setAlbumTracksHasLoaded] = useState(false);

  // GETTING ALL DATA ABOUT THE ALBUM  (ON FIRST RENDER ONLY)

  useEffect(() => {
    // GET ALBUM'S GENERAL INFORMATION
    axios.get(`${albumsEndpoint}/${params.albumId}`).then((res) => {
      setAlbumData(res.data);
      setAlbumDataHasLoaded(true);
    });

    // GET TRACKS FOR THE ALBUM
    axios.get(`${albumsEndpoint}/${params.albumId}/tracks`).then((res) => {
      setAlbumTracks(res.data);
      setAlbumTracksHasLoaded(true);
    });
  }, []);

  if (albumDataHasLoaded && albumTracksHasLoaded) {
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
              {/* ALBUM COVER */}
              <img
                id="playlistCover"
                src={
                  albumData.cover === null || albumData.cover === ""
                    ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                    : albumData.cover
                }
                alt="album cover"
              />
            </div>
          </div>
          <div id="containerForPlaylistInfo">
            {/* ALBUM TITLE */}
            <h1 id="playlistTitle">{albumData.title}</h1>
            {/* ALBUM DESCRIPTION */}
            <p id="playlistDescription">{albumData.description}</p>
            {/* ARTIST */}
            <img
              id="playlistCreatorPicture"
              src={albumData.artist.avatar}
              alt="artist"
            />
            <p id="playlistCreatorName">{albumData.artist.name}</p>
            {/* ALBUM DURATION */}
            <p id="playlistDuration">
              {Math.round(albumData.duration / 60000)} min
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
          {albumTracks !== null && albumTracks.length !== 0 ? (
            <div>
              {albumTracks.map((element) => (
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

Album.propTypes = {
  setSongQueue: PropTypes.func,
  setAudioListToggle: PropTypes.func,
};
Album.defaultProps = {
  setSongQueue: () => {},
  setAudioListToggle: () => {},
};
