import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import "./BigCard.css";

// Big Playlist Card Component Structure

function BigCard({ cover, title, onClick }) {
  return (
    <div onClick={onClick}>
      <div id="big-card-container">
        <img id="big-card-cover" src={cover} alt="cover"></img>
        <h3 id="big-card-heading">{title}</h3>
      </div>
    </div>
  );
}

// Prop Validation

BigCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

BigCard.defaultProps = {
  cover: "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png",
  title: "Playlist",
  onClick: () => {},
};

export default BigCard;
