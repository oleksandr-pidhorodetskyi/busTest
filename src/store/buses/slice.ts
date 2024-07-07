import {createSlice} from '@reduxjs/toolkit';
import {BusType} from './types.ts';

interface BusesState {
  allBuses: BusType[];
  selectedBus: BusType;
  isLoading: boolean;
}
const initialSelectedBus: BusType = {
  id: '',
  from: '',
  to: '',
  seats: [],
};

const initialState: BusesState = {
  allBuses: [],
  selectedBus: initialSelectedBus,
  isLoading: false,
};

export const busesSlice = createSlice({
  name: 'buses',
  initialState,
  reducers: {
    setAllBuses(state, {payload}: {payload: BusType[]}) {
      state.allBuses = payload;
    },
    setSelectedBus(state, {payload}: {payload: BusType}) {
      state.selectedBus = payload;
    },
    stopLoading(state, payload) {
      state.isLoading = false;
    },
  },
});

export const {setAllBuses, setSelectedBus, stopLoading} = busesSlice.actions;
export default busesSlice.reducer;
