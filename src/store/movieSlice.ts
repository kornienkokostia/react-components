import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../models/movie';

interface MovieSlice {
  search: string;
  movies: Movie[];
  moviesLoading: boolean;
  searchMode: boolean;
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    search: '',
    movies: [],
    moviesLoading: true,
    searchMode: false,
  } as MovieSlice,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    updateMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    setSearchMode(state, action: PayloadAction<boolean>) {
      state.searchMode = action.payload;
    },
    setMoviesLoading(state, action: PayloadAction<boolean>) {
      state.moviesLoading = action.payload;
    },
  },
});

export const { setSearch, updateMovies, setSearchMode, setMoviesLoading } = movieSlice.actions;

export default movieSlice.reducer;
