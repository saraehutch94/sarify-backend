// Require dependencies
const express = require("express");

// Initialize application
const app = express();

// Configure application settings
require("dotenv").config();

const { PORT = 3001 } = process.env;

// Connect to database

// Mount middleware

// logger middleware
app.use(morgan("dev"));

// "cross-origin resource sharing" middleware
app.use(cors());

// body-parsing middleware
app.use(express.json());

// Mount routes

// Tell app to listen on PORT
