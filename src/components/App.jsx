import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Movies from 'Pages/Movies/Movies';
import Home from 'Pages/Home/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import MoviesDetails from 'Pages/MoviesDetails/MoviesDetails';

// const API_KEY = 'fcd230550d5bc22e169a178a7e9d550c';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};
