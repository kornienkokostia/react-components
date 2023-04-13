import React, { useEffect } from 'react';
import './moviesList.scss';
import { MoviesListCard } from './movies-list-card/MoviesListCard';
import { DotSpinner } from '../dots-spinner/DotSpinner';
import { useGetPopularMoviesQuery } from '../../services/themoviedb';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setMoviesLoading, updateMovies } from '../../store/movieSlice';
import { RootState } from '../../models/root-state';

export const MoviesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, searchMode, moviesLoading } = useSelector((state: RootState) => state.movies);
  const { data } = useGetPopularMoviesQuery();

  useEffect(() => {
    if (!searchMode) {
      dispatch(setMoviesLoading(true));
    }

    if (data && !searchMode) {
      dispatch(setMoviesLoading(false));
      dispatch(updateMovies(data.results));
    }
  }, [dispatch, data, searchMode]);

  return (
    <>
      <h1 className="movies-list-title">
        {searchMode ? 'Movies Search Results' : 'Popular Movies'}
      </h1>
      <div className="movies-list">
        {moviesLoading && <DotSpinner theme="light" size="big" />}
        {!moviesLoading && movies && movies.map((el, i) => <MoviesListCard movie={el} key={i} />)}
      </div>
    </>
  );
};
