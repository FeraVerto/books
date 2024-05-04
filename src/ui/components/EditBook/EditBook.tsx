import { Dispatch, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import s from './EditBook.module.css';
import { EditBookForm } from './EditBookForm/EditBookForm';
import { ActionType, StateType } from '../../../store';

export type EditBookType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export const EditBook = ({ state, dispatch }: EditBookType) => {
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  if (editMode) return <Navigate to="/" />;

  return (
    <div className={s.create_position}>
      <div className={s.form}>
        {error !== '' && <span className={s.error}>! {error}</span>}

        <h2>Edit book</h2>
        {state.books.map((b) => {
          return (
            b.id === id && (
              <EditBookForm
                setError={setError}
                editMode={editMode}
                setEditMode={setEditMode}
                cover={b.book.cover}
                id={b.id}
                title={b.book.title}
                author={b.book.author}
                key={b.id}
                idParam={id}
                dispatch={dispatch}
              />
            )
          );
        })}
      </div>
    </div>
  );
};
