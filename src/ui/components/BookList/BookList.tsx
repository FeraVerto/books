import React, { Dispatch, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './BookList.module.css';
import { Search } from '../Search/Search';
import { getBooks } from '../common/utils/getBooks';
import { ActionType, StateType } from '../../../store';

export type BookType = {
  title: string;
  author: string;
  cover: any;
};

export type BookRecord = {
  id: string;
  book: BookType;
};

export type BooksListType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export const BookList = ({ state, dispatch }: BooksListType) => {
  useEffect(() => {
    dispatch({ type: 'SET_BOOKS_LIST', payload: getBooks() });
  }, [dispatch]);

  return (
    <>
      <h1>List of Books</h1>
      <Search dispatch={dispatch} />
      <ul className={s.book_list}>
        {state.books.map((book: BookRecord) => {
          return (
            <NavLink
              className={s.book_item_link}
              key={book.id}
              to={`/edit/${book.id}`}
            >
              <li className={s.book_item}>
                <span>
                  Author: {book.book.author ? book.book.author : 'unknown'}
                </span>
                <span>{book.book.title}</span>
                <div className={s.book_item_image}>
                  <img alt={book.book.title} src={book.book.cover} />
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};
