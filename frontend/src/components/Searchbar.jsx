import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";
import PropTypes from "prop-types";
/* import Card from "./Card"; */

function Searchbar(props) {
  const { searchTerm, handleSearch } = props;

  return (
    <div>
      <TextField
        value={searchTerm}
        onChange={handleSearch}
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
    </div>
  );
}

Searchbar.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func,
};

Searchbar.defaultProps = {
  searchTerm: "",
  handleSearch: () => {},
};

export default Searchbar;
