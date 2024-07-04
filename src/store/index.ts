import {configureStore} from '@reduxjs/toolkit';
import busesReducer from './buses/slice.ts';

export const store = configureStore({
  reducer: {
    buses: busesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
