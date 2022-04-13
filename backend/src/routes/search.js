const express = require("express");

const router = express.Router();

const { search } = require("../controllers");

router.get("/artists/:q", search.artists);
router.get("/albums/:q", search.albums);
router.get("/playlists/:q", search.playlists);
router.get("/tracks/:q", search.tracks);

module.exports = router;
