import User from './user';

export interface RootState {
  movies: {
    search: string;
  };
  users: {
    users: User[];
    showPopup: boolean;
  };
  page: {
    page: string;
  };
}
