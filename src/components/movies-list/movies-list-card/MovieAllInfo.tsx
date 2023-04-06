import React from 'react';
import './movieAllInfo.scss';
import { MovieResponse } from '../../../models/movie';
import IMDBService from '../../../services/IMDBService';
import Rating from '../../../assets/rating.svg';

interface Props {
  movie: MovieResponse;
}

export const MovieAllInfo = (props: Props) => {
  const movie = props.movie;

  const convertTime = (hours: number) => {
    if (Number.isNaN(hours)) return '';
    const date = new Date(hours * 1000).toISOString();
    const h = date.slice(14, 16);
    const m = date.slice(17, 19);
    return `${+h !== 0 ? `${+h}h ` : ''}${+m}m`;
  };

  return (
    <div className="movie">
      <div className="movie-top">
        <img
          src={
            movie.poster_path !== null
              ? `${IMDBService()._imageBig}/${movie.poster_path}`
              : `https://m.media-amazon.com/images/S/sash/i-t32yvKixg10fG.png`
          }
          alt="poster"
          className="movie-poster"
        />
        <div className="movie-info">
          <h1 className="movie-info-title">{movie.title}</h1>
          <div className="movie-info-items">
            {movie.release_date && (
              <span className="movie-info-item">{movie.release_date.split('-')[0]}</span>
            )}
            {movie.runtime && <span className="movie-info-item">{convertTime(movie.runtime)}</span>}
          </div>
          <div className="movie-info-rating">
            <img src={Rating} alt="rating" className="movie-info-rating-icon" />
            <span>{movie.vote_average !== 0 ? movie.vote_average.toFixed(1) : 0}</span>
          </div>
          <div className="movie-info-overview">{movie.overview}</div>
          <div className="movie-info-genres">
            {movie.genres.map((el, i) => (
              <div key={i} className="movie-info-genre">
                <span>{el.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
