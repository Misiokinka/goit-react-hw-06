import { createSlice } from "@reduxjs/toolkit";

const FILTERS_INITIAL_STATE = {
  filters: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: FILTERS_INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.filters;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
