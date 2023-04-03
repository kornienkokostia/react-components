import React from 'react';
import './mainPage.scss';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { MoviesList } from '../../components/movies-list/MoviesList';
import { MoviesListProvider } from '../../context/MoviesListContext';

export const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <MoviesListProvider>
          <SearchBar />
          <MoviesList />
        </MoviesListProvider>
      </div>
    </div>
  );
};
