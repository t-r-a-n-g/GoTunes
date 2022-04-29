import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./CardPlaylists.css";

function CardPlaylists({ cover, title, description, onClick }) {
  return (
    <div onClick={onClick} aria-hidden="true">
      <div id="card-container">
        <img id="card-cover-image-playlists" src={cover} alt="cover" />
        <h3 id="card-heading">{title}</h3>
        <p id="card-subheading">{description}</p>
      </div>
      <Divider id="card-divider" />
    </div>
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
