import React from 'react';
import { Movie } from '../../../models/movie';
import IMDBService from '../../../services/IMDBService';
import './moviesListCard.scss';
import Rating from '../../../assets/rating.svg';

interface PassedProps {
  movie: Movie;
}

export const MoviesListCard = (props: PassedProps) => {
  const movie = props.movie;
  return (
    <div className="movie-card">
      <img
        src={`${IMDBService()._imageBig}/${movie.poster_path}`}
        className="movie-card-img"
        alt="poster"
      />
      <div className="movie-card-info">
        <p className="movie-card-info-title">{movie.title}</p>
        <div className="movie-card-info-rating">
          <img src={Rating} alt="rating" className="movie-card-info-rating-icon" />
          <span>{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};
