import React from 'react';

import BookPage from '../../../components/BookPage';

import { useAppSelector } from '../../../../../store';

import StyledRecommendation from './Recommendation.style';

const Recommendation: React.FC = () => {
  const books = useAppSelector(({ rootSlice }) => rootSlice.bookSlice.books);

  const recommendation = books.slice(10, 14);
  return (
    <StyledRecommendation>
      {recommendation.map((item) => <BookPage key={item.bookId} book={item} />)}
    </StyledRecommendation>
  );
};

export default Recommendation;