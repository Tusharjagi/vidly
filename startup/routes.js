const express = require("express");
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movie = require("../routes/movie");
const rental = require("../routes/rental");
const auth = require("../routes/auth");
const user = require("../routes/user");
const returns = require("../routes/returns");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movie);
  app.use("/api/rentals", rental);
  app.use("/api/users", user);
  app.use("/api/auth", auth);
  app.use("/api/returns", returns);
  app.use(error);
};
