import * as React from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./SearchNavbar.css";
import {
  searchArtistsEndpoint,
  searchTracksEndpoint,
  searchAlbumsEndpoint,
  searchPlaylistsEndpoint,
} from "./API";

/* TO DO: 
- add Chip for "All"
- add css: make visible which chip is clicked on
- For later: Make Chip a separate component so it can be reused for Library Search */

export default function SearchNavbar(props) {
  const { setSearchEndpoint } = props;

  return (
    <Stack direction="row" spacing={4}>
      <Chip
        id="chipArtist"
        className="nav-chip"
        label="Artists"
        variant="outlined"
        onClick={() => setSearchEndpoint(searchArtistsEndpoint)}
      />
      <Chip
        className="nav-chip"
        label="Tracks"
        variant="outlined"
        onClick={() => setSearchEndpoint(searchTracksEndpoint)}
      />
      <Chip
        className="nav-chip"
        label="Albums"
        variant="outlined"
        onClick={() => setSearchEndpoint(searchAlbumsEndpoint)}
      />
      <Chip
        className="nav-chip"
        label="Playlists"
        variant="outlined"
        onClick={() => setSearchEndpoint(searchPlaylistsEndpoint)}
      />
    </Stack>
  );
}

SearchNavbar.propTypes = {
  setSearchEndpoint: PropTypes.string,
};
SearchNavbar.defaultProps = {
  setSearchEndpoint: null,
};
