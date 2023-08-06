import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./redusers/wishListReducer/wishListSlice";

const rootReducer = combineReducers({
  wishListReducer,
 
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];