import React from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

import Filters from '../Filtres';
import BooksList from '../BooksList';
import Pagination from '../Pagination/Pagination';

import { useAppDispatch } from '../../../../../store';
import errorHandler from '../../../../../utils/errorHandler';
import bookThunks from '../../../../../store/thunks/bookThunks';

import StyledCatalog from './Catalog.style';
import { bookApi } from '../../../../../api';
import { bookSliceActions } from '../../../../../store/slices/bookSlice';

type PayloadType = {
  totalBooks: number;
  numberOfPage: number;
};

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countState, setCountState] = React.useState<number>(1);

  const dispatch = useAppDispatch();
  React.useLayoutEffect(() => {
    try {
      (async () => {
        const params: Record<string, string> = {};
        const response = await bookApi.filtered(params);
        dispatch(bookSliceActions.setBooksState(response.books));
        setCountState(response.totalBooks);
        // eslint-disable-next-line no-console
        console.log(response);
      })();
    } catch (error) {
      if (error instanceof AxiosError) {
        errorHandler(error);
        return;
      }
      console.error(error);
    }
  }, [dispatch]);

  return (
    <StyledCatalog>
      <div className="title-filters__block">
        <h2 className="catalog__title">Catalog</h2>
        <Filters />
      </div>
      <BooksList />
      <Pagination countBooks={countState} />
    </StyledCatalog>
  );
};

export default Catalog;
