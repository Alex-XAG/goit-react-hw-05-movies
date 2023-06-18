import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
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

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MoviesForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid gold;
  padding: 30px;
  width: 100%;
`;

export const MoviesInput = styled.input`
  border: 2px solid gold;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  width: 400px;
`;

export const MoviesButton = styled.button`
  border: 2px solid gold;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  background-color: #fff;

  :hover {
    background-color: beige;
    border: 2px solid black;
  }
`;

export const MoviesLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding: 10px 30px;

  :hover {
    background-color: beige;
  }
`;
