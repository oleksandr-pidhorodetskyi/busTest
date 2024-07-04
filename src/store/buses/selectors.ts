import {RootState} from '../index.ts';

export const selectBuses = (state: RootState) => state.buses.allBuses;
