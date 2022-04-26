const jwt = require("jsonwebtoken");
// const { AuthorizationError } = require("../exceptions");
const { User } = require("../models");

async function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  const errors = {
    auth: null,
  };

  if (!token) errors.auth = "err-auth-no-token";
  else {
    try {
      const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

      const userId = decodedToken.id;
      const user = await User.findOne({ where: { id: userId } });

      if (!user) errors.auth = "err-auth-invalid-user";
      else {
        req.user = user;
        return next();
      }
    } catch (err) {
      console.error(err);
      // throw new AuthorizationError("Not authorized!");
      errors.auth = "err-auth-not-authorized";
    }
  }

  return res.status(403).json({ errors });
}

module.exports = {
  verifyToken,
};
