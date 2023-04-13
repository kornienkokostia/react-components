import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MoviesListCard } from '../MoviesListCard';
import { Movie } from '../../../../models/movie';

const testMovie: Movie = {
  adult: false,
  backdrop_path: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
  genre_ids: [16, 12, 10751, 14, 35],
  id: 502356,
  original_language: 'en',
  original_title: 'The Super Mario Bros. Movie',
  overview:
    'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
  popularity: 9065.306,
  poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  release_date: '2023-04-05',
  title: 'The Super Mario Bros. Movie',
  video: false,
  vote_average: 7.5,
  vote_count: 631,
};

describe('MoviesListCard', () => {
  test('renders movie title and poster', () => {
    render(<MoviesListCard movie={testMovie} />);
    const titleElement = screen.getByText(testMovie.title);
    const posterElement = screen.getByAltText('poster');
    expect(titleElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });
});
