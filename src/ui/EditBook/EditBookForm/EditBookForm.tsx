import React from 'react'
import {useFormik} from "formik";
import {BookType} from "../../BookList/BookList";
import {getBase64} from "../../common/getBase64";
import {FormField} from "../../FormField/FormField";
import {Button} from "../../common/Button/Button";

export type CreateBookFormType = {
    setLocalStateUpdate: (localStateUpdate: string | null) => void
    deleteBook: (id: string) => void
    editMode: boolean
    setEditMode: (editMode: boolean) => void
    cover: string
    id: string
    title: string
    author: string
}

export const EditBookForm = ({
                                   title,
                                   author,
                                   id,
                                   setLocalStateUpdate,
                                   deleteBook,
                                   setEditMode,
                                   cover
                               }: CreateBookFormType) => {

    const formik = useFormik<BookType>({
        initialValues: {
            title: title,
            author: author,
            cover: cover
        },
        onSubmit: async (values) => {
            await getBase64(values.cover).then(base64 => {
                values = {...values, cover: base64}
                setLocalStateUpdate(JSON.stringify(values))
            })
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

    return (
        <form onSubmit={formik.handleSubmit} key={id}>
            <FormField formik={formik}
                       title={"Book Title"}
                       author={"Author"}
                       cover={cover}
            />

            <Button type={"submit"}
                    text={"Delete"}
                    onClick={() => {
                        deleteBook(id)
                    }}/>
            <Button type={"submit"}
                    text={"Save"}
            />
        </form>
    )
}