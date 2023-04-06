import React, { useState } from 'react';
import { Movie } from '../../../models/movie';
import IMDBService from '../../../services/IMDBService';
import './moviesListCard.scss';
import Rating from '../../../assets/rating.svg';
import { MovieInfoPopup } from './MovieInfoPopup';
import ReactDOM from 'react-dom';

interface PassedProps {
  movie: Movie;
}

export const MoviesListCard = (props: PassedProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const movie = props.movie;
  return (
    <>
      <div className={`movie-card ${showPopup ? 'active' : ''}`} onClick={() => setShowPopup(true)}>
        <img
          src={
            movie.poster_path !== null
              ? `${IMDBService()._imageBig}/${movie.poster_path}`
              : `https://m.media-amazon.com/images/S/sash/i-t32yvKixg10fG.png`
          }
          className="movie-card-img"
          alt="poster"
        />
        <div className="movie-card-info">
          <p className="movie-card-info-title">{movie.title}</p>
          <div className="movie-card-info-rating">
            <img src={Rating} alt="rating" className="movie-card-info-rating-icon" />
            <span>{movie.vote_average !== 0 ? movie.vote_average.toFixed(1) : 0}</span>
          </div>
        </div>
      </div>
      {showPopup &&
        ReactDOM.createPortal(
          <MovieInfoPopup showPopup={showPopup} setShowPopup={setShowPopup} movieId={movie.id} />,
          document.getElementById('root')!
        )}
    </>
  );
};
