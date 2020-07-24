const express = require("express");
const route = express.Router();
const bookModel = require("../../models/bookModel");
const { middleware } = require("../../app");

route.get("/", async (req, res) => {
  res.status(200).send("welcome to nattawat service").end();
});

route.post("/book", async (req, res) => {
  const book = {
    name: "Learnning mongodb",
    descriptions: "this book was created for learning about mongodb",
    author: "Nattawat Supangsarn",
    price: 500,
  };
  const result = await bookModel.create(book);
  res.status(201).send(result).end();
});

route.get("/books", middleware, async (req, res) => {
  const result = await bookModel.find();
  res.status(201).send(result).end();
});

module.exports = route;
