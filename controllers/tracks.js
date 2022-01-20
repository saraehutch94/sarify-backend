// Require dependencies
const express = require("express");
const Track = require("../models/track");

// Set up router object
const trackRouter = express.Router();

// Set up routes

// home route
// trackRouter.get("/", (req, res) => {
//   res.json("Home page");
// });

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
trackRouter.put("/tracks/:id", (req, res) => {
  Track.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedTrack) => {
      res.json(updatedTrack);
    }
  );
});

// create route
trackRouter.post("/tracks", (req, res) => {
  Track.create(req.body, (error, createdTrack) => {
    res.json(createdTrack);
  });
});

// show route
trackRouter.get("/tracks/:id", (req, res) => {
  Track.findById(req.params.id, (error, foundTrack) => {
    res.json(foundTrack);
  });
});

// Export router object
module.exports = trackRouter;
