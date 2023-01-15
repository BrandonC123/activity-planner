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
    const [nameIndex, setNameIndex] = useState<number>(0);
    const [sets, setSets] = useState<number>(1);
    const [reps, setReps] = useState<number>(1);
    const [weight, setWeight] = useState<string>("");
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

    return (
        <>
            {" "}
            <FormControl fullWidth>
                <InputLabel id="select-exercise-label">Exercise</InputLabel>
                <Select
                    value={nameIndex}
                    onChange={(e: SelectChangeEvent<number>) => {
                        const tempIndex: number = Number.parseInt(
                            e.target.name
                        );
                        console.log(e.target.name);
                        setNameIndex(tempIndex);
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
                            }}
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
                        />
                    </FormControl>
                </div>
                <div className="flex gap-2">
                    <FormControl fullWidth>
                        <TextField
                            onChange={(e) => {
                                setWeight(e.target.value);
                            }}
                            id="weight"
                            type={"number"}
                            value={weight}
                            label="Weight"
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
            </div>
            <Button
                onClick={() => {
                    const tempExercise: IExercise = {
                        name: exerciseArray[nameIndex],
                        sets,
                        reps,
                        weight,
                        dropset,
                    };
                    console.log(tempExercise);
                }}
                type="button"
            >
                Add
            </Button>
            <Button onClick={() => console.log()}>Remove</Button>
        </>
    );
};

export default AddExercise;
