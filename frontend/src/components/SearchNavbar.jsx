import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./SearchNavbar.css";

/* TO DO: 
(1) Modify onClick method. It should not navigate to another page. 
    It should execute a new api search request 
(2) For later: Make Chip a separate component so it can be reused for Library Search */

export default function SearchNavbar() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={4}>
      <Chip
        id="chipArtist"
        className="nav-chip"
        label="Artists"
        variant="outlined"
        onClick={() => navigate("/login")}
      />
      <Chip
        className="nav-chip"
        label="Tracks"
        variant="outlined"
        onClick={() => navigate("/login")}
      />
      <Chip
        className="nav-chip"
        label="Albums"
        variant="outlined"
        onClick={() => navigate("/login")}
      />
      <Chip
        className="nav-chip"
        label="Playlists"
        variant="outlined"
        onClick={() => navigate("/login")}
      />
    </Stack>
  );
}
