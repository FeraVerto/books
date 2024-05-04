import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { FormField } from '../FormField/FormField';
import { BookType } from '../BookList/BookList';
import { getBase64 } from '../common/utils/getBase64';
import s from './CreateBook.module.css';
import { Button } from '../common/Button/Button';
import { Navigate } from 'react-router-dom';

export type CreateBookType = {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
};

export const CreateBook = () => {
  const [createBook, setCreateBook] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const id = uuidv4();
    if (createBook) {
      try {
        createBook && localStorage.setItem(id, createBook);
        setEditMode(true);
        setError('');
      } catch (e: any) {
        if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
          setError('Local Storage is full, please clear some space.');
        }
      }
    }
  }, [createBook]);

  const formik = useFormik<BookType>({
    initialValues: {
      title: '',
      author: '',
      cover: {},
    },

    onSubmit: async (values: BookType, { setSubmitting }) => {
      await getBase64(values.cover).then((base64) => {
        values = { ...values, cover: base64 };
      });
      setCreateBook(JSON.stringify(values));
    },

    validate: (values: BookType) => {
      const errors = {} as BookType;
      if (!values.title) {
        errors.title = 'Required';
      }

      if (!values.author) {
        errors.author = 'Required';
      }

      if (!values.cover.name) {
        errors.cover = 'Required';
      }
      return errors;
    },
  });

  if (editMode) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.create_position}>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        {error !== '' && <span className={s.error}>! {error}</span>}
        <h2>Add a new book</h2>
        <FormField
          formik={formik}
          title={'Book  title'}
          author={'Author name'}
        />
        <Button className={s.button_position} type={'submit'} text={'Create'} />
      </form>
    </div>
  );
};
