import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ cover, name, details }) {
  return (
    <div>
      <div id="card-container">
        <img id="card-cover-image" src={cover} alt="cover" />
        <h2 id="card-heading">{name}</h2>
        <p id="card-subheading">{details}</p>
      </div>
      <Divider id="card-divider" />
    </div>
  );
}

Card.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  details: PropTypes.number,
};

Card.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  name: "Artist",
  details: "Description",
};
export default Card;
