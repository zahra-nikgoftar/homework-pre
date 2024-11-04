import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedFilters: [],
  },
  reducers: {
    addFilter: (state, action) => {
      const newFilter = action.payload;
      if (!state.selectedFilters.includes(newFilter)) {
        state.selectedFilters.push(newFilter);
      }
    },
    removeFilter: (state, action) => {
      const filterToRemove = action.payload;
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter !== filterToRemove
      );
    },
    clearFilters: (state) => {
      state.selectedFilters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
