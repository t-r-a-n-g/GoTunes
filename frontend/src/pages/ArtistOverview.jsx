import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axios from "axios";
import "./ArtistOverview.css";
import { useTranslation } from "react-i18next";
import CardTracks from "../components/Cards/CardTracks";
import BigCard from "../components/BigCard";
import { artistsEndpoint, usersEndpoint } from "../components/API";

export default function ArtistOverview(props) {
  const { setSongQueue, setAudioListToggle } = props;
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [artistInfo, setArtistInfo] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [playlists, setPlaylists] = useState();
  const [artistInfoLoaded, setArtistInfoLoaded] = useState(false);
  const [tracksLoaded, setTracksLoaded] = useState(false);
  const [albumsLoaded, setAlbumsLoaded] = useState(false);
  const [playlistsLoaded, setPlaylistsLoaded] = useState(false);

  const handleAudioListToggle = () => {
    setAudioListToggle(true);
    console.warn("Warteschlange off");
  };

  // requesting artist information
  useEffect(() => {
    let isMounted = true;
    axios.get(`${artistsEndpoint}/${params.artistId}`).then((response) => {
      if (isMounted) {
        setArtistInfo(response.data);
        setArtistInfoLoaded(true);
      }
    });
    // artist's tracks information
    axios
      .get(`${artistsEndpoint}/${params.artistId}/tracks`)
      .then((response) => {
        if (isMounted) {
          setTracks(response.data);
          setTracksLoaded(true);
        }
      });
    // artist album information
    axios
      .get(`${artistsEndpoint}/${params.artistId}/albums`)
      .then((response) => {
        if (isMounted) {
          setAlbums(response.data);
          setAlbumsLoaded(true);
        }
      });
    // artist playlist information
    axios
      .get(`${usersEndpoint}/${params.artistId}/playlists`)
      .then((response) => {
        if (isMounted) {
          setPlaylists(response.data);
          setPlaylistsLoaded(true);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  /*   console.log(artistInfo);
  console.log(tracks);
  console.log(albums); */

  if (artistInfoLoaded && tracksLoaded && albumsLoaded && playlistsLoaded) {
    return (
      <div>
        <div id="artist-main-container">
          <div id="artist-head-container">
            <ChevronLeftIcon
              sx={{
                color: "#f2f2f2",
                position: "absolute",
                top: "18px",
                left: "10px",
              }}
              onClick={() => navigate(`/search`)}
            />
            <Avatar id="user-avatar" src={artistInfo.avatar} />
            <br />
            <h1 id="user-userName">{artistInfo.name}</h1>
            <p id="artist-description">{artistInfo.description}</p>
          </div>

          {/* DISPLAY MESSAGE WHEN ARTIST / USER HAS NOT UPLOADED ANY MUSIC */}
          <div id="artist-body-container">
            {(tracks === null || tracks.length === 0) &&
            (albums === null || albums.length === 0) &&
            (playlists === null || playlists.length === 0)
              ? t("no-music-available")
              : null}

            {/* RENDER TRACKS OF ARTIST IF THERE ARE ANY */}
            {tracks !== null && tracks.length !== 0 ? (
              <div>
                <h2 className="section-headlines">{t("tracks")}</h2>
                {tracks.map((track) => (
                  <CardTracks
                    onClick={() => {
                      setSongQueue([
                        {
                          name: track.title,
                          singer: track.artist.name,
                          cover: track.cover,
                          musicSrc: track.stream_url,
                        },
                      ]);
                      handleAudioListToggle();
                    }}
                    key={track.id}
                    cover={track.cover}
                    title={track.title}
                    artist={track.artist.name}
                  />
                ))}
              </div>
            ) : null}

            {/* RENDER ALBUMS OF ARTIST IF THERE ARE ANY */}
            {albums !== null && albums.length !== 0 ? (
              <div>
                <h2 className="section-headlines">{t("albums")}</h2>
                <Grid
                  container
                  gap={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  {albums.map((album) => (
                    <BigCard
                      onClick={() => navigate(`/albums/${album.id}`)}
                      cover={
                        album.cover === "" || album.cover === null
                          ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                          : album.cover
                      }
                      title={album.title}
                      key={album.id}
                    />
                  ))}
                </Grid>{" "}
              </div>
            ) : null}

            {/* RENDER PLAYLISTS OF ARTIST IF THERE ARE ANY */}
            {playlists !== null && playlists.length !== 0 ? (
              <div>
                <h2 className="section-headlines">{t("playlists")}</h2>
                <Grid
                  container
                  gap={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  {playlists.map((pl) => (
                    <BigCard
                      onClick={() => navigate(`/playlists/${pl.playlist.id}`)}
                      cover={
                        pl.playlist.cover === "" || pl.playlist.cover === null
                          ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                          : pl.playlist.cover
                      }
                      title={pl.playlist.title}
                      key={pl.playlist.id}
                    />
                  ))}
                </Grid>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
  return <h4>{t("waiting-for-loading")}</h4>;
}

ArtistOverview.propTypes = {
  setSongQueue: PropTypes.func,
  setAudioListToggle: PropTypes.string,
};

ArtistOverview.defaultProps = {
  setSongQueue: () => {},
  setAudioListToggle: null,
};
