import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ cover, title, onClick }) {
  return (
    <div onClick={onClick}>
      <div id="card-container">
        <img id="card-cover-image" src={cover} alt="cover" />
        <h3 id="card-heading">{title}</h3>
      </div>
      <Divider id="card-divider" />
    </div>
  );
}

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "Artist - Track",
};
export default Card;
