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
    const [reps, setReps] = useState<number>(1);
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
                            onChange={(e) => {
                                const tempSets: number = Number.parseInt(
                                    e.target.value
                                );
                                setSets(tempSets);
                                let temp: number[] = [];
                                for (let i = 0; i < tempSets; i++) {
                                    temp.push(1);
                                }
                                setWeight(temp);
                            }}
                            InputProps={{ inputProps: { min: 1 } }}
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
                            value={reps}
                            label="Reps"
                            InputProps={{ inputProps: { min: 1 } }}
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
                                    id="weight"
                                    type={"number"}
                                    value={weight[index]}
                                    // Use +2 to account for initial set already in array
                                    label={`Set ${index + 1} Weight`}
                                />
                            );
                        })}
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
        </div>
    );
};

export default AddExercise;
