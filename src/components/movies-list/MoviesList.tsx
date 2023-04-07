import React from 'react';
import './moviesList.scss';
import { useMoviesList } from '../../context/MoviesListContext';
import { MoviesListCard } from './movies-list-card/MoviesListCard';
import { DotSpinner } from '../dots-spinner/DotSpinner';

export const MoviesList = () => {
  const { moviesList, moviesSearchActive, moviesListLoading } = useMoviesList();

  return (
    <>
      <h1 className="movies-list-title">
        {moviesSearchActive ? 'Movies Search Results' : 'Popular Movies'}
      </h1>
      <div className="movies-list">
        {moviesListLoading && <DotSpinner theme="light" size="big" />}
        {!moviesListLoading &&
          moviesList &&
          moviesList.map((el, i) => <MoviesListCard movie={el} key={i} />)}
      </div>
    </>
  );
};
