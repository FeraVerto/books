import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { BookList, BookRecord } from './ui/components/BookList/BookList';
import { CreateBook } from './ui/components/CreateBook/CreateBook';
import { Navigation } from './ui/components/Navigation/Navigation';
import { EditBook } from './ui/components/EditBook/EditBook';
import { getBooks } from './ui/components/common/utils/getBooks';

export type ActionType = {
  type: string;
  payload: any;
};

const initialState = {
  books: [],
};

export type StateType = {
  books: Array<BookRecord>;
};

const reducer = (
  state: StateType = initialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'SET_BOOKS_LIST':
      return {
        ...state,
        books: [...action.payload],
      };

    case 'SEARCH_FILTER':
      return {
        ...state,
        books: state.books.filter(
          (b) =>
            b.book.title
              .toLowerCase()
              .includes(action.payload.filter.toLowerCase()) ||
            b.book.author
              .toLowerCase()
              .includes(action.payload.filter.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: 'SET_BOOKS_LIST', payload: getBooks() });
  }, []);

  return (
    <div className={s.app}>
      <header className={s.app_header}>
        <Navigation />
      </header>
      <main className={s.main}>
        <Routes>
          <Route
            path="/"
            element={<BookList state={state} dispatch={dispatch} />}
          />

          <Route path="/create" element={<CreateBook />} />

          <Route
            path="/edit/:id"
            element={<EditBook state={state} dispatch={dispatch} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
