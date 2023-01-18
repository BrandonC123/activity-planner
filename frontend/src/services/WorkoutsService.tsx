import axios from "axios";
import { IWorkout } from "../interfaces/IWorkout";

const BASE_URL = "/api/workouts";
async function getAllWorkouts() {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
}

async function addWorkout(workoutData: IWorkout) {
    await axios.post(`${BASE_URL}`, workoutData);
}

export default { getAllWorkouts, addWorkout };
