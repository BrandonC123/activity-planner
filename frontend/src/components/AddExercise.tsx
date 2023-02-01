import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IExercise } from "../interfaces/IExercise";

interface IAddExercise {
    addExercise: Function;
}

const AddExercise = ({ addExercise }: IAddExercise) => {
    const [finished, setFinished] = useState<boolean>(false);
    const [nameIndex, setNameIndex] = useState<string>("");
    const [sets, setSets] = useState<number>(1);
    const [reps, setReps] = useState<number[]>([1]);
    const [weight, setWeight] = useState<number[]>([1]);
    const [dropset, setDropset] = useState<boolean>(false);
    const exerciseArray: string[] = [
        "",
        "Push ups",
        "Pull ups",
        "Squats",
        "Lateral Raise",
        "Lat pull down",
        "Calf Raise",
        "Bicep Curl",
    ];
    function fillExerciseDropDown() {
        return exerciseArray.map((exercise, index) => {
            return (
                <MenuItem key={index} value={index}>
                    {exercise}
                </MenuItem>
            );
        });
    }
    function toggleSets(e: React.ChangeEvent<HTMLInputElement>) {
        const tempSets: number = Number.parseInt(e.target.value);
        setSets(tempSets);
        let tempWeight: number[] = Array.from(weight);
        let tempReps: number[] = Array.from(reps);
        if (tempSets < weight.length) {
            tempWeight.splice(tempSets);
            setWeight(tempWeight);
            tempReps.splice(tempSets);
            setReps(tempReps);
            return;
        }
        for (let i = weight.length; i < tempSets; i++) {
            tempWeight.push(1);
            tempReps.push(1);
        }
        setWeight(tempWeight);
        setReps(tempReps);
    }

    return !finished ? (
        <>
            <FormControl fullWidth>
                <InputLabel id="select-exercise-label">Exercise</InputLabel>
                <Select
                    value={nameIndex}
                    onChange={(e: SelectChangeEvent<string>) => {
                        setNameIndex(e.target.value);
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
                            id="set-count"
                            type={"number"}
                            label="Sets"
                            value={sets}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                toggleSets(e);
                            }}
                            InputProps={{ inputProps: { min: 1 } }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setDropset(e.target.checked);
                            }}
                            id="dropset-status"
                            type={"checkbox"}
                            value={dropset}
                            label="Dropset?"
                        />
                    </FormControl>
                </div>
                <div className="flex gap-2">
                    <FormControl className="flex flex-col gap-2" fullWidth>
                        {weight.map((set, index) => {
                            return (
                                <TextField
                                    onChange={(e) => {
                                        let tempWeight: number[] =
                                            Array.from(weight);
                                        tempWeight[index] = Number.parseInt(
                                            e.target.value
                                        );
                                        setWeight(tempWeight);
                                    }}
                                    key={index}
                                    id={`weight-${index}`}
                                    type={"number"}
                                    value={weight[index]}
                                    // Use +2 to account for initial set already in array
                                    label={`Set ${index + 1} Weight`}
                                />
                            );
                        })}
                    </FormControl>
                    <FormControl className="flex flex-col gap-2" fullWidth>
                        {weight.map((set, index) => {
                            return (
                                <TextField
                                    onChange={(e) => {
                                        let tempReps: number[] =
                                            Array.from(weight);
                                        tempReps[index] = Number.parseInt(
                                            e.target.value
                                        );
                                        setReps(tempReps);
                                    }}
                                    key={index}
                                    id={`reps-${index}`}
                                    type={"number"}
                                    value={reps[index]}
                                    // Use +2 to account for initial set already in array
                                    label={`Set ${index + 1} Reps`}
                                />
                            );
                        })}
                    </FormControl>
                </div>
            </div>
            <Button
                onClick={() => {
                    const tempExercise: IExercise = {
                        name: exerciseArray[Number.parseInt(nameIndex)],
                        sets,
                        reps,
                        weight,
                        dropset,
                    };
                    console.log(tempExercise);
                    addExercise(tempExercise);
                    setFinished(true);
                }}
                type="button"
            >
                Add
            </Button>
            <Button onClick={() => console.log()}>Remove</Button>
        </>
    ) : (
        <div>
            <p>
                Exercise: {exerciseArray[Number.parseInt(nameIndex)]} Sets:{" "}
                {sets} Reps: {reps}
                Weight: {weight} Dropset: {dropset}
            </p>
            <Button onClick={() => setFinished(false)}>Edit</Button>
        </div>
    );
};

export default AddExercise;
