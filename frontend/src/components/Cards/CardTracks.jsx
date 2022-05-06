import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import TracksOptionMenu from "../TracksOptionMenu";
import "./CardTracks.css";

function CardTracks(props) {
  const { cover, title, artist, onClick, setAudioListToggle } = props;

  /*  const handleAudioListToggle = () => {
    setAudioListToggle(true);
    onClick();
    console.warn("Warteschlange off");
  }; */

  return (
    <Box id="card-tracks-whole-component-box">
      <Box
        id="card-tracks-wrap-for-button-placement"
        sx={{ backgroundColor: "background.secondary" }}
      >
        <div
          style={{ whiteSpace: "nowrap" }}
          id="card-tracks-container"
          onClick={onClick /* handleAudioListToggle */}
          aria-hidden="true"
        >
          <img
            id="card-tracks-cover-image"
            src={
              cover === "" || cover === null
                ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                : cover
            }
            alt="cover"
          />
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
              textOverflow: "ellipsis",
              overflow: "hidden",
              color: "text.secondary",
            }}
          >
            {artist}
          </Box>
        </div>
        <IconButton>
          <TracksOptionMenu
            id="card-tracks-menu"
            setAudioListToggle={setAudioListToggle}
            onClickToQueue={onClick}
          />
        </IconButton>
      </Box>
      <Divider id="card-tracks-divider" />
    </Box>
  );
}

CardTracks.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  onClick: PropTypes.func,
  setAudioListToggle: PropTypes.func,
};

CardTracks.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "",
  artist: "",
  onClick: () => {},
  setAudioListToggle: "",
};
export default CardTracks;
