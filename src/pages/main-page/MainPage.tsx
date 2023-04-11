import React from 'react';
import './mainPage.scss';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { MoviesList } from '../../components/movies-list/MoviesList';

export const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <SearchBar />
        <MoviesList />
      </div>
    </div>
  );
};
