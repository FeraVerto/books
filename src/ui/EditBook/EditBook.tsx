import React, {Dispatch, useEffect, useState} from 'react';
import {StateType} from "../../App";
import {useParams} from "react-router-dom";
import {useFormik} from "formik";

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
        dispatch({type: 'DELETE_BOOK', payload: id})
    }

    const formik = useFormik({
        initialValues: {
            bookTitle: '',
            author: ''
        },
        onSubmit: values => {
            setLocalStateUpdate(JSON.stringify(values))
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
                                        <label htmlFor="title">{book.book.bookTitle}</label>
                                        <input id="title"
                                               name="bookTitle"
                                               type="text"
                                               onChange={formik.handleChange}
                                               value={formik.values.bookTitle}/>

                                        <label htmlFor="author">{book.book.author}</label>
                                        <input id="author"
                                               name="author"
                                               type="text"
                                               onChange={formik.handleChange}
                                               value={formik.values.author}/>

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