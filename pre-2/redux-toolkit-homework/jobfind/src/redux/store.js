import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./jobSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export default store;
