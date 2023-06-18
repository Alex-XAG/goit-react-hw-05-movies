import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  DetailsArticle,
  DetailsLink,
  DetailsList,
  DetailsSection,
  DetailsSubTitle,
  DetailsText,
  DetailsTitle,
  MovieDetailsContainer,
} from './MoviesDetails.styled';
import { Loader } from 'components/Loader/Loader';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { moviesId } = useParams();
  const { backdrop_path, original_title, overview } = movieDetails;

  const location = useLocation();
  const goBackLink = location?.state?.from || '/';

  useEffect(() => {
    setIsLoading(true);
    const getMovieData = () =>
      fetch(`${BASE_URL}${moviesId}?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(movieData => {
          setMovieDetails(movieData);
        })
        .catch(err => console.error(err))
        .finally(setIsLoading(false));

    getMovieData();
  }, [moviesId]);

  useEffect(() => {
    if (!movieDetails.genres) {
      return;
    }
    const genres = movieDetails.genres.map(genre => genre.name);

    setGenres(genres.join(', '));
  }, [movieDetails, genres]);

  return (
    <MovieDetailsContainer>
      <DetailsLink to={goBackLink}>Back to the page colletction</DetailsLink>
      <DetailsSection>
        <div>
          <img src={`${IMG_BASE_URL}${backdrop_path}`} alt={original_title} />
        </div>
        <DetailsArticle>
          <DetailsTitle>{original_title}</DetailsTitle>
          <DetailsText>User score: ???</DetailsText>
          <DetailsSubTitle>Overview</DetailsSubTitle>
          <DetailsText>{overview}</DetailsText>
          <DetailsSubTitle>Genres</DetailsSubTitle>
          <DetailsText>{genres}</DetailsText>
        </DetailsArticle>
      </DetailsSection>

      <DetailsList>
        <li>
          <DetailsLink to="cast">Cast</DetailsLink>
        </li>
        <li>
          <DetailsLink to="reviews">Reviews</DetailsLink>
        </li>
      </DetailsList>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
    </MovieDetailsContainer>
  );
};

export default MoviesDetails;
