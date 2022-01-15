// Require dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize application
const app = express();

// Configure application settings
require("dotenv").config();

const { DATABASE_URL, PORT = 3001 } = process.env;

// Connect to database

mongoose.connect(DATABASE_URL);

// Mount middleware

// logger middleware
app.use(morgan("dev"));

// "cross-origin resource sharing" middleware
app.use(cors());

// body-parsing middleware
app.use(express.json());

// Mount routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
