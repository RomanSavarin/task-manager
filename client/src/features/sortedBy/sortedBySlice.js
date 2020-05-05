import { createSlice } from '@reduxjs/toolkit';

export const sortedBySlice = createSlice({
  name: 'sortedBy',
  initialState: ' ',
  reducers: {
    setSortedBy: (state, action) => state = action.payload,
    resetSortedBy: state => ' '
  }
});

export const { setSortedBy, resetSortedBy } = sortedBySlice.actions;

export const selectSortedBy = state => state.sortedBy;

export default sortedBySlice.reducer;