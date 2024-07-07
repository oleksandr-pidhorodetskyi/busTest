import {RootState} from '../index.ts';

export const selectAllBuses = (state: RootState) => state.buses.allBuses;
export const selectedBus = (state: RootState) => state.buses.selectedBus;
