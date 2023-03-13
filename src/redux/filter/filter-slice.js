import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (store, { payload }) => payload,
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;
