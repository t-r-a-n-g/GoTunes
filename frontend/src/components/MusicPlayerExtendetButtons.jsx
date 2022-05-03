import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PropTypes from "prop-types";

export default function MusicPlayerExtendedButtons(props) {
  // states for extended buttons behavior
  const { playModeOrder, setPlayModeOrder } = props;
  const [activeShuffleBtn, setActiveShuffleBtn] = useState(false);
  const [activeLoopBtn, setActiveLoopBtn] = useState(0);

  // function for handle onClick for shuffle button
  const handlePlayModeOrderShuffle = () => {
    setActiveLoopBtn(0);
    if (playModeOrder === "order" || playModeOrder.includes("Loop")) {
      setPlayModeOrder("shufflePlay");
      setActiveShuffleBtn(true);
      console.warn("shufflePlay on");
    } else if (playModeOrder === "shufflePlay") {
      setPlayModeOrder("order");
      setActiveShuffleBtn(false);
      console.warn("order on");
    }
  };

  // function to handle onClick for loop button
  const handlePlayModeLoop = () => {
    setActiveShuffleBtn(false);
    if (playModeOrder === "order" || playModeOrder === "shufflePlay") {
      setPlayModeOrder("orderLoop");
      setActiveLoopBtn(1);
      console.warn("orderLoop");
    } else if (playModeOrder === "orderLoop") {
      setPlayModeOrder("singleLoop");
      setActiveLoopBtn(2);
      console.warn("singleLoop");
    } else if (playModeOrder === "singleLoop") {
      setPlayModeOrder("order");
      setActiveLoopBtn(0);
      console.warn("order");
    }
  };

  return [
    // these iconButtons have multiple icons, which change visibility after click, so only one icon appears
    <IconButton onClick={(e) => handlePlayModeOrderShuffle(e)} id="shuffleBtn">
      <ShuffleIcon style={{ display: !activeShuffleBtn ? "block" : "none" }} />
      <ShuffleIcon
        className="buttonOn"
        style={{ display: !activeShuffleBtn ? "none" : "block" }}
      />
    </IconButton>,
    <IconButton onClick={(e) => handlePlayModeLoop(e)} id="loopBtn">
      <LoopIcon
        className="buttonOn"
        style={{ display: activeLoopBtn === 1 ? "block" : "none" }}
      />
      <LooksOneIcon
        className="buttonOn"
        style={{ display: activeLoopBtn === 2 ? "block" : "none" }}
      />
      <FormatListBulletedIcon
        style={{ display: activeLoopBtn === 0 ? "block" : "none" }}
      />
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
