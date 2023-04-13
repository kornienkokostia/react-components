import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieResponse, MoviesResponse } from '../models/movie';

const _apiBase = 'https://api.themoviedb.org/3';
const _apiLang = 'language=en-US';
const _apiKey3 = 'api_key=62050b72659b37dc215bf1de992857d4';
export const _imageBig = 'https://image.tmdb.org/t/p/w500';

export const themoviedbApi = createApi({
  reducerPath: 'themoviedbApi',
  baseQuery: fetchBaseQuery({ baseUrl: _apiBase }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, string | undefined>({
      query: (query) =>
        query
          ? `/search/movie?${_apiKey3}&${_apiLang}&query=${query}&page=1`
          : `/movie/popular?${_apiKey3}&${_apiLang}&page=1`,
    }),
    getMovie: builder.query<MovieResponse, number>({
      query: (id) => `/movie/${id}?${_apiKey3}&${_apiLang}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = themoviedbApi;
