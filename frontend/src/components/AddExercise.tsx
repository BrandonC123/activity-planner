import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface IAddExercise {
    addExercise: Function;
}

interface Exercise {
    name: String;
    sets: Number;
    reps: Number;
    weight: Number[];
    dropset: Boolean;
}

const AddExercise = ({ addExercise }: IAddExercise) => {
    const [name, setName] = useState<String>("");
    const [sets, setSets] = useState<Number>(0);
    const [reps, setReps] = useState<Number>(0);
    const [weight, setWeight] = useState<Number[]>([]);
    const [dropset, setDropset] = useState<Boolean>(false);

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
                    onChange={(e: SelectChangeEvent<String>) => {
                        setName(e.target.value);
                    }}
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
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setSets(Number.parseInt(e.target.value));
                            }}
                            id="set-count"
                            type={"number"}
                            defaultValue={1}
                            label="Sets"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setReps(Number.parseInt(e.target.value));
                            }}
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
                            onChange={(e) => {
                                // setWeight(Number.parseInt(e.target.value));
                            }}
                            id="weight"
                            type={"number"}
                            label="Weight"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const dropsetStatus: Boolean = JSON.parse(
                                    e.target.value
                                );
                                setDropset(dropsetStatus);
                            }}
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
