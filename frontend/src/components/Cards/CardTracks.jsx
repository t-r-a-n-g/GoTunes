import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./CardTracks.css";

function CardTracks(props) {
  const { cover, title, artist, onClick } = props;
  return (
    <div onClick={onClick} aria-hidden="true">
      <div id="card-container">
        <img id="card-cover-image-tracks" src={cover} alt="cover" />
        <h3 id="card-heading">{title}</h3>
        <p id="card-subheading">{artist}</p>
      </div>
      <Divider id="card-divider" />
    </div>
  );
}

CardTracks.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  onClick: PropTypes.func,
};

CardTracks.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "",
  artist: "",
  onClick: () => {},
};
export default CardTracks;
