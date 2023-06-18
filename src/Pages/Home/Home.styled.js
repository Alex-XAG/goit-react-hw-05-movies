import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const HomeTitle = styled.h1`
  margin: 20 auto;
  text-align: center;
  font-size: 40px;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding: 10px 30px;

  :hover {
    background-color: beige;
  }
`;
