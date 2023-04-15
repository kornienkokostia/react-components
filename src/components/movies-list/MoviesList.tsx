import React from 'react';
import { MoviesListCard } from './movies-list-card/MoviesListCard';
import { DotSpinner } from '../dots-spinner/DotSpinner';
import { useGetMoviesQuery } from '../../services/themoviedb';
import { useSelector } from 'react-redux';
import { RootState } from '../../models/root-state';

export const MoviesList = () => {
  const { search } = useSelector((state: RootState) => state.movies);
  const { data, isFetching } = useGetMoviesQuery(search.length ? search : undefined);

  return (
    <>
      <h1 className="movies-list-title">
        {search.length ? 'Movies Search Results' : 'Popular Movies'}
      </h1>
      <div className="movies-list">
        {isFetching && <DotSpinner theme="light" size="big" />}
        {!isFetching && data && data.results.map((el, i) => <MoviesListCard movie={el} key={i} />)}
      </div>
    </>
  );
};
