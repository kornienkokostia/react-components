import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import { themoviedbApi } from '../services/themoviedb';
import userReducer from './userSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const store: ToolkitStore = configureStore({
  reducer: {
    movies: movieReducer,
    [themoviedbApi.reducerPath]: themoviedbApi.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themoviedbApi.middleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
