import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";
import axios from "axios";
import { searchTracksEndpoint } from "./API";
import Card from "./Card";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // Function that updates the searchTerm everytime the input field changes
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  /* useEffect: everytime the component rerenders (everytime searchTerm gets updated), 
  an API get request is sent with updated URL */
  /* with setTimeout API request only is sent after 0.5s of not typing to avoid requests 
  for every character the user is typing, time can be adjusted (now: 500 millisecs) */

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios
        .get(`${searchTracksEndpoint}${searchTerm}?limit=20`)
        .then((response) => {
          setDataLoaded(true);
          /* console.log(response); */
          setSearchResult(response.data);
        });
    }, 500);
    return function cleanUp() {
      clearTimeout(timeOut);
    };
  }, [searchTerm]);

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
        label="Search for a track ..."
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
      {/* here we render our Card components only if dataLoaded is true */}
      {dataLoaded
        ? searchResult.map((element) => (
            <Card
              key={element.id}
              cover={element.cover}
              name="Track name?"
              details="Artist name?"
            />
          ))
        : "no results found"}
    </div>
  );
}

export default Searchbar;
