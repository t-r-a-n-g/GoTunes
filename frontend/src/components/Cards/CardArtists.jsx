import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./CardArtists.css";
import { IconButton } from "@mui/material";

function CardArtists({ cover, name, description, onClick }) {
  return (
    <Box id="card-artists-whole-component-box">
      <Box
        id="card-artists-wrap-for-button-placement"
        sx={{ backgroundColor: "background.secondary" }}
        onClick={onClick}
        aria-hidden="true"
      >
        <div id="card-artists-container" style={{ whiteSpace: "nowrap" }}>
          <img id="card-cover-image-artist" src={cover} alt="cover" />
          <Box
            component="div"
            sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
            id="card-artists-heading"
          >
            {name}
          </Box>
          <Box
            component="div"
            sx={{
              color: "text.secondary",
            }}
            id="card-artists-subheading"
          >
            {description}
          </Box>
        </div>
        <IconButton />
      </Box>
      <Divider id="card-artists-divider" />
    </Box>
  );
}

CardArtists.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

CardArtists.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  name: "",
  description: "",
  onClick: () => {},
};
export default CardArtists;
