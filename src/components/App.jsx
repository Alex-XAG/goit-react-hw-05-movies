import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
// import Home from 'Pages/Home/Home';
// import Movies from 'Pages/Movies/Movies';
// import MoviesDetails from 'Pages/MoviesDetails/MoviesDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

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
