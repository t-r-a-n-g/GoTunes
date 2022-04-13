const express = require("express");

const router = express.Router();

const { track } = require("../controllers");

router.get("/:trackId", (req, res) => track.getTrack(req, res));
router.get("/:trackId/stream", (req, res) => track.getStream(req, res));

module.exports = router;
