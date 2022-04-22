import React, { useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import PropTypes from "prop-types";

function MusicPlayer({ playlist }) {
  // This will become a variable for the player.. To connect the player with buttons (our own controls),
  // we can then call its methods, such as audioInstance.pause().
  const [audioInstance, setAudioInstance] = useState(null);

  const options = {
    audioLists: playlist,
    mode: "full",
    showDownload: false,
    theme: "dark",
    getAudioInstance(instance) {
      setAudioInstance(instance);
    },
  };
  return (
    <>
      {/* eslint-disable-next-line */}
      <ReactJkMusicPlayer {...options} />

      <button type="button" onClick={() => audioInstance.playPrev()}>
        Previous track
      </button>
      <button type="button" onClick={() => audioInstance.togglePlay()}>
        Play / Pause
      </button>
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
