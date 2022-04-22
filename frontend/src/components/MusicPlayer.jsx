import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import PropTypes from "prop-types";

function MusicPlayer(playerOptions, audioInstance) {
  return (
    <>
      {/* eslint-disable-next-line */}
      <ReactJkMusicPlayer {...playerOptions} />
      {/* eslint-disable-next-line */}
      <button type="button" onClick={() => audioInstance.playPrev()}>
        Previous track
      </button>
      {/* eslint-disable-next-line */}
      <button type="button" onClick={() => audioInstance.togglePlay()}>
        Play / Pause
      </button>
      {/* eslint-disable-next-line */}
      <button type="button" onClick={() => audioInstance.playNext()}>
        Next track
      </button>

      {/*     FURTHER BUTTONS 
            <button onClick={() => audioInstance.play()}>play</button>
            <button onClick={() => audioInstance.pause()}>pause</button>
            
            <button onClick={() => audioInstance.load()}>reload</button> */}
    </>
  );
}
MusicPlayer.propTypes = {
  playlist: PropTypes.arrayOf,
};
MusicPlayer.defaultProps = {
  playlist: null,
};
export default MusicPlayer;
