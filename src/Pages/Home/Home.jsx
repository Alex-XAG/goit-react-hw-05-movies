import { useEffect, useState } from 'react';
import { HomeLink, HomeList, HomeTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';
const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTrend = async () => {
      await fetch(`${BASE_URL}?${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          setTrendMovies(data.results);
        })
        .catch(err => console.error(err))
        .finally(setIsLoading(false));
    };
    getTrend();
  }, []);

  // const trend = getTrend();

  // console.log(trendMovies);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <HomeLink to={`/movies/${movie.id}`}>
                {movie.original_title}
              </HomeLink>
              {/* <img src={movie.backdrop_path} /> */}
            </li>
          );
        })}
      </HomeList>
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
