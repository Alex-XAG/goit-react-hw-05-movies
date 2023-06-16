import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';
const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  // https://api.themoviedb.org/3/movie/top_rated?api_key=fcd230550d5bc22e169a178a7e9d550c&language=en-US&page=1

  useEffect(() => {
    // if (trendMovies === []) {
    //   return;
    // }
    const getTrend = () =>
      fetch(`${BASE_URL}?${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setTrendMovies(data.results);
        })
        .catch(err => console.error(err));
    getTrend();
  }, []);

  // const trend = getTrend();

  // console.log(trendMovies);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.original_title}</Link>
              {/* <img src={movie.backdrop_path} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
