const express = require("express");
const router = express.Router();

// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in
// Return 400 if customerId not provided
// Return 400 if movieId not provided
// Return 404 if no rental found this customer/movie
// Return 400 if rental already processed
// Return 200 if valid request
// Set the return date
// Calculate the rental fee
// Increase the stock
// Return the rental

// const { Genre, validateGenre } = require("../models/genre");
// const admin = require("../middleware/admin");
// const { default: mongoose } = require("mongoose");

router.post("/", async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customer is not provided");

  res.status(401).send("Unauthorized");
});
module.exports = router;
