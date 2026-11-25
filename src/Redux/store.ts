// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loadingReduce from './loadingSlice';
import userReduce from './userSlice';


export const store = configureStore({
  reducer: {
    loading: loadingReduce,
    user: userReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
