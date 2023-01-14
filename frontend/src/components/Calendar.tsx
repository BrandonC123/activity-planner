import { Button } from "@mui/material";
import { getDaysInMonth } from "date-fns";
import { useState, useEffect } from "react";
import Day from "./Day";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Calendar = ({}) => {
    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "July",
        "June",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [days, setDays] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);
    function displayDays() {
        let test: JSX.Element[] = [];
        for (let i = 1; i <= days; i++) {
            test.push(<Day key={i} dateInfo={new Date(year, month, i)} />);
        }
        return test;
    }
    function setCurrentDate() {
        const today = new Date();
        setMonth(today.getMonth());
        setDays(getDaysInMonth(today.getMonth()));
        setYear(today.getFullYear());
    }
    function advanceCalendar(forward: boolean) {
        let tempMonth: number = month;
        if (forward) {
            tempMonth++;
            if (tempMonth === 12) {
                tempMonth = 0;
                setYear(year + 1);
            }
        } else {
            tempMonth--;
            if (tempMonth === -1) {
                tempMonth = 11;
                setYear(year - 1);
            }
        }
        setMonth(tempMonth);
        setDays(getDaysInMonth(new Date(year, tempMonth)));
    }
    useEffect(() => {
        setCurrentDate();
        displayDays();
    }, []);
    useEffect(() => {
        displayDays();
    }, [days, month]);
    return (
        <div className="w-1/2 ">
            <div className="flex justify-between items-center w-full text-white">
                <Button
                    onClick={() => {
                        advanceCalendar(false);
                    }}
                >
                    <ArrowBackIosIcon />
                </Button>
                <span>
                    {months[month]} {year}
                </span>
                <Button
                    onClick={() => {
                        advanceCalendar(true);
                    }}
                >
                    <ArrowForwardIosIcon />
                </Button>
            </div>
            <div className="grid grid-cols-7 text-white font-bold text-lg bg-transparent gap-y-4 rounded-4">
                {displayDays()}
            </div>
        </div>
    );
};

export default Calendar;
