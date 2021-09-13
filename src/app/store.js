import { configureStore } from "@reduxjs/toolkit";
import appSlicer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    counter: appSlicer,
  },
});
