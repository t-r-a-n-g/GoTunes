// import { authService } from "../services";

class AuthController {
  static async login(req, res) {
    let resData = {};

    try {
      const { email, password } = req.body;
      if (email === "INVALID") {
        res.status(400);
        resData = {
          success: false,
          errors: { email: "Enter a valid email address" },
        };
      } else if (password === "INVALID") {
        res.status(403);
        resData = {
          success: false,
          errors: { email: "Email or password not found" },
        };
      } else {
        const token = "KJBHIHLKkjh89kjbgiu766zztHKUIi";
        resData = { success: true, token: `Bearer ${token}` };
      }
    } catch (err) {
      console.error(err);
      res.status(500);
      resData = {
        success: false,
        errors: { server: "Internal server error" },
      };
    }

    return res.json(resData);
  }

  static async register(req, res) {
    let resData = {};

    try {
      const { email, password, username } = req.body;

      if (email === "INVALID" || password === "INVALID") {
        res.status(400);
        resData = {
          success: false,
          errors: { email: "Enter a valid email address" },
        };
      } else if (email === "INUSE") {
        res.status(409);
        resData = {
          success: false,
          errors: { email: "Email already used" },
        };
      } else {
        resData = { success: true, user: { email, username } };
      }
    } catch (err) {
      console.error(err);

      res.status(500);
      resData = {
        success: false,
        errors: { server: "Internal server error" },
      };
    }

    return res.json(resData);
  }
}

module.exports = AuthController;
