import { ProfileActionTypes, UserActionTypes } from "./actionEnums";

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

export interface ProfileLoginAction {
    type: ProfileActionTypes.LOGIN,
    profile:ProfileState
    }
export interface ProfileLogoutAction {
        type: ProfileActionTypes.LOGOUT
    }
export interface ProfileUpdateAction {
        type: ProfileActionTypes.UPDATE,
        profile:ProfileState
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
    active:boolean;
    
    }

export interface ProfileState {
    id: number;
    profile_image: string;
    bio: string;
    location: string;
    birth_date: string;
    phoneNumber: string;
    points: number;
    level: string;
    user: number;
        }
export type UserActions =
| UsersLoginAction
| UsersLoadingAction
| UsersRegisterAction
| UsersErrorAction
| UsersSuccessAction
| UsersLogoutAction

export type ProfileActions =
| ProfileLoginAction
| ProfileLogoutAction
| ProfileUpdateAction