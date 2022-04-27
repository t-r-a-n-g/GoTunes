import React from "react";
import { IconButton } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
import PropTypes from "prop-types";

export default function MusicPlayerExtendedButtons(props) {
  const { playModeOrder, setPlayModeOrder } = props;

  const handlePlayModeOrderShuffle = () => {
    if (playModeOrder === "order" || playModeOrder.includes("Loop")) {
      setPlayModeOrder("shufflePlay");
      console.warn("shufflePlay");
    } else if (playModeOrder === "shufflePlay") {
      setPlayModeOrder("order");
      console.warn("order");
    }
  };

  const handlePlayModeLoop = () => {
    if (playModeOrder === "order" || playModeOrder === "shufflePlay") {
      setPlayModeOrder("orderLoop");
      console.warn("orderLoop");
    } else if (playModeOrder === "orderLoop") {
      setPlayModeOrder("singleLoop");
      console.warn("singleLoop");
    } else if (playModeOrder === "singleLoop") {
      setPlayModeOrder("order");
      console.warn("order");
    }
  };

  return [
    <IconButton onClick={(e) => handlePlayModeOrderShuffle(e)} id="shuffleBtn">
      <ShuffleIcon color="button" />
    </IconButton>,
    <IconButton onClick={(e) => handlePlayModeLoop(e)} id="loopBtn">
      <LoopIcon color="button" />
    </IconButton>,
  ];
}

MusicPlayerExtendedButtons.propTypes = {
  playModeOrder: PropTypes.shape(),
  setPlayModeOrder: PropTypes.shape(),
};
MusicPlayerExtendedButtons.defaultProps = {
  playModeOrder: null,
  setPlayModeOrder: null,
};
