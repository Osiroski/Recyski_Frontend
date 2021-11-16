import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import authService from "../../Services/auth.service";
import userService from "../../Services/user.service";

import { ProfileActionTypes, UserActionTypes } from "./actionEnums";
import { ProfileActions, ProfileState, UserActions, UserState, } from "./actionsTypes";

const loading: ActionCreator<UserActions> = () => {
    return {
        type: UserActionTypes.LOADING
    }
};
const logout: ActionCreator<UserActions> = () => {
    return {
        type: UserActionTypes.LOGOUT
    }
};

const profileLogout: ActionCreator<ProfileActions> = () => {
    return {
        type: ProfileActionTypes.LOGOUT
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
        if (user.status === 200) {
            dispatch(success('Login Successful',user.status));
            dispatch(clearMessage());
            return dispatch({
                type: UserActionTypes.LOGIN,
                user: user.data
            })
        }
        else {
            return dispatch(error('Failed',400));
        };
    };
};
export const userProfile: ActionCreator<ThunkAction<Promise<AnyAction>, ProfileState, null, ProfileActions>> = (id:number) => {
    return async (dispatch: Dispatch<ProfileActions>) => {
        const profile = await userService.getProfile(id);
        if (profile.status === 200) {
            return dispatch({
                type: ProfileActionTypes.LOGIN,
                profile: profile.data
            })
        }
        else {
            return dispatch(({
                type: ProfileActionTypes.LOGOUT
            }));
        };
    };
};
export const userProfileUpdate: 
ActionCreator<ThunkAction<Promise<AnyAction>, ProfileState, null, ProfileActions>> = (data:any) => {
    return async (dispatch: Dispatch<ProfileActions>) => {
        const profile = await userService.updateProfile(data);
        
        if (profile.status === 200) {
            return dispatch({
                type: ProfileActionTypes.UPDATE,
                profile: profile.data
            })
        }
        else {
            return dispatch(({
                type: ProfileActionTypes.LOGOUT
            }));
        };
    };
};

export const userLogout: 
ActionCreator<ThunkAction<Promise<AnyAction>, UserState, null, UserActions>> 
= () => {
    return async (dispatch: Dispatch<UserActions | ProfileActions>) => {
        const response=await authService.logout();
        if (response.status === 200) {
            dispatch(profileLogout())
            return dispatch(logout())
        }
        else {
            return dispatch(error('Failed',400));
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
                dispatch(success('User Created',user.status))
                return dispatch({
                    type: UserActionTypes.REGISTER,   
                })
                
            }
            return dispatch({
                type: UserActionTypes.REGISTER,
                
            })
            
        };
    };