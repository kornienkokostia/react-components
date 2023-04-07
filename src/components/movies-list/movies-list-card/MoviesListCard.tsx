import React, { useState } from 'react';
import { Movie } from '../../../models/movie';
import IMDBService from '../../../services/IMDBService';
import './moviesListCard.scss';

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
            <svg
              width="13"
              height="14"
              className="movie-card-info-rating-icon"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49599 0.172974L4.52099 5.25097H0.00698853L3.74499 8.00197L2.26399 13.151L6.49599 9.76497L10.728 13.151L9.24599 8.00197L12.985 5.25097H8.47099L6.49599 0.172974Z"
                fill="#FF9500"
              />
            </svg>
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
