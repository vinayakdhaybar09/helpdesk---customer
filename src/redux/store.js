import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import userSlice from "./features/User";
// const rootReducer = combineReducers({
//   featureName: userSlice,
// });

// const store = configureStore({
//   reducer: {
//     feature: rootReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

const combineReducer = combineReducers({
  user: userSlice,
})

export const store = () => 
configureStore({
  reducer: combineReducer,
})

export const wrapper = createWrapper(store);