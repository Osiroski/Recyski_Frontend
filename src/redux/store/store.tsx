import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { UserState } from "../actions/actionsTypes";

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import { ErrorState, messReducer } from '../reducers/messageReducer';

export interface IApplicationState {
  user: UserState;
  messages:ErrorState
}
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers<IApplicationState>({
  user: userReducer,
  messages: messReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
});
export type RootState = ReturnType<typeof rootReducer>
export default store;
