// using Redux Toolkit's configureStore function and combining reducers using the reducer configuration option
// Importing Necessary Modules
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// Setting Up the Redux Store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// Exporting RootState
export type RootState = ReturnType<typeof store.getState>;
