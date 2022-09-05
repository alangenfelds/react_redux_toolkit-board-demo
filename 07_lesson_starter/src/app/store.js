import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // adding our middleware to default one
    getDefaultMiddleware().concat(apiSlice.middleware),
});
