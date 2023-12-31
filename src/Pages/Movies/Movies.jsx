import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  MoviesButton,
  MoviesContainer,
  MoviesForm,
  MoviesInput,
  MoviesLink,
  MoviesList,
} from './Movies.styled';
import { Loader } from 'components/Loader/Loader';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) {
      return;
    }
    setIsLoading(true);
    const getMoviesByQuery = async () =>
      await fetch(
        `${BASE_URL}?${API_KEY}&query=${queryParams}&include_adult=false&language=en-US&page=1`
      )
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err))
        .finally(setIsLoading(false));

    getMoviesByQuery();
  }, [queryParams]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Select any query');
      return;
    }
    setSearchParams({ query });
    e.currentTarget.reset();
  };

  return (
    <MoviesContainer>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput type="text" value={query} onChange={onChange} />
        <MoviesButton type="submit">Search</MoviesButton>
      </MoviesForm>

      <MoviesList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <MoviesLink to={`${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </MoviesLink>
            </li>
          );
        })}
      </MoviesList>

      {!movies.length && <p>We have not any results by your query</p>}
      {isLoading && <Loader />}
    </MoviesContainer>
  );
};

export default Movies;
