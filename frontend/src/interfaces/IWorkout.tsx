import { IExercise } from "./IExercise";

export interface IWorkout {
    exercises: IExercise[];
    date: string;
    type: string;
    setting: string;
    start?: Date;
    end?: Date;
    duration?: string;
    tags: string[];
}
