import React, { useContext, useEffect, useState } from 'react';
import IMDBService from '../services/IMDBService';
import { Movie } from '../models/movie';

const MoviesListContext = React.createContext({
  moviesList: [] as Movie[],
});

interface Props {
  children: JSX.Element[];
}

export const useMoviesList = () => {
  return useContext(MoviesListContext);
};

export const MoviesListProvider = (props: Props) => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [moviesListLoading, setMoviesListLoading] = useState<boolean>(true);

  useEffect(() => {
    updateMoviesList();
    console.log('update');
  }, []);

  const updateMoviesList = async () => {
    const allMovies = await IMDBService().getPopularMovies();
    setMoviesList(allMovies.results);
  };

  return (
    <MoviesListContext.Provider
      value={{
        moviesList: moviesList,
      }}
    >
      {props.children}
    </MoviesListContext.Provider>
  );
};
