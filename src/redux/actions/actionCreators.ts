import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import authService from "../../Services/auth.service";
import { UserActionTypes } from "./actionEnums";
import { UserActions, UserState, } from "./actionsTypes";

const loading: ActionCreator<UserActions> = () => {
    return {
        type: UserActionTypes.LOADING
    }
};

const error: ActionCreator<UserActions> = (message: string,code:number) => {
    return {
        type: UserActionTypes.ERROR,
        payload: message,
        code:code
    }
};
const success: ActionCreator<UserActions> = (message: string,code:number) => {
    return {
        type: UserActionTypes.SUCCESS,
        payload: message,
        code:code,
    }
};
export const clearMessage: ActionCreator<UserActions> = () => {
    return {
        type: UserActionTypes.ERROR,
        payload: "",
        code:0
    }
};
export const userLogin: ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserActions>> = (username: string, password: string) => {
    return async (dispatch: Dispatch<UserActions>) => {
        dispatch(loading());
        const user = await authService.login(username, password);
        if (user.status === 400) {
            const message = JSON.parse(user.response)
            return dispatch(error(message.error,user.status));
        }
        if (user.status === 200) {
            dispatch(success('Login Successful',user.status));
            return dispatch({
                type: UserActionTypes.LOGIN,
                user: user
            })
        }
        else {
            return dispatch({
                type: UserActionTypes.LOGIN,
                user: user
            })
        };
    };
};

export const userRegister:
    ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserActions>> = (
        username: string, 
        password: string, 
        email: string, 
        first_name: string, 
        last_name: string) => {
        return async (dispatch: Dispatch<UserActions>) => {
            dispatch(loading());
            
            const user = await authService.register(username, password,email,first_name,last_name);

            if (user.status === 400) {
                const message = JSON.parse(user.response)
                return dispatch(error(message.email,user.status));
            }
            if (user.status === 201) {
                const message = user.statusText
                dispatch(success(message,user.status))
                return dispatch({
                    type: UserActionTypes.REGISTER,   
                })
                
            }
            return dispatch({
                type: UserActionTypes.REGISTER,
                
            })
            
        };
    };