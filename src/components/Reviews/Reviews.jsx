import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsContent,
  ReviewsItem,
  ReviewsList,
  ReviewsNotAnswer,
  ReviewsTitle,
} from './Reviews.styled';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=fcd230550d5bc22e169a178a7e9d550c';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { moviesId } = useParams();
  useEffect(() => {
    const getReviews = async () =>
      await fetch(`${BASE_URL}${moviesId}/reviews?${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(reviewsData => {
          setReviews(reviewsData.results);
        })
        .catch(err => console.error(err));
    getReviews();
  }, [moviesId]);

  if (!reviews.length) {
    return (
      <ReviewsNotAnswer>There is no reviews about this movie</ReviewsNotAnswer>
    );
  }

  return (
    <ReviewsList>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <ReviewsItem key={id}>
            <ReviewsTitle>{author}</ReviewsTitle>
            <ReviewsContent>{content}</ReviewsContent>
          </ReviewsItem>
        );
      })}
    </ReviewsList>
  );
};
