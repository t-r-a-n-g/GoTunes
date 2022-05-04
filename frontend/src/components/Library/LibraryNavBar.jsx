import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./LibraryNavBar.css";

export default function LibraryNavbar(props) {
  const { t } = useTranslation();
  const { searchFilter } = props;

  return (
    <Stack direction="row" spacing={1} id="searchnavbar-container">
      <Chip
        className="nav-chip"
        label={t("search-all")}
        color={searchFilter === "All" ? "secondary" : "default"}
        variant={searchFilter === "All" ? "filled" : "outlined"}
        // To do: Add Logic
      />
      <Chip
        id="chipArtist"
        className="nav-chip"
        label={t("artists")}
        color={searchFilter === "Artists" ? "secondary" : "default"}
        variant={searchFilter === "Artists" ? "filled" : "outlined"}

        // To Do: Add Logic
      />
      <Chip
        className="nav-chip"
        label={t("albums")}
        color={searchFilter === "Albums" ? "secondary" : "default"}
        variant={searchFilter === "Albums" ? "filled" : "outlined"}

        // To do: Add Logic
      />
      <Chip
        className="nav-chip"
        label={t("playlists")}
        color={searchFilter === "Playlists" ? "secondary" : "default"}
        variant={searchFilter === "Playlists" ? "filled" : "outlined"}

        // To Do: Add Logic
      />
    </Stack>
  );
}

LibraryNavbar.propTypes = {
  searchFilter: PropTypes.string,
};
LibraryNavbar.defaultProps = {
  searchFilter: null,
};
