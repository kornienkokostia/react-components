import { Movie } from './movie';
import User from './user';

export interface RootState {
  movies: {
    search: string;
    movies: Movie[];
    moviesLoading: boolean;
    searchMode: boolean;
  };
  users: {
    users: User[];
    showPopup: boolean;
  };
}
