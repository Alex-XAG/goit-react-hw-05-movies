import styled from '@emotion/styled';

export const CastList = styled.ul`
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

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 20px;
`;

export const CastTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;
