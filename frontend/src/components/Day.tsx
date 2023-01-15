import { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from "@mui/material";
import CreateWorkout from "./CreateWorkout";
interface IDay {
    dateInfo: Date;
}

const Day = ({ dateInfo }: IDay) => {
    const [openCreate, setOpenCreate] = useState(true);

    return (
        <>
            <button
                onClick={() => setOpenCreate(true)}
                className="text-center hover:bg-sky-700 rounded"
            >
                {dateInfo.getUTCDate()}
            </button>
            <Dialog
                fullWidth
                open={openCreate}
                onClose={() => setOpenCreate(false)}
            >
                <DialogContent>
                    <span className="text-3xl">Create new Workout</span>
                    <CreateWorkout dateInfo={dateInfo} />
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
