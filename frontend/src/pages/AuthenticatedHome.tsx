import Calendar from "../components/Calendar";
import WeekSidebar from "../components/WeekSidebar";

const AuthenticatedHome = () => {
    return (
        <div className="flex test">
            <WeekSidebar />
            <div className="container w-full">
                <Calendar />
            </div>
        </div>
    );
};

export default AuthenticatedHome;
interface Exercise {
    name: String;
    sets: Number;
    reps: Number;
    weight: Number[];
    dropset: Boolean;
}