import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  list-style: none;
  width: 1200px;
  margin: 0;
  padding: 0 20px;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ReviewsTitle = styled.h3`
  padding: 0;
  margin: 0;

  font-size: 20px;
  font-weight: 700;
`;

export const ReviewsNotAnswer = styled.h3`
  padding: 0;
  margin: 0 auto;

  font-size: 20px;
  font-weight: 700;
`;

export const ReviewsContent = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;
