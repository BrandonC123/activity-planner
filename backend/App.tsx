const express = require("express");
require("express-async-errors");
require("dotenv").config();
const app = express();
const cors = require("cors");
const logger = require("./utils/logger");
const mongoose1 = require("mongoose");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
import workoutsRouter from "./controllers/workouts";

app.use(express.json());
app.use("/api/workouts", workoutsRouter);
app.use(cors());

mongoose1
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
