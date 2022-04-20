import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";
import axios from "axios";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState();
  // eslint-disable-next-line no-unused-vars
  const [searchResult, setSearchResult] = useState([]);
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    axios
      .get(`http://localhost:5000/api/search/artists/${searchTerm}`)
      .then((response) => {
        setSearchResult(response.data);
      });
  }
  return (
    <div>
      <TextField
        value={searchTerm}
        onChange={(event) => handleSearch(event)}
        sx={{
          bgcolor: "white",
        }}
        fullWidth
        id="searchbar"
        label="Search for artist .."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Searchbar;
