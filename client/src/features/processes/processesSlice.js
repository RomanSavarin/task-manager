import { createSlice, createAction, createSelector } from '@reduxjs/toolkit';

import compareMixed from 'helpers/compareMixed';

export const processesSlice = createSlice({
  name: 'processes',
  initialState: [],
  reducers: {
    addProcesses: (state, action) => {
      return state.concat(action.payload);
    },
    addProcess: (state, action) => {
      state.push(action.payload);
    },
    removeProcess: (state,action) => {
      const i = state.findIndex(i  => i.id === action.payload);
      state.splice(i, 1);
    },
    sortBy: (state, action) => {
      const { prop, upward } = action.payload;
      state.sort(compareMixed(prop));
      upward && state.reverse();
    },
  },
});

export const create = createAction('processes/create');
export const fetch = createAction('processes/fetch');
export const deleteProcess = createAction('processes/deleteProcess');
export const { addProcesses, addProcess, removeProcess, sortBy } = processesSlice.actions;

export const selectProcesses = state => state.processes;
export const selectProcessesId = createSelector(
  selectProcesses,
  processes => processes.map(p => p.id)
);
export const selectJobs = createSelector(
  selectProcesses,
  processes => processes.map(p => p.jobs).flat()
);

export default processesSlice.reducer;