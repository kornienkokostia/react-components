import { MovieResponse, MoviesResponse } from '../models/movie';
import { useHttp } from './http.hook';

const IMDBService = () => {
  const { request } = useHttp();
  const _apiBase = 'https://api.themoviedb.org/3';
  const _apiLang = 'language=en-US';
  const _apiKey3 = 'api_key=62050b72659b37dc215bf1de992857d4';
  const _imageBig = 'https://image.tmdb.org/t/p/w500';

  const getPopularMovies = async () =>
    (await request(`${_apiBase}/movie/popular?${_apiKey3}&${_apiLang}&page=1`)) as MoviesResponse;

  const getSearchReasults = async (query: string) =>
    (await request(
      `${_apiBase}/search/movie?${_apiKey3}&${_apiLang}&query=${query}&page=1`
    )) as MoviesResponse;

  const getMovie = async (id: number) =>
    (await request(`${_apiBase}/movie/${id}?${_apiKey3}&${_apiLang}`)) as MovieResponse;

  return {
    getPopularMovies,
    getSearchReasults,
    getMovie,
    _imageBig,
  };
};

export default IMDBService;
