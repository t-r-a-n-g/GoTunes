const express = require("express");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

const { auth } = require("../controllers");

router.post("/login", auth.login);
router.post("/register", auth.register);
router.get("/me", verifyToken, (req, res) => {
  res.json({ id: req.userId });
});

module.exports = router;
