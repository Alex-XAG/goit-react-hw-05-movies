import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
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
