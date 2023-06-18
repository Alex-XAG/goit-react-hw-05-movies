import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
`;

export const DetailsSection = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;

  border-bottom: 2px solid gold;
`;

export const DetailsArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 700px;
  justify-content: center;

  gap: 20px;
`;

export const DetailsTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const DetailsSubTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const DetailsText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`;

export const DetailsList = styled.ul`
  display: flex;

  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const DetailsLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding: 10px 30px;
  font-style: 25px;
  font-weight: 700;

  :hover {
    background-color: beige;
  }
`;
