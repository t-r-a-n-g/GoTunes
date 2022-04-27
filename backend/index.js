require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/output.json");

const db = require("./src/models");
const routes = require("./src/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

Object.keys(routes).forEach((route) => {
  app.use(`/api/${route}`, routes[route]);
});

async function startServer() {
  const port = process.env.APP_PORT || 5000;
  app.listen(port, () => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server started on port ${port}`);
  });
}

async function checkDB() {
  try {
    await db.sequelize.authenticate();

    // eslint-disable-next-line no-restricted-syntax
    console.log(`DB connected`);
  } catch (err) {
    console.error("DB CONNECTION FAILED", err);
    throw err;
  }
}

async function syncDB(force = false) {
  try {
    db.createRelations();
    await db.sequelize.sync({ force });

    // eslint-disable-next-line no-restricted-syntax
    console.log(`DB synced`);
  } catch (err) {
    console.error("DB CONNECTION FAILED", err);
    throw err;
  }

  const createDummyData = async (username, email, password) => {
    const user = await db.User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const playlist = await db.Playlist.create({
      title: `${username} playlist`,
    });

    user.addPlaylist(playlist, {
      through: { can_edit: true, is_creator: true },
    });

    const profile = await db.UserProfile.create({
      avatar: "test",
      biography: "BlaBlaBla"
    });

    user.setUserProfile(profile);
  };

  createDummyData("User 1", "user1@example.com", "user1password");
  createDummyData("User 2", "user2@example.com", "user2password");
  createDummyData("User 3", "user3@example.com", "user3password");
}

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

startServer();
checkDB();
syncDB(true);
