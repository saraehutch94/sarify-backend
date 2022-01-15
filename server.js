// Require dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const trackController = require("./controllers/tracks");

// Initialize application
const app = express();

// Configure application settings
require("dotenv").config();

const { DATABASE_URL, PORT = 3001 } = process.env;

// Connect to database

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

// Connection status

db.on("error", (error) => {
  console.log(`Error: ${error}`);
});

db.on("connected", () => {
  console.log("mongoDB connected");
});

db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// Mount middleware

// logger middleware
app.use(morgan("dev"));

// "cross-origin resource sharing" middleware
app.use(cors());

// body-parsing middleware
app.use(express.json());

// Mount router middleware
app.use("/sarify", trackController);

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
