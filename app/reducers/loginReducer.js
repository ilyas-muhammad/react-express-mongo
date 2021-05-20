import { IndexActionTypes } from '../actionTypes';

const initialState = {
    username: '',
    password: '',
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IndexActionTypes.LOGIN_REQUEST:
            return {
                ...state, isLogin,
            };
        default:
            return state;
    }
};
