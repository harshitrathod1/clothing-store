import userActionTypes from "./user.types";

//Initial State
const INITIAL_STATE = {
    currentUser : null,
}

//Actual Reducer Function : set the current user details to the state
const userReducer = (currentState = INITIAL_STATE,action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER :
            return {
                ...currentState,
                currentUser : action.payload
            };
        default:
            return currentState;
    }
};

export default userReducer;