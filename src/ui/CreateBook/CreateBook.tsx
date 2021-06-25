import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import {FormField} from "../FormField/FormField";
import {BookType} from "../BookList/BookList";
import {getBase64} from "../getBase64";

export const CreateBook = () => {

    const [createBook, setCreateBook] = useState<string>("")

    const formik = useFormik<BookType>({
        initialValues: {
            title: '',
            author: '',
            cover: {}
        },
        onSubmit: values => {
            getBase64(values.cover).then(base64 => {
                values = {...values, cover: base64}
                setCreateBook(JSON.stringify(values))
            });
        }
    })

    useEffect(() => {
        const id = uuidv4();
        createBook && localStorage.setItem(id, createBook)
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormField formik={formik}
                       title={"Название книги"}
                       author={"Имя автора"}/>
            <button type="submit">Создать</button>
        </form>
    )
}