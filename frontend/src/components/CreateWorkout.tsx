import { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import AddExercise from "./AddExercise";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { IExercise } from "../interfaces/IExercise";

interface ICreateWorkout {
    dateInfo: Date;
}

const CreateWorkout = ({ dateInfo }: ICreateWorkout) => {
    const [date, setDate] = useState<string>();
    const [type, setType] = useState("");
    const [setting, setSetting] = useState("");
    const [start, setStart] = useState(""); // TODO: start now
    const [exercises, setExercises] = useState<IExercise[]>([]);

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

    return (
        <form className="text-black bg-grey flex flex-col gap-2">
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
            <AddExercise addExercise={addExercise} />
        </form>
    );
};

export default CreateWorkout;
