import { render, screen } from '@testing-library/react';
import IMDBService from '../IMDBService';
import { useHttp } from '../http.hook';

jest.mock('../http.hook', () => ({
  useHttp: () => ({
    request: jest.fn(),
  }),
}));

describe('IMDBService', () => {
  describe('getPopularMovies', () => {
    it('should call the request function with the correct URL', async () => {
      const { request } = useHttp();
      const service = IMDBService();

      await service.getPopularMovies();
    });
  });

  describe('getSearchReasults', () => {
    it('should call the request function with the correct URL and query parameter', async () => {
      const { request } = useHttp();
      const service = IMDBService();
      const query = 'star wars';

      await service.getSearchReasults(query);
    });
  });

  describe('getMovie', () => {
    it('should call the request function with the correct URL and movie ID', async () => {
      const { request } = useHttp();
      const service = IMDBService();
      const movieId = 1234;

      await service.getMovie(movieId);
    });
  });

  describe('_imageBig', () => {
    it('should return the correct URL for big images', () => {
      const service = IMDBService();
      expect(service._imageBig).toBe('https://image.tmdb.org/t/p/w500');
    });
  });
});
