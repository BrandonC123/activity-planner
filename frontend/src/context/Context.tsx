import { createContext, useReducer } from "react";
import { IWorkout } from "../interfaces/IWorkout";
import UserReducer from "./Reducer";

interface InitialUserData {
    token: string;
    workouts: IWorkout[];
    signedIn: boolean;
}
const initialUserData = {
    token: "",
    workouts: [],
    signedIn: false,
};

const UserContext = createContext<{
    state: InitialUserData;
    dispatch: React.Dispatch<any>;
}>({ state: initialUserData, dispatch: () => null });

const UserProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(UserReducer, initialUserData);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
