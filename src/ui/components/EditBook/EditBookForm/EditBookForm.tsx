import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { BookType } from '../../BookList/BookList';
import { getBase64 } from '../../common/utils/getBase64';
import { FormField } from '../../FormField/FormField';
import { Button } from '../../common/Button/Button';
import s from './EditFormBook.module.css';
import { ActionType } from '../../../../store';

export type CreateBookFormType = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  cover: string;
  id: string;
  title: string;
  author: string;
  idParam: string;
  dispatch: Dispatch<ActionType>;
  setError: (error: string) => void;
};

export const EditBookForm = ({
  title,
  author,
  id,
  setError,
  setEditMode,
  cover,
}: CreateBookFormType) => {
  const [localStateUpdate, setLocalStateUpdate] = useState<string | null>('');
  const [localStateDelete, setLocalStateDelete] = useState<string>('');

  const deleteBook = useCallback(
    (id: string) => {
      setLocalStateDelete(id);
    },
    [setLocalStateDelete]
  );

  useEffect(() => {
    if (localStateUpdate) {
      try {
        localStateUpdate && localStorage.setItem(id, localStateUpdate);
        setEditMode(true);
        setError('');
      } catch (e: any) {
        if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
          setError('Local Storage is full, please clear some space.');
        }
      }
    }

    if (localStateDelete !== '') {
      localStorage.removeItem(localStateDelete);
    }
  }, [id, localStateUpdate, setEditMode, setError, localStateDelete]);

  const formik = useFormik<BookType>({
    initialValues: {
      title: title,
      author: author,
      cover: cover,
    },

    onSubmit: async (values) => {
      if (
        typeof values.cover === 'string' &&
        values.cover.startsWith('data:image')
      ) {
        values = { ...values, cover: values.cover };
      } else {
        await getBase64(values.cover).then((base64) => {
          values = { ...values, cover: base64 };
        });
      }
      setLocalStateUpdate(JSON.stringify(values));
    },

    validate: (values: BookType) => {
      const errors = {} as BookType;
      if (!values.title) {
        errors.title = 'Required';
      }

      if (!values.author) {
        errors.author = 'Required';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} key={id}>
      <FormField
        formik={formik}
        title={'Book title'}
        author={'Author name'}
        cover={cover}
      />

      <div className={s.button_block}>
        <Button type={'submit'} className={s.button_position} text={'Save'} />
        <Button
          type={'submit'}
          className={s.button_position}
          text={'Delete'}
          onClick={() => {
            deleteBook(id);
          }}
        />
      </div>
    </form>
  );
};
