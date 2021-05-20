import * as actionTypes from '../actionTypes/todoActionTypes';

export const login = (username, password) => {
    return {
        type: actionTypes.LOGIN_REQUEST,
        username,
        password,
    }
};
