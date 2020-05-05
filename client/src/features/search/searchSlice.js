import { createSlice, createSelector } from '@reduxjs/toolkit';

import { selectJobs } from 'features/processes/processesSlice';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchQuery: (state, action) => state = action.payload,
    resetSearchQuery: state => ''
  }
});

export const { setSearchQuery, resetSearchQuery } = searchSlice.actions;

export const selectSearchQuery = state => state.search;

export const findedJobs = createSelector(
  selectJobs,
  selectSearchQuery,
  (jobs, query) => jobs.filter(j => j.name.includes(query))
);


export default searchSlice.reducer;