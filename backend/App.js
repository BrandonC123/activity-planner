var express = require("express");
require("express-async-errors");
require("dotenv").config();
var app = express();
var cors = require("cors");
var logger = require("./utils/logger");
var mongoose = require("mongoose");
var middleware = require("./utils/middleware");
var config = require("./utils/config");
app.use(express.json());
app.use(cors());
mongoose
    .connect(config.MONGODB_URI)
    .then(function () {
    logger.info("Connected to MongoDB");
})["catch"](function (error) {
    logger.error("Error connecting to MongoDB", error.message);
});
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
module.exports = app;
