import User from "../models/user";

const workoutsRouter = require("express").Router();
const Workout = require("../models/workouts");
const jwt = require("jsonwebtoken");

function getToken(request) {
    const auth = request.get("authorization");
    if (auth && auth.toLowerCase().startsWith("bearer")) {
        return auth.substring(7);
    }
    return null;
}
workoutsRouter.post("/", async (request, response) => {
    const body = request.body;
    const token = getToken(request);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: "token missing or invalid" });
    }
    const user = await User.findById(decodedToken.id);
    const newWorkout = new Workout({
        exercises: body.exercises,
        date: body.date,
        type: body.type,
        setting: body.setting,
        start: body.start,
        duration: body.duration,
        tags: body.tags,
        user: user._id,
    });
    const savedWorkout = await newWorkout.save();
    if (savedWorkout) {
        response.status(200).json(savedWorkout);
        user.workouts = user.workouts.concat(newWorkout);
        await user.save();
    }
});

workoutsRouter.get("/", async (request, response) => {
    const allWorkouts = await Workout.find({});
    response.json(allWorkouts);
});

workoutsRouter.get("/:id", async (request, response) => {
    const id = request.params.id;
    const workout = await Workout.findById(id);
    response.json(workout);
});

export default workoutsRouter;
