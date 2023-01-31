import { IUserData } from "../interfaces/IUserData";

interface IAction {
    type: string;
    payload: boolean | string | IUserData;
}

function UserReducer(state: any, action: IAction) {
    switch (action.type) {
        // TODO: combine
        case "update user status": {
            const userData: IUserData = {
                token: localStorage.getItem("token"),
                email: localStorage.getItem("user-email"),
                name: localStorage.getItem("user-name"),
            };

            return {
                ...state,
                signedIn: action.payload,
                userData,
            };
        }
        case "store token": {
            return {
                ...state,
                token: action.payload,
            };
        }
        // case "store user data": {
        //     const data: IUserData = {
        //         email: localStorage.getItem("user-email"),
        //         name: localStorage.getItem("user-name"),
        //     };
        //     return {
        //         ...state,
        //         userData: data,
        //     };
        // }
        case "clear user data": {
            return {
                ...state,
                token: "",
                email: "",
                name: "",
            };
        }
        case "store user workout data": {
            console.log("t");
            return {
                ...state,
                data: [1],
            };
        }
        default:
            throw Error("Unknown action.");
    }
}

export default UserReducer;
