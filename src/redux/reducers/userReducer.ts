import { Reducer } from "redux";
import { UserActionTypes } from "../actions/actionEnums";
import { UserActions, UserState } from "../actions/actionsTypes";

const initialUserState: UserState = {
    active: false,
    userLoading: false,
    isLoggedin: false,
    username: "",
    email: "",
    last_name: "",
    first_name: "",
    token: "",
    id: 0,

};
export const userReducer: Reducer<UserState, UserActions> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        // TODO - change the state
        case UserActionTypes.LOADING: {
            return {
                ...state,
                userLoading: true,
                isLoggedin: false
            };
        }
        case UserActionTypes.LOGIN: {
            return {
                userLoading: false,
                username: action.user.username,
                email: action.user.email,
                last_name: action.user.last_name,
                first_name: action.user.first_name,
                token: action.user.token,
                id: action.user.id,
                active: true,
                isLoggedin: true
            };
        }
        case UserActionTypes.LOGOUT: {
            return {
                active: false,
                userLoading: false,
                isLoggedin: false,
                username: "",
                email: "",
                last_name: "",
                first_name: "",
                token: "",
                id: 0,
            };
        }
        case UserActionTypes.REGISTER: {
            return {
                ...state,
                userLoading: false,
                isLoggedin: false,
            };
        }
        case UserActionTypes.SUCCESS: {
            return {
                ...state,
                isLoggedin: false
            };
        }
        case UserActionTypes.ERROR: {
            return {
                ...state,
                isLoggedin: false,
                userLoading: false
            };
        }
    }
    return state;
};