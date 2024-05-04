import React, { Dispatch, useEffect, useState } from 'react';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input/Input';
import s from './Search.module.css';
import { useFormik } from 'formik';
import { getBooks } from '../common/utils/getBooks';
import { BookRecord } from '../BookList/BookList';
import { ActionType } from '../../../store';

type SearchType = {
  dispatch: Dispatch<ActionType>;
};

export const Search = ({ dispatch }: SearchType) => {
  const [receivedBooks, setReceivedBooks] = useState<Array<BookRecord>>([]);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      dispatch({ type: 'SET_BOOKS_LIST', payload: receivedBooks });
      dispatch({ type: 'SEARCH_FILTER', payload: { filter: values.search } });
    },
  });

  useEffect(() => {
    const result = getBooks();
    if (result) {
      setReceivedBooks(result);
    }
  }, []);

  return (
    <form onSubmit={formik.handleSubmit} className={s.search}>
      <Input
        id={'search'}
        name={'search'}
        onChange={formik.handleChange}
        value={formik.values.search}
        type="search"
      />
      <Button text={'Search'} type={'submit'} />
    </form>
  );
};
