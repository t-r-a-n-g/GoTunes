const express = require("express");

const router = express.Router();

const { playlist } = require("../controllers");

router.get("/:playlistId", (req, res) => playlist.getPlaylist(req, res));
router.get("/:playlistId/tracks", (req, res) =>
  playlist.getPlaylistTracks(req, res)
);

module.exports = router;
