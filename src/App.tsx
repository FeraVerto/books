import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { BookList, BookRecord } from './ui/components/BookList/BookList';
import { CreateBook } from './ui/components/CreateBook/CreateBook';
import { Navigation } from './ui/components/Navigation/Navigation';
import { EditBook } from './ui/components/EditBook/EditBook';
import { getBooks } from './ui/components/common/utils/getBooks';
import { ActionType, StateType, initialState, reducer } from './store';

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
