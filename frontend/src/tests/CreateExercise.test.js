import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddExercise from "../components/AddExercise";

describe("adding a exercise", () => {
    afterEach(() => {
        cleanup();
    });
    test("add exercise form has default of one weight input present", () => {
        render(<AddExercise />);
        const weightInput1 = screen.getByLabelText("Set 1 Weight");
        expect(weightInput1).toBeInTheDocument();
    });
    test("adding more sets creates more weight inputs", async () => {
        render(<AddExercise />);
        const setsInput = screen.getByLabelText("Sets");
        fireEvent.change(setsInput, { target: { value: 6 } });

        const weightInput1 = screen.getByLabelText("Set 1 Weight");
        expect(weightInput1).toBeInTheDocument();

        const weightInput2 = await screen.findByLabelText("Set 6 Weight");
        expect(weightInput2).toBeInTheDocument();
    });
});
