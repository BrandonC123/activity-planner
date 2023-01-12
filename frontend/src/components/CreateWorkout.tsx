import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import AddExercise from "./AddExercise";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const CreateWorkout = ({}) => {
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [setting, setSetting] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
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
        <form className="text-black bg-grey flex flex-col gap-2">
            <FormControl>
                <TextField type={"date"} />
            </FormControl>
            <FormControl fullWidth>
                <FormLabel>Type</FormLabel>
                <RadioGroup>
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
                <RadioGroup>
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
            <AddExercise />
        </form>
    );
};

export default CreateWorkout;
