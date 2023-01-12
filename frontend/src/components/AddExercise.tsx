import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddExercise = ({}) => {
    function fillExerciseDropDown() {
        return exerciseArray.map((exercise, index) => {
            return <MenuItem value={index}>{exercise}</MenuItem>;
        });
    }
    const exerciseArray: String[] = [
        "Push ups",
        "Pull ups",
        "Squats",
        "Lateral Raise",
        "Lat pull down",
        "Calf Raise",
        "Bicep Curl",
    ];
    return (
        <>
            {" "}
            <h3>
                Add exercises{" "}
                <button type="button">
                    <AddCircleOutlineIcon />
                </button>
            </h3>
            <FormControl fullWidth>
                <InputLabel id="select-exercise-label">Exercise</InputLabel>
                <Select
                    labelId="select-exercise-label"
                    id="select-exercise"
                    label="Exercise"
                >
                    {fillExerciseDropDown()}
                </Select>
            </FormControl>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <FormControl fullWidth>
                        <TextField
                            id="set-count"
                            type={"number"}
                            defaultValue={1}
                            label="Sets"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="rep-count"
                            type={"number"}
                            defaultValue={1}
                            label="Reps"
                        />
                    </FormControl>
                </div>
                <div className="flex gap-2">
                    <FormControl fullWidth>
                        <TextField
                            id="weight"
                            type={"number"}
                            label="Weight"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            id="dropset-status"
                            type={"checkbox"}
                            label="Dropset?"
                        />
                    </FormControl>
                </div>
            </div>
            <Button>Add</Button>
        </>
    );
};

export default AddExercise;
