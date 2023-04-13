import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MovieSlice {
  search: string;
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    search: '',
  } as MovieSlice,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = movieSlice.actions;

export default movieSlice.reducer;
