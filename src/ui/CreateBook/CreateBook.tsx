import React, {Dispatch, useEffect, useState} from 'react'
import {useFormik} from "formik";
import {v4 as uuidv4} from 'uuid';
import {FormField} from "../FormField/FormField";
import {BookType} from "../BookList/BookList";
import {getBase64} from "../common/getBase64";
import s from "./CreateBook.module.css"
import {Button} from "../common/Button/Button";
import {Redirect} from "react-router-dom";


export type CreateBookType = {
    editMode: boolean
    setEditMode: (editMode: boolean) => void
}

export const CreateBook = () => {

    const [createBook, setCreateBook] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)

    const formik = useFormik<BookType>({
        initialValues: {
            title: '',
            author: '',
            cover: {}
        },
        onSubmit: async (values: BookType) => {
            console.log("values", values)
            await getBase64(values.cover).then(base64 => {
                values = {...values, cover: base64}
                setCreateBook(JSON.stringify(values))
            });
            setEditMode(true)
        },
        validate: (values: BookType) => {
            const errors = {} as BookType
            if (!values.title) {
                errors.title = 'Required'
            }

            if (!values.author) {
                errors.author = 'Required'
            }

            if (!values.cover) {
                errors.cover = 'Required'
            }
            return errors
        },
    })

    useEffect(() => {
        const id = uuidv4();
        createBook && localStorage.setItem(id, createBook)
    }, [createBook])

    if (editMode) return <Redirect to='/'/>

    return (
        <div className={s.create_position}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <h2>Add a new book</h2>
                <FormField formik={formik}
                           title={"Book  title"}
                           author={"Author name"}/>
                <Button className={s.button_position} type={"submit"} text={"Create"}/>
            </form>
        </div>
    )
}