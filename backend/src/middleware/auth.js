const jwt = require("jsonwebtoken");
// const { AuthorizationError } = require("../exceptions");

async function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedToken.id;
    return next();
  } catch (err) {
    // console.error(err);
    // throw new AuthorizationError("Not authorized!");
    return res.status(403).json({ msg: "Not authorized!" });
  }
}

module.exports = {
  verifyToken,
};
