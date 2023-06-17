import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieStr = searchParams.get('movieStr') ?? '';

  useEffect(() => {
    const getMoviesByQuery = () =>
      fetch(`${BASE_URL}?${API_KEY}&include_adult=false&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    getMoviesByQuery();
  }, []);

  const updateQueryString = evt => {
    const movieStrValue = evt.target.value;
    // if (movieStrValue === '') {
    //   return setSearchParams({});
    // }
    setQuery({ movieStrValue });
  };
  const visibleMovies = movies.filter(movie => movie.includes(query));
  return (
    <div>
      <form>
        <input type="text" value={query} onChange={updateQueryString} />
        <button>search</button>
      </form>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
