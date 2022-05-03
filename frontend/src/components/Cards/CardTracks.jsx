import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import "./CardTracks.css";

function CardTracks(props) {
  const { cover, title, artist, onClick, setAudioListToggle } = props;

  const handleAudioListToggle = () => {
    setAudioListToggle(false);
    console.warn("Warteschlange on");
  };

  return (
    // New style with grid mui
    <Box id="whole-component-box">
      <Box
        id="card-wrap-for-button-placement"
        sx={{ backgroundColor: "background.secondary" }}
      >
        <div
          style={{ whiteSpace: "nowrap" }}
          id="card-container"
          onClick={onClick}
          aria-hidden="true"
        >
          <img id="card-tracks-cover-image-tracks" src={cover} alt="cover" />
          <Box
            component="div"
            sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
            id="card-tracks-heading"
          >
            {title}
          </Box>
          <Box
            component="div"
            id="card-tracks-subheading"
            sx={{
              color: "text.secondary",
            }}
          >
            {artist}
          </Box>
        </div>
        <IconButton
          onClick={(e) => {
            handleAudioListToggle(e);
          }}
        >
          <AddCircleIcon
            id="card-add-to-quere-button"
            sx={{ color: "primary.main" }}
          />
        </IconButton>
      </Box>
      <Divider id="card-divider" />
    </Box>
  );
}

CardTracks.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  onClick: PropTypes.func,
  setAudioListToggle: PropTypes.string,
};

CardTracks.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "",
  artist: "",
  onClick: () => {},
  setAudioListToggle: "",
};
export default CardTracks;
