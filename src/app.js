require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
var bodyParser = require("body-parser");

const connnectionMongoDB = require("./utils/mongo");

const connectMongo = async (req, res, next) => {
  await connnectionMongoDB();
  next();
};

module.exports.middleware = (req, res, next) => {
  if (req.headers.authorization === "Boy") {
    next();
  } else res.status(401).send("Unauthorize");
};

const api = require("./api/routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(connectMongo);
app.use("/api", api);

app.listen(PORT, () => {
  console.log("Start server with port : " + PORT);
});
