import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";
import PropTypes from "prop-types";
/* import Card from "./Card"; */

function Searchbar(props) {
  const { t } = useTranslation();
  const { searchTerm, handleSearch } = props;

  return (
    <div id="searchbar-container">
      <TextField
        value={searchTerm}
        onChange={handleSearch}
        sx={{
          bgcolor: "white",
        }}
        fullWidth
        id="searchbar"
        label={t("searchbar-label")}
        variant="filled"
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
