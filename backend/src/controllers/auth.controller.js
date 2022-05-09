const { AuthService } = require("../services");

class AuthController {
  static async login(req, res) {
    let resData = { success: false };
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);

      resData = { token, success: true };
    } catch (err) {
      switch (err.name) {
        case "AuthentificationError":
          res.status(403);
          resData = {
            success: false,
            errors: {
              email: "err-email-password-match",
              password: "err-email-password-match",
            },
          };
          break;

        case "ValidationError":
          res.status(400);
          resData = {
            success: false,
            errors: { email: "Enter a valid email address" },
          };
          break;

        default:
          console.error(err);
          res.status(500);
          resData = {
            success: false,
            errors: { server: "err-internal" },
          };
      }
    }

    return res.json(resData);
  }

  static async register(req, res) {
    let resData = {};

    try {
      const { email, password, username } = req.body;

      const user = await AuthService.register({ email, username, password });
      const token = await AuthService.login(email, password);

      resData = { success: true, user, token };
    } catch (err) {
      switch (err.name) {
        case "DuplicationError":
          res.status(409);
          resData = {
            success: false,
            errors: err.fields.map((field) => {
              return {
                [field]: `err-${field}-already-exists`,
              };
            }),
          };
          break;

        case "ValidationError":
          res.status(400);
          resData = {
            success: false,
            errors: { email: "Enter a valid email address" },
          };
          break;

        default:
          console.error(err);

          res.status(500);
          resData = {
            success: false,
            errors: { server: "err-internal" },
          };
      }
    }

    return res.json(resData);
  }
}

module.exports = AuthController;
