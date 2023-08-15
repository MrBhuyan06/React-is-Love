import { configureStore } from "@reduxjs/toolkit";
import appNavigator from "./appNavigator.js";
const store = configureStore({
  reducer: {
    app: appNavigator,
  },
});
export default store;
