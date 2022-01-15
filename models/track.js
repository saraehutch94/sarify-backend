// Require dependencies
const mongoose = require("mongoose");

// Schema variable
const Schema = mongoose.Schema;

// Track Schema
const trackSchema = new Schema(
  {
    title: String,
    artist: String,
    coverArt: String,
    description: String,
    genre: String,
  },
  { timestamps: true }
);

// Export Track Schema
module.exports = mongoose.model("Track", trackSchema);
