import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axios from "axios";
import "./ArtistOverview.css";
import { useTranslation } from "react-i18next";
import CardTracks from "../components/Cards/CardTracks";
import BigCard from "../components/BigCard";

export default function ArtistOverview() {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [artistInfo, setArtistInfo] = useState();
  const [responseStatusArtist, setResponseStatusArtist] = useState();
  const [tracks, setTracks] = useState();
  const [albums, setAlbums] = useState();
  const [playlists, setPlaylists] = useState();
  /*   const [artistInfoLoaded, setArtistInfoLoaded] = useState(false); */

  // requesting artist information when site renders the first time
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/artists/${params.artistId}`)
      .then((response) => {
        setResponseStatusArtist(response.status);
        setArtistInfo(response.data);
      });
    // artist's tracks information
    axios
      .get(`http://localhost:5000/api/artists/${params.artistId}/tracks`)
      .then((response) => {
        setTracks(response.data);
      });
    // artist album information
    axios
      .get(`http://localhost:5000/api/artists/${params.artistId}/albums`)
      .then((response) => {
        setAlbums(response.data);
      });
    // artist playlist information
    axios
      .get(`http://localhost:5000/api/users/${params.artistId}/playlists`)
      .then((response) => {
        setPlaylists(response.data);
      });
  }, []);

  /*   console.log(artistInfo);
  console.log(tracks);
  console.log(albums); */

  return (
    <div>
      <div id="artist-main-container">
        {responseStatusArtist === 200 ? (
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
            <Avatar id="user-avatar" src={artistInfo?.avatar ?? null} />
            <br />
            <h1 id="user-userName">{artistInfo?.name ?? null}</h1>
            <p id="artist-description">{artistInfo?.description ?? null}</p>
          </div>
        ) : (
          t("waiting-for-loading")
        )}
        <div id="artist-body-container">
          {/* RENDER TRACKS OF ARTIST IF THERE ARE ANY */}
          {/* eslint-disable */}
          {tracks === undefined ? (
            <p>{t("waiting-for-loading")}</p>
          ) : tracks.length === 0 ? (
            <p className="not-available">{`No tracks of ${artistInfo.name} available.`}</p>
          ) : (
            <h2 className="section-headlines">{t("tracks")}</h2>
          )}
          {tracks === undefined
            ? null
            : tracks.map((track) => (
                <CardTracks
                  /* To Do: define onClick method */
                  key={track.id}
                  cover={track.cover}
                  title={track.title}
                  artist={track.artist.name}
                />
              ))}

          {/* RENDER ALBUMS OF ARTIST IF THERE ARE ANY */}
          {albums === undefined ? null : albums.length === 0 ? (
            <p className="not-available">{`No albums of ${artistInfo.name} available.`}</p>
          ) : (
            <h2 className="section-headlines">{t("albums")}</h2>
          )}
          <Grid container gap={2} sx={{ justifyContent: "space-between" }}>
            {albums === undefined
              ? null
              : albums.map((album) => (
                  <BigCard
                    /* To Do: define onClick method */
                    cover={
                      album.cover === "" || album.cover === null
                        ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                        : album.cover
                    }
                    title={album.title}
                    key={album.id}
                  />
                ))}
          </Grid>
          {/* RENDER PLAYLISTS OF ARTIST IF THERE ARE ANY */}
          {playlists === undefined ? null : playlists.length === 0 ? (
            <p className="not-available">{`No playlists of ${artistInfo.name} available`}</p>
          ) : (
            <h2 className="section-headlines">{t("playlists")}</h2>
          )}
          <Grid container gap={2} sx={{ justifyContent: "space-between" }}>
            {playlists === undefined
              ? null
              : playlists.map((pl) => (
                  <BigCard
                    /* To Do: define onClick method */
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

          {/* eslint-enable */}
        </div>
      </div>
    </div>
  );
}
