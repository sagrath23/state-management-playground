import { configureStore } from '@reduxjs/toolkit';
import characterDetailReducer from './characterDetailSlice';

export const store = configureStore({
  reducer: {
    characterDetail: characterDetailReducer
  },
})