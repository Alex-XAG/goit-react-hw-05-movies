import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../Pages/MoviesDetails/MoviesDetails')
);

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
