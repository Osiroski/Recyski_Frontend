import { UserActionTypes } from "./actionEnums";

export interface UsersLoginAction {
    type: UserActionTypes.LOGIN,
    user:UserState
    }
export interface UsersRegisterAction {
    type: UserActionTypes.REGISTER

    }
export interface UsersLoadingAction {
    type: UserActionTypes.LOADING
    }
export interface UsersErrorAction {
    type: UserActionTypes.ERROR
    payload?: string
    code?:number
}
export interface UsersSuccessAction {
    type: UserActionTypes.SUCCESS
    payload?: string
    code?:number
}
export interface UsersLogoutAction {
    type: UserActionTypes.LOGOUT
}

export interface UserState {
    id: number;
    userLoading: boolean;
    isLoggedin: boolean;
    username:string;
    email:string;
    last_name:string,
    first_name:string;
    token:string;
    active:boolean
    }

export type UserActions =
| UsersLoginAction
| UsersLoadingAction
| UsersRegisterAction
| UsersErrorAction
| UsersSuccessAction
| UsersLogoutAction

