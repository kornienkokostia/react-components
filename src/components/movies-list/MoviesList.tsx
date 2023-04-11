import React, { useEffect } from 'react';
import './moviesList.scss';
import { MoviesListCard } from './movies-list-card/MoviesListCard';
import { DotSpinner } from '../dots-spinner/DotSpinner';
import { useGetPopularMoviesQuery } from '../../services/themoviedb';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateMovies } from '../../store/movieSlice';
import { Movie, MovieResponse, MoviesResponse } from '../../models/movie';

interface RootState {
  movies: {
    search: string;
    movies: Movie[];
  };
}

export const MoviesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, search } = useSelector((state: RootState) => state.movies);
  const { data, isLoading } = useGetPopularMoviesQuery();
  useEffect(() => {
    if (data) {
      dispatch(updateMovies(data.results));
    }
  });

  return (
    <>
      <h1 className="movies-list-title">
        {search.length ? 'Movies Search Results' : 'Popular Movies'}
      </h1>
      <div className="movies-list">
        {isLoading && <DotSpinner theme="light" size="big" />}
        {!isLoading && movies && movies.map((el, i) => <MoviesListCard movie={el} key={i} />)}
      </div>
    </>
  );
};
