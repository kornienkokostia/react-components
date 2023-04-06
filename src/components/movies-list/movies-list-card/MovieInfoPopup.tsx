import React, { useEffect, useState } from 'react';
import './movieInfoPopup.scss';
import IMDBService from '../../../services/IMDBService';
import { MovieResponse } from '../../../models/movie';
import { MovieAllInfo } from './MovieAllInfo';
import { DotSpinner } from '../../dots-spinner/DotSpinner';

interface Props {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  movieId: number;
}

export const MovieInfoPopup = (props: Props) => {
  const [movie, setMovie] = useState<MovieResponse>();
  const [moviesLoading, setMovieLoading] = useState<boolean>(true);

  useEffect(() => {
    onRequest(props.movieId);
  }, []);

  const onRequest = async (id: number) => {
    const movieResponse = await IMDBService().getMovie(id);
    setMovie(movieResponse);
    if (movieResponse) {
      setMovieLoading(false);
    }
  };

  document.body.classList.add('scroll-disabled');

  const hide = () => {
    props.setShowPopup(false);
    document.body.classList.remove('scroll-disabled');
  };

  return (
    <>
      <div
        className="movie-info-popup-wrapper"
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            hide();
          }
        }}
      >
        <div className="movie-info-popup-container">
          <button className="movie-info-popup-close-btn" onClick={hide}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20}>
                <path
                  d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"
                  fill="#6e6e73"
                ></path>
              </svg>
            </span>
          </button>
          <div className="movie-info-popup">
            {moviesLoading && <DotSpinner theme="light" size="big" />}
            {!moviesLoading && <MovieAllInfo movie={movie!} />}
          </div>
        </div>
      </div>
    </>
  );
};
