const mongoose = require("mongoose");
require("dotenv").config();

const workoutSchema = new mongoose.Schema({
    exercises: Array,
    date: { type: Date, required: true },
    type: String,
    setting: { type: String, minLength: 3 },
    start: Date,
    end: Date,
    duration: String,
    tags: Array,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Workout", workoutSchema);
