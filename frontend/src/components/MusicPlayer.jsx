import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import PropTypes from "prop-types";
import "./MusicPlayer.less";

function MusicPlayer(props) {
  return (
    <div>
      <ReactJkMusicPlayer
        /* eslint-disable-next-line */
        {...props.playerOptions}
        icon={{}}
        className="playerClass"
      />
    </div>
  );
}
MusicPlayer.propTypes = {
  playerOptions: PropTypes.shape(),
};
MusicPlayer.defaultProps = {
  playerOptions: null,
};
export default MusicPlayer;
