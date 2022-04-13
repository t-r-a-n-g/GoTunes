require("dotenv").config();
const express = require("express");
const cors = require("cors");

// const db = require("./utils/db");
const routes = require("./src/routes");

const app = express();
app.use(cors());

Object.keys(routes).forEach((route) => {
  app.use(`/api/${route}`, routes[route]);
});

const port = process.env.APP_PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-restricted-syntax
  console.log(`Server started on port ${port}`);
});

// db.sync()
//   .then((result) => {
//     console.log("Databse synced");
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(-1);
//   });
