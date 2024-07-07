import {createSlice} from '@reduxjs/toolkit';
import {BusType, SeatStatus, SeatType} from './types.ts';

interface BusesState {
  allBuses: BusType[];
  selectedBus: BusType;
  selectedSeat: SeatType;
  isLoading: boolean;
}
const initialSelectedBus: BusType = {
  id: '',
  from: '',
  to: '',
  seats: [],
};
const initialSelectedSeat: SeatType = {
  id: '',
  title: '',
  status: SeatStatus.available,
};

const initialState: BusesState = {
  allBuses: [],
  selectedBus: initialSelectedBus,
  selectedSeat: initialSelectedSeat,
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
    setSelectedSeat(state, {payload}: {payload: SeatType}) {
      state.selectedSeat = payload;

      const seatIndex = state.selectedBus.seats.findIndex(
        seat => seat.id === payload.id,
      );
      if (seatIndex !== -1) {
        state.selectedBus.seats[seatIndex].status = SeatStatus.reserved;
      }

      const busToUpdate = state.allBuses.find(
        bus => bus.id === state.selectedBus.id,
      );
      if (busToUpdate) {
        const seatIndex = busToUpdate.seats.findIndex(
          seat => seat.id === payload.id,
        );
        if (seatIndex !== -1) {
          busToUpdate.seats[seatIndex].status = SeatStatus.reserved;
        }
      }
    },
    stopLoading(state, payload) {
      state.isLoading = false;
    },
  },
});

export const {setAllBuses, setSelectedBus, setSelectedSeat, stopLoading} =
  busesSlice.actions;
export default busesSlice.reducer;
