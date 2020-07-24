//bookModel.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var books = new Schema(
  {
    name: String,
    description: String,
    author: String,
    price: Number,
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("books", books);