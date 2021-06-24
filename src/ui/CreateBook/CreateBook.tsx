import React from 'react'
import {useFormik} from "formik";
import { v4 as uuidv4 } from 'uuid';

export const CreateBook = () => {

    const formik = useFormik({
        initialValues: {
            bookTitle: '',
            author: ''
        },
        onSubmit: values => {
            const id = uuidv4();
            localStorage.setItem(id, JSON.stringify(values))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="bookTitle">Название книги</label>
            <input id="bookTitle"
                   name="bookTitle"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.bookTitle}/>

            <label htmlFor="author">Автор книги</label>
            <input id="author"
                   name="author"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.author}/>

            <button type="submit">Создать</button>
        </form>
    )
}