import { Reducer } from "redux";
import { UserActionTypes } from "../actions/actionEnums";
import { UserActions} from "../actions/actionsTypes";
export interface ErrorState{
    code?:number;
    message?:string;
}
const initialUserState: ErrorState = {
    code: 0,
    message: ""
};
export const messReducer: Reducer<ErrorState, UserActions> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case UserActionTypes.SUCCESS: {
            return {
                ...state,
                message: action.payload,
                code:action.code
            };
        }
        case UserActionTypes.ERROR: {
            return {
                ...state,
                message: action.payload,
                code:action.code
                
            };
        }
    }
    return state;
};