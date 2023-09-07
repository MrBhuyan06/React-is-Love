import { configureStore } from "@reduxjs/toolkit";
import appFav from "./appFav.js";
const store = configureStore({
  reducer: {
    fav: appFav,
  },
});
export default store;
