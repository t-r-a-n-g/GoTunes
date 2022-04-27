const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models");
const { AuthentificationError, DuplicationError } = require("../exceptions");

class AuthService {
  static async usernameExists(username) {
    const user = await User.findOne({ where: { username } });
    if (user !== null) return true;

    return false;
  }

  static async emailExists(email) {
    const user = await User.findOne({ where: { email } });
    if (user !== null) return true;

    return false;
  }

  static async login(email, password) {
    // ToDo: validate input
    const user = await User.findOne({ where: { email } });
    if (!user) throw new AuthentificationError("user not found", ["email"]);

    const pwdMatch = bcrypt.compare(password, user.password);
    if (!pwdMatch)
      throw new AuthentificationError("passwords do not match", ["password"]);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      // expiresIn: 86400, // 24 hours
      expiresIn: 999999999,
    });

    return token;
  }

  static async register(userData) {
    const { username, email, password } = userData;
    // ToDo: validate input
    const existingFields = [];

    const userExists = await AuthService.usernameExists(username);
    const emailExists = await AuthService.emailExists(email);

    if (userExists) existingFields.push("username");
    if (emailExists) existingFields.push("email");

    if (existingFields.length > 0)
      throw new DuplicationError("duplicate user data", existingFields);

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: encryptedPassword,
    });

    return { id: user.id, username: user.username, email: user.email };
  }
}

module.exports = AuthService;
