import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./CardPlaylists.css";
import { IconButton } from "@mui/material";

function CardPlaylists({ cover, title, description, onClick }) {
  return (
    <Box id="card-playlists-whole-component-box">
      <Box
        id="card-playlists-wrap-for-button-placement"
        sx={{ backgroundColor: "background.secondary" }}
        onClick={onClick}
        aria-hidden="true"
      >
        <div id="card-playlists-container" style={{ whiteSpace: "nowrap" }}>
          <img
            id="card-playlists-cover-image"
            src={
              cover === "" || cover === null
                ? "https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_1280.png"
                : cover
            }
            alt="cover"
          />
          <Box
            component="div"
            sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
            id="card-playlists-heading"
          >
            {title === "user-favorites-playlist" ? "Favorites" : title}
          </Box>
          <Box
            component="div"
            sx={{
              color: "text.secondary",
            }}
            id="card-playlists-subheading"
          >
            {description}
          </Box>
        </div>
        <IconButton />
      </Box>
      <Divider id="card-playlists-divider" />
    </Box>
    /*  {<div onClick={onClick} aria-hidden="true">
      <div id="card-container">
        <img id="card-cover-image-playlists" src={cover} alt="cover" />
        <h3 id="card-heading">{title}</h3>
        <p id="card-subheading">{description}</p>
      </div>
      <Divider id="card-divider" />
    </div>} */
  );
}

CardPlaylists.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

CardPlaylists.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "",
  description: "",
  onClick: () => {},
};
export default CardPlaylists;
