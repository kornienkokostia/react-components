import React from 'react';
import './searchBar.scss';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setSearch, updateMovies } from '../../store/movieSlice';
import { useGetSearchReasultsQuery } from '../../services/themoviedb';

interface RootState {
  movies: {
    search: string;
  };
}

export const SearchBar = () => {
  const { search } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch<AppDispatch>();

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.currentTarget.value));
  };

  const { data } = useGetSearchReasultsQuery(search);
  // dispatch(updateMovies(data!.results));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(data);
    }
  };

  return (
    <div className="search-bar">
      <svg
        width="16"
        height="16"
        className="search-bar-icon"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2506 14.28L11.3506 10.38C12.3149 9.18143 12.782 7.65831 12.6554 6.12524C12.5289 4.59217 11.8183 3.16627 10.6705 2.14209C9.52278 1.11791 8.02548 0.573684 6.48795 0.62184C4.95042 0.669997 3.49012 1.30685 2.40869 2.40085C1.32726 3.49485 0.707332 4.96242 0.676953 6.50041C0.646574 8.03839 1.20807 9.5293 2.24545 10.6652C3.28283 11.801 4.71685 12.495 6.25128 12.6039C7.78571 12.7127 9.30333 12.228 10.4906 11.25L14.3906 15.15C14.4466 15.2074 14.5134 15.2531 14.5873 15.2843C14.6611 15.3155 14.7405 15.3315 14.8206 15.3315C14.9008 15.3315 14.9802 15.3155 15.054 15.2843C15.1279 15.2531 15.1947 15.2074 15.2506 15.15C15.3648 15.034 15.4289 14.8777 15.4289 14.715C15.4289 14.5522 15.3648 14.396 15.2506 14.28ZM1.86065 6.56997C1.86065 5.61864 2.14275 4.68868 2.67128 3.89768C3.19981 3.10668 3.95103 2.49017 4.82994 2.12611C5.70885 1.76205 6.67598 1.6668 7.60903 1.85239C8.54208 2.03799 9.39914 2.4961 10.0718 3.16879C10.7445 3.84148 11.2026 4.69854 11.3882 5.63159C11.5738 6.56463 11.4786 7.53177 11.1145 8.41068C10.7504 9.28959 10.1339 10.0408 9.34294 10.5693C8.55194 11.0979 7.62197 11.38 6.67065 11.38C5.39495 11.38 4.17151 10.8732 3.26946 9.97116C2.36741 9.06911 1.86065 7.84566 1.86065 6.56997Z"
          fill="rgba(0, 0, 0, 0.54)"
        />
      </svg>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Find in Movies"
        value={search}
        onInput={(e) => handleInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        data-testid="input"
      />
    </div>
  );
};
