import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../models/movie';

interface MovieSlice {
  search: string;
  movies: Movie[];
  moviesLoading: boolean;
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    search: '',
    movies: [],
    moviesLoading: true,
  } as MovieSlice,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    updateMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setSearch, updateMovies } = movieSlice.actions;

export default movieSlice.reducer;
