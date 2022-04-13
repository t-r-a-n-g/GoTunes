const express = require("express");

const router = express.Router();

const { artist } = require("../controllers");

router.get("/:artistId", artist.getArtist);
router.get("/:artistId/albums", artist.getAlbums);
router.get("/:artistId/playlists", artist.getPlaylists);
router.get("/:artistId/tracks", artist.getTracks);

module.exports = router;
