import { Reducer } from "redux";
import { ProfileActionTypes } from "../actions/actionEnums";
import { ProfileActions, ProfileState } from "../actions/actionsTypes";

const initialUserState: ProfileState = {
    id: 0,
    profile_image: '',
    bio: "",
    location: "",
    birth_date: "",
    phoneNumber: "",
    points: 0,
    level: "",
    user: 0
};
export const profileReducer: Reducer<ProfileState, ProfileActions> = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        // TODO - change the state
        case ProfileActionTypes.LOGIN: {
            return {
                id: action.profile.id,
                profile_image: action.profile.profile_image,
                bio: action.profile.bio,
                location: action.profile.location,
                birth_date: action.profile.birth_date,
                phoneNumber: action.profile.phoneNumber,
                points: action.profile.points,
                level: action.profile.level,
                user: action.profile.user
            };
        }
        case ProfileActionTypes.LOGOUT: {
            return {
                id: 0,
                profile_image: '',
                bio: "",
                location: "",
                birth_date: "",
                phoneNumber: "",
                points: 0,
                level: "",
                user: 0
            };
        }
        case ProfileActionTypes.UPDATE: {
            return {
                id: action.profile.id,
                profile_image: action.profile.profile_image,
                bio: action.profile.bio,
                location: action.profile.location,
                birth_date: action.profile.birth_date,
                phoneNumber: action.profile.phoneNumber,
                points: action.profile.points,
                level: action.profile.level,
                user: action.profile.user
            };
        }
    }
    return state;
};