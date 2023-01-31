import { createContext, useReducer } from "react";
import { IUserData } from "../interfaces/IUserData";
import { IWorkout } from "../interfaces/IWorkout";
import UserReducer from "./Reducer";

interface InitialUserData {
    userData: IUserData;
    workouts: IWorkout[];
    signedIn: boolean;
}
const initialUserData = {
    userData: {
        token: "",
        email: "",
        name: "",
    },
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
