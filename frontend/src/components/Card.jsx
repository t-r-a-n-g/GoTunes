import React from "react";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

function Card({ cover, name, details }) {
  return (
    <div>
      <img src={cover} alt="cover" />
      <h2>{name}</h2>
      <p>{details}</p>
      <Divider />
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
