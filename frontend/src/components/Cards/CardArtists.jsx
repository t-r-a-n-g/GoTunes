import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./CardArtists.css";

function CardArtists({ cover, name, description, onClick }) {
  return (
    <div onClick={onClick} aria-hidden="true">
      <div id="card-container">
        <img id="card-cover-image-artist" src={cover} alt="cover" />
        <h3 id="card-heading">{name}</h3>
        <p id="card-subheading">{description}</p>
      </div>
      <Divider id="card-divider" />
    </div>
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
  name: "Loading...",
  description: "",
  onClick: () => {},
};
export default CardArtists;
