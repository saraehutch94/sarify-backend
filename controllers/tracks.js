// Require dependencies
const express = require("express");
const Track = require("../models/track");

// Set up router object
const trackRouter = express.Router();

// Set up routes

// index/test route
trackRouter.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// Export router object
module.exports = trackRouter;
