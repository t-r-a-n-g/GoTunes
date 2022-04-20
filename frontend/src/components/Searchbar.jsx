import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";
import axios from "axios";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [searchResult, setSearchResult] = useState([]);

  // Function that updates the searchTerm everytime the input field changes
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  // side effect is API request
  /* useEffect: everytime the component rerenders (meaning, everytime searchTerm gets updated), 
  an API get request is send with updated URL */

  // TO DO: only send API request when typing stops for a couple of seconds
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/search/artists/${searchTerm}?limit=50`)
      .then((response) => {
        // if we get response, set dataLoaded to true
        setDataLoaded(true);
        /*  console.log(response); */
        setSearchResult(response.data);
      });
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
      {/* here we display our results/ our components only if dataLoaded is true */}
      {dataLoaded ? "results" : "no data"}
    </div>
  );
}

export default Searchbar;
