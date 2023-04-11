import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import { themoviedbApi } from '../services/themoviedb';

const store = configureStore({
  reducer: { movies: movieReducer, [themoviedbApi.reducerPath]: themoviedbApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themoviedbApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
