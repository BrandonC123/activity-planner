// const mongoose = require("mongoose")
require("dotenv").config();

const userSchema = new mongoose.Schema({
    email: { type: String, minLength: 5, required: true },
    username: { type: String, minLength: 5, required: true },
    password: { type: String, minLength: 8, required: true },
    workouts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workout"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
