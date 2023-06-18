const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

export const getMovieData = async movieId => {
  await fetch(`${BASE_URL}${movieId}?${API_KEY}&language=en-US`).then(
    response => response.json()
  );
};
