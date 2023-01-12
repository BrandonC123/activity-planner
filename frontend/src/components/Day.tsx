import { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from "@mui/material";
import CreateWorkout from "./CreateWorkout";

interface DayProps {
    dateInfo: Number;
}

interface Exercise {
    name: String;
    sets: Number;
    reps: Number;
    weight: Number[];
    dropset: Boolean;
}

const Day = ({ dateInfo }: DayProps) => {
    const [openCreate, setOpenCreate] = useState(false);
    const [exercises, setExercises] = useState([]);
    return (
        <>
            <button onClick={() => setOpenCreate(true)} className="text-center">
                {dateInfo.toString()}
            </button>
            <Dialog
                fullWidth
                open={openCreate}
                onClose={() => setOpenCreate(false)}
            >
                <DialogContent>
                    <span className="text-3xl">Create new Workout</span>
                    <CreateWorkout />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenCreate(false)}>Cancel</Button>
                    <Button>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Day;
