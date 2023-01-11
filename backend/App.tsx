export {};
const express = require("express");
require("express-async-errors");
require("dotenv").config();
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const middleware = require("./utils/middleware");
const config = require("./utils/config");

app.use(express.json());
app.use(cors());

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info("Connected to MongoDB");
    })
    .catch((error) => {
        logger.error("Error connecting to MongoDB", error.message);
    });

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
