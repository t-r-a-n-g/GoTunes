require("dotenv").config();
const express = require("express");
const cors = require("cors");

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

async function syncDB() {
  try {
    await db.sequelize.sync({ force: true });

    // eslint-disable-next-line no-restricted-syntax
    console.log(`DB synced`);
  } catch (err) {
    console.error("DB CONNECTION FAILED", err);
    throw err;
  }
}

startServer();
checkDB();
syncDB();
