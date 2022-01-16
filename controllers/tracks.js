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
trackRouter.delete("/tracks/:id", (req, res) => {
  Track.findByIdAndDelete(req.params.id, (error, deletedTrack) => {
    res.json(deletedTrack);
  });
});

// update route

// create route
trackRouter.post("/tracks", (req, res) => {
  Track.create(req.body, (error, createdTrack) => {
    res.json(createdTrack);
  });
});

// show route

// Export router object
module.exports = trackRouter;
