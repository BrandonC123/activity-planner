import { useState, useEffect } from "react";
import Day from "./Day";

const Calendar = ({}) => {
    function displayDays() {
        let test: JSX.Element[] = [];
        for (let i = 1; i <= 31; i++) {
            test.push(<Day dateInfo={i} />);
        }
        return test;
    }
    useEffect(() => {
        displayDays();
    }, []);
    return (
        <div className="grid grid-cols-7 w-1/2 text-white font-bold text-lg bg-transparent gap-y-4 rounded-4">
            {displayDays()}
        </div>
    );
};

export default Calendar;
