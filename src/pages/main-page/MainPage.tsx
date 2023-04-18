import React from 'react';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { MoviesList } from '../../components/movies-list/MoviesList';
import { Header } from '../../components/header/Header';

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
