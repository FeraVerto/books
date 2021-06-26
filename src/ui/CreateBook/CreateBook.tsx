import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import {FormField} from "../FormField/FormField";
import {BookType} from "../BookList/BookList";
import {getBase64} from "../common/getBase64";
import s from "./CreateBook.module.css"
import {Button} from "../common/Button/Button";


export const CreateBook = () => {

    const [createBook, setCreateBook] = useState<string>("")

    const formik = useFormik<BookType>({
        initialValues: {
            title: '',
            author: '',
            cover: {}
        },
        //почитать про промисы в onSubmit
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
        <div className={s.create_position}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <h2>Add a new book</h2>
                <FormField formik={formik}
                           title={"Название книги"}
                           author={"Имя автора"}/>
                <Button type={"submit"} text={"Создать"}/>
            </form>
        </div>
    )
}