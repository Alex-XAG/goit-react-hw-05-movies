import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';
const MoviesDetails = () => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState('');

  useEffect(() => {
    const getMovieData = async () =>
      await fetch(`${BASE_URL}${moviesId}?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(movieData => {
          setMovieDetails(movieData);
        })
        .catch(err => console.error(err));

    getMovieData();
  }, [moviesId]);

  useEffect(() => {
    if (!movieDetails.genres) {
      return;
    }
    const genres = movieDetails.genres.map(genre => genre.name);

    setGenres(genres.join(' '));
  }, [movieDetails, genres]);

  return (
    <>
      <h1>MovieId: {moviesId}</h1>

      <Link to="/">Back to the page colletction</Link>
      <div>
        <img
          src={movieDetails.backdrop_path}
          alt={movieDetails.original_title}
        />
        <h2>{movieDetails.original_title}</h2>
        <p>User score: ???</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
