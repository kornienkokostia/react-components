import React, { useEffect, useState } from 'react';
import './moviesList.scss';
import IMDBService from '../../services/IMDBService';
import { Movie } from '../../models/movie';
import { useMoviesList } from '../../context/MoviesListContext';
import { MoviesListCard } from './movies-list-card/MoviesListCard';

export const MoviesList = () => {
  const { moviesList } = useMoviesList();

  return (
    <>
      <h1 className="movies-list-title">Movies List</h1>
      <div className="movies-list">
        {moviesList && moviesList.map((el, i) => <MoviesListCard movie={el} key={i} />)}
      </div>
    </>
  );
};
