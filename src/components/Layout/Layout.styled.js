import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LayoutList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 20px;
  width: 1200px;
  border-bottom: 2px solid gold;
`;

export const LayoutLink = styled(NavLink)`
  width: 1200px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  padding: 15px;
  color: black;
  border-radius: 10px;

  :hover {
    background-color: beige;
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 0;
  padding-bottom: 40px;
  border-bottom: 2px solid gold;
`;
