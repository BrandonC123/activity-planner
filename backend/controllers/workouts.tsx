const workoutsRouter = require("express").Router();
const Workout = require("../models/workouts");

workoutsRouter.post("/", async (request, response) => {
    const body = request.body;
    const newWorkout = new Workout({
        exercises: body.exercises,
        date: body.date,
        type: body.type,
        setting: body.setting,
        start: body.start,
        duration: body.duration,
        tags: body.tags,
    });
    const savedWorkout = await newWorkout.save();
    response.status(200).json(savedWorkout);
});

workoutsRouter.get("/", async (request, response) => {
    const allWorkouts = await Workout.find({})
    response.json(allWorkouts)
})

export default workoutsRouter;
