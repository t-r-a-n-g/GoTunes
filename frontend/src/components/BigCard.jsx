import React from "react";
import PropTypes from "prop-types";
import "./BigCard.css";
import Typography from "@mui/material/Typography";

// Big Playlist Card Component Structure

function BigCard({ cover, title, onClick }) {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <div id="big-card-container" onClick={onClick}>
        <img id="big-card-cover" src={cover} alt="cover" />
        <Typography
          component="div"
          variant="h6"
          sx={{ width: 150, wordWrap: "break-word" }}
        >
          {title}
        </Typography>
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
