import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList, CastTitle } from './Cast.styled';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

export const Cast = () => {
  const [casts, setCasts] = useState([]);

  const { moviesId } = useParams();
  useEffect(() => {
    const getCast = async () =>
      await fetch(`${BASE_URL}${moviesId}/credits?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(castData => {
          setCasts(castData.cast);
        })
        .catch(err => console.error(err));
    getCast();
  }, [moviesId]);
  return (
    <CastList>
      {casts.map(cast => {
        const { id, profile_path, name, character } = cast;
        return (
          <CastItem key={id}>
            <img src={`${IMG_BASE_URL}${profile_path}`} alt={name} />
            <CastTitle>{name}</CastTitle>
            <CastTitle>Character: {character}</CastTitle>
          </CastItem>
        );
      })}
    </CastList>
  );
};
