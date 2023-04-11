import { Movie } from './movie';

export interface RootState {
  movies: {
    search: string;
    movies: Movie[];
    moviesLoading: boolean;
    searchMode: boolean;
  };
}
