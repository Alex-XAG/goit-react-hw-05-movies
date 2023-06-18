import { Outlet } from 'react-router-dom';
import { LayoutLink, LayoutList, Main } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <LayoutList>
        <li>
          <LayoutLink to="/">Home page</LayoutLink>
        </li>
        <li>
          <LayoutLink to="/movies">Movies Search</LayoutLink>
        </li>
      </LayoutList>
      <Main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};
