import {RootState} from '../index.ts';

export const selectAllBuses = (state: RootState) => state.buses.allBuses;
