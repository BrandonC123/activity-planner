import { Button } from "@mui/material";

interface IWorkoutTag {
    text: string;
    index: number;
    addTagToArray: Function;
}

const WorkoutTag = ({ text, index, addTagToArray }: IWorkoutTag) => {
    return (
        <Button
            onClick={() => {
                addTagToArray(text, index);
            }}
        >
            {text}
        </Button>
    );
};

export default WorkoutTag;
