import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import FeatureSlice from "./features/FeatureSlice";
// const rootReducer = combineReducers({
//   featureName: FeatureSlice,
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
  user: FeatureSlice,
})

export const store = () => 
configureStore({
  reducer: combineReducer,
})

export const wrapper = createWrapper(store);