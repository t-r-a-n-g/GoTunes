import React from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import SiteNav from "../SiteNav";
import MusicPlayer from "../MusicPlayer";

export default function WhenLoggedIn(props) {
  const { playerOptions } = props;
  return (
    <>
      <MusicPlayer playerOptions={playerOptions} />
      <SiteNav />
      <Outlet />
    </>
  );
}

WhenLoggedIn.propTypes = {
  playerOptions: PropTypes.shape(),
};
WhenLoggedIn.Player.defaultProps = {
  playerOptions: null,
};
