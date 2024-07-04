import {createSlice} from '@reduxjs/toolkit';
import {BusType} from './types.ts';

interface BusesState {
  allBuses: BusType[];
  isLoading: boolean;
}

const initialState: BusesState = {
  allBuses: [],
  isLoading: false,
};

export const slice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const {startLoading, stopLoading} = slice.actions;
export default slice.reducer;
