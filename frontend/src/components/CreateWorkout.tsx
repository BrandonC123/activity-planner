import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddExercise from "./AddExercise";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { IExercise } from "../interfaces/IExercise";
import WorkoutTag from "./WorkoutTag";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface ICreateWorkout {
    dateInfo: Date;
}

const CreateWorkout = ({ dateInfo }: ICreateWorkout) => {
    const [exerciseDisplay, setExerciseDisplay] = useState<JSX.Element[]>([]);
    const [date, setDate] = useState<string>();
    const [type, setType] = useState<string>("");
    const [setting, setSetting] = useState<string>("");
    const [start, setStart] = useState(""); // TODO: start now
    const [exercises, setExercises] = useState<IExercise[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [tagDisplay, setTagDisplay] = useState<JSX.Element[]>([]);

    function addExercise(exercise: IExercise) {
        setExercises([...exercises, exercise]);
    }
    useEffect(() => {
        if (dateInfo) {
            let temp = dateInfo;
            const offset = temp.getTimezoneOffset();
            temp = new Date(temp.getTime() - offset * 60 * 1000);
            setDate(temp.toISOString().split("T")[0]);
        }
    }, []);
    function addFormToDisplay() {
        setExerciseDisplay([
            ...exerciseDisplay,
            <AddExercise addExercise={addExercise} />,
        ]);
    }
    const tagArray: string[] = [
        "Push",
        "Pull",
        "Legs",
        "Chest",
        "Full body",
        "Upper",
        "Lower",
        "Arms",
        "Accesory",
        "Deload",
        "Back",
    ];
    function addTagToArray(text: string, index: number) {
        setTags([...tags, text]);
        console.log(text);
        setTagDisplay([
            ...tagDisplay,
            <div>
                {text}{" "}
                <Button
                    onClick={() => {
                        console.log(index);
                    }}
                >
                    <DeleteForeverIcon />
                </Button>
            </div>,
        ]);
    }
    return (
        <form className="text-black bg-grey flex flex-col gap-2">
            <div>
                <div className="flex gap-2">{tagDisplay}</div>
                Add tags{" "}
                {tagArray.map((tag, index) => {
                    return (
                        <WorkoutTag
                            text={tag}
                            index={index}
                            addTagToArray={addTagToArray}
                        />
                    );
                })}
            </div>
            <FormControl>
                <TextField
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                    type={"date"}
                    value={date}
                />
            </FormControl>
            <FormControl fullWidth>
                <FormLabel>Type</FormLabel>
                <RadioGroup
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                >
                    <FormControlLabel
                        value="weight-lifting"
                        label="Weight Lifting"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="cardio"
                        label="Cardio"
                        control={<Radio />}
                    />
                </RadioGroup>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel>Setting</FormLabel>
                <RadioGroup
                    onChange={(e) => {
                        setSetting(e.target.value);
                    }}
                >
                    <FormControlLabel
                        value="home"
                        label="Home"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="gym"
                        label="Gym"
                        control={<Radio />}
                    />
                </RadioGroup>
            </FormControl>
            <h3>
                Add exercises{" "}
                <button onClick={() => addFormToDisplay()} type="button">
                    <AddCircleOutlineIcon />
                </button>
            </h3>
            {exerciseDisplay}
            {/* <Button onClick={() => setOpenCreate(false)}>Cancel</Button> */}
            <div>
                <Button
                    onClick={() => {
                        console.log({ date, exercises, type, setting, start });
                    }}
                >
                    Create
                </Button>
                <Button>Start Now</Button>
            </div>
        </form>
    );
};

export default CreateWorkout;
