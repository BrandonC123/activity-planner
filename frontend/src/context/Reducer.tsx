interface IAction {
    type: string;
    payload?: any;
}

function UserReducer(state: any, action: IAction) {
    switch (action.type) {
        case "update user status": {
            return {
                ...state,
                signedIn: action.payload,
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
