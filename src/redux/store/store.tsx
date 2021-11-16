import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { ProfileState, UserState } from "../actions/actionsTypes";

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import { ErrorState, messReducer } from '../reducers/messageReducer';
import { profileReducer } from '../reducers/profileReducer';

export interface IApplicationState {
  profile:ProfileState;
  user: UserState;
  messages:ErrorState;
}
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers<IApplicationState>({
  user: userReducer,
  messages: messReducer,
  profile:profileReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
});
export type RootState = ReturnType<typeof rootReducer>
export default store;
