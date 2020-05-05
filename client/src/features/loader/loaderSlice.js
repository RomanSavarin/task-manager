import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => state = action.payload
  }
});

export const { setIsLoading } = loaderSlice.actions;

export const selectIsLoading = state => state.isLoading;

export default loaderSlice.reducer;