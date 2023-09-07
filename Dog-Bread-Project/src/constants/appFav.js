import { createSlice } from "@reduxjs/toolkit";

const appFav = createSlice({
  name: "fav",
  initialState: {
    favorite: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },
    clearAll: (state) => {
      state.favorite = [];
    },
  },
});
export const { addFav, clearAll } = appFav.actions;
export default appFav.reducer;
