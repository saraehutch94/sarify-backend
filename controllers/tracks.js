// Require dependencies
const express = require("express");
const Track = require("../models/track");

// Set up router object
const trackRouter = express.Router();

// Set up routes

// index route
trackRouter.get("/tracks", (req, res) => {
  Track.find({}, (error, allTracks) => {
    res.json(allTracks);
  });
});

// delete route

// update route

// create route

// show route

// Export router object
module.exports = trackRouter;
