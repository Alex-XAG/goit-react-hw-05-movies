import { NavLink, Outlet } from 'react-router-dom';
import { NavList } from '../AppStudy.styled';

export const Layout = () => {
  return (
    <div>
      <NavList>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Collection</NavLink>
        </li>
      </NavList>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
