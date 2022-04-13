const express = require("express");

const router = express.Router();
const { album } = require("../controllers");

router.get("/:albumId", (req, res) => album.getAlbum(req, res));
router.get("/:albumId/tracks", (req, res) => album.getTracks(req, res));

module.exports = router;
