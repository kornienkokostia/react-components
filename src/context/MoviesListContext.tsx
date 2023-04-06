import React, { useContext, useEffect, useState } from 'react';
import IMDBService from '../services/IMDBService';
import { Movie } from '../models/movie';

interface MoviesListContextProps {
  moviesList: Movie[];
  updateMoviesList: (search?: string) => Promise<void>;
  moviesSearchActive: boolean;
  moviesListLoading: boolean;
}

const MoviesListContext = React.createContext<MoviesListContextProps>({} as MoviesListContextProps);

interface Props {
  children: JSX.Element[];
}

export const useMoviesList = () => {
  return useContext(MoviesListContext);
};

export const MoviesListProvider = (props: Props) => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [moviesListLoading, setMoviesListLoading] = useState<boolean>(true);
  const [moviesSearchActive, setMoviesSearchActive] = useState<boolean>(false);

  useEffect(() => {
    updateMoviesList();
    console.log('update');
  }, []);

  const updateMoviesList = async (search?: string) => {
    if (search) {
      setMoviesListLoading(true);
      const searchMovies = await IMDBService().getSearchReasults(search);
      setMoviesList(searchMovies.results);
      setMoviesSearchActive(true);
    } else {
      setMoviesListLoading(true);
      const allMovies = await IMDBService().getPopularMovies();
      setMoviesList(allMovies.results);
      setMoviesSearchActive(false);
    }
    setMoviesListLoading(false);
  };

  return (
    <MoviesListContext.Provider
      value={{
        moviesList: moviesList,
        updateMoviesList: updateMoviesList,
        moviesSearchActive: moviesSearchActive,
        moviesListLoading: moviesListLoading,
      }}
    >
      {props.children}
    </MoviesListContext.Provider>
  );
};
