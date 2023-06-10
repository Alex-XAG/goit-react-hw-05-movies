import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import DogDetails from './pages/DogDetails';
import { Layout } from 'components/AppStudy/componentsStudy/Layout';
import { Gallery } from './componentsStudy/Gallery';
import { Subbreeds } from './componentsStudy/Subbreeds';

export const AppStudy = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '32px',
        gap: '35px',
        flexWrap: 'wrap',
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<Subbreeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
