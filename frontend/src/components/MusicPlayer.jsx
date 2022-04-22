import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import PropTypes from "prop-types";

function MusicPlayer(props) {
  return (
    <>
      <ReactJkMusicPlayer {...props.playerOptions} />

      {/*     FURTHER BUTTONS 
            <button onClick={() => audioInstance.play()}>play</button>
            <button onClick={() => audioInstance.pause()}>pause</button>
            
            <button onClick={() => audioInstance.load()}>reload</button> */}
    </>
  );
}
MusicPlayer.propTypes = {
  playerOptions: PropTypes.object,
};
MusicPlayer.defaultProps = {
  playerOptions: null,
};
export default MusicPlayer;
