import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './reducers/crypto';

const rootReducer = combineReducers({
  cryptoReducer
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  })
  return store;
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
