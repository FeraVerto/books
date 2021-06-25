import React, {Dispatch, useEffect, useState} from 'react';
import {StateType} from "../../App";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";
import {FormField} from "../FormField/FormField";
import {BookType} from "../BookList/BookList";
import {getBase64} from "../getBase64";

export type EditBookType = {
    state: StateType
    dispatch: Dispatch<any>
}


export const EditBook = ({state, dispatch}: EditBookType) => {
    const {id} = useParams<{ id: string }>()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStateUpdate, setLocalStateUpdate] = useState<string | null>("")
    const [localStateDelete, setLocalStateDelete] = useState<string>("")

    const deleteBook = (id: string) => {
        setLocalStateDelete(id)
    }

    const formik = useFormik<BookType>({
        initialValues: {
            title: '',
            author: '',
            cover: {}
        },
        onSubmit: values => {
            getBase64(values.cover).then(base64 => {
                values = {...values, cover: base64}
                setLocalStateUpdate(JSON.stringify(values))
            });
        }
    })

    useEffect(() => {
        localStateUpdate && localStorage.setItem(id, localStateUpdate)
        localStateDelete && localStorage.removeItem(localStateDelete)
    })

    return (
        <div>
            {
                !editMode && <div>
                    {
                        state.books.map(book => {
                            return book.id === id &&
                                (
                                    <form onSubmit={formik.handleSubmit} key={book.id}>
                                        <FormField formik={formik}
                                                   title={book.book.title}
                                                   author={book.book.author}/>

                                        <button type="submit" onClick={() => deleteBook(book.id)}>Delete</button>
                                        <button type="submit">Save</button>
                                    </form>
                                )
                        })
                    }
                </div>
            }

        </div>
    )
}