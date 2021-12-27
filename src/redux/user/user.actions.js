import userActionTypes from "./user.types";

const setCurrentUser = user => {
    return ({
        type: userActionTypes.SET_CURRENT_USER  ,
        payload: user
    })
};

export default setCurrentUser;