import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Featuers/Login/loginslice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
