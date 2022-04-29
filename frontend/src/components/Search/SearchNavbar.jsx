import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./SearchNavbar.css";
import {
  searchArtistsEndpoint,
  searchTracksEndpoint,
  searchAlbumsEndpoint,
  searchPlaylistsEndpoint,
  searchAllEndpoint,
} from "../API";

export default function SearchNavbar(props) {
  const { t } = useTranslation();
  const { setSearchEndpoint, searchFilter, setSearchFilter } = props;

  return (
    <Stack direction="row" spacing={4}>
      <Chip
        className="nav-chip"
        label={t("search-all")}
        color={searchFilter === "All" ? "secondary" : "default"}
        variant={searchFilter === "All" ? "filled" : "outlined"}
        // To do: modify onClick for "All"
        onClick={() => {
          setSearchEndpoint(searchAllEndpoint);
          setSearchFilter("All");
        }}
      />
      <Chip
        className="nav-chip"
        label="Tracks"
        color={searchFilter === "Tracks" ? "secondary" : "default"}
        variant={searchFilter === "Tracks" ? "filled" : "outlined"}
        onClick={() => {
          setSearchEndpoint(searchTracksEndpoint);
          setSearchFilter("Tracks");
        }}
      />
      <Chip
        id="chipArtist"
        className="nav-chip"
        label={t("artists")}
        color={searchFilter === "Artists" ? "secondary" : "default"}
        variant={searchFilter === "Artists" ? "filled" : "outlined"}
        onClick={() => {
          setSearchEndpoint(searchArtistsEndpoint);
          setSearchFilter("Artists");
        }}
      />
      <Chip
        className="nav-chip"
        label={t("albums")}
        color={searchFilter === "Albums" ? "secondary" : "default"}
        variant={searchFilter === "Albums" ? "filled" : "outlined"}
        onClick={() => {
          setSearchEndpoint(searchAlbumsEndpoint);
          setSearchFilter("Albums");
        }}
      />
      <Chip
        className="nav-chip"
        label={t("playlists")}
        color={searchFilter === "Playlists" ? "secondary" : "default"}
        variant={searchFilter === "Playlists" ? "filled" : "outlined"}
        onClick={() => {
          setSearchEndpoint(searchPlaylistsEndpoint);
          setSearchFilter("Playlists");
        }}
      />
    </Stack>
  );
}

SearchNavbar.propTypes = {
  setSearchEndpoint: PropTypes.string,
  setSearchFilter: PropTypes.func,
  searchFilter: PropTypes.string,
};
SearchNavbar.defaultProps = {
  setSearchEndpoint: null,
  setSearchFilter: () => {},
  searchFilter: null,
};
