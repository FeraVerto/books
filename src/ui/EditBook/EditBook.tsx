import React, {Dispatch, useState} from 'react';
import {StateType} from "../../App";
import {useParams} from "react-router-dom";

export type EditBookType = {
    state: StateType
    dispatch: Dispatch<any>
}


export const EditBook = ({state, dispatch}: EditBookType) => {
    const {id} = useParams<{ id: string }>()

    const [editMode, setEditMode] = useState<boolean>(false)

    const deleteBook = (id: string) => {
        localStorage.removeItem(id)
        dispatch({type: 'DELETE_BOOK', payload: id})
    }

    const saveBook = () => {
        console.log("Save")
        setEditMode(true)/*
        dispatch({type: 'UPDATE_BOOK', payload: {id, book: {title, author}}})*/
    }

    return (
        <div>
            {!editMode
                && <div>
                    {
                        state.books.map(book => {
                            return book.id === id &&
                                (
                                    <div key={book.id}>
                                        <label htmlFor="title">{book.book.bookTitle}</label>
                                        <input id="title" type="text"/>

                                        <label htmlFor="author">{book.book.author}</label>
                                        <input id="author" type="text"/>

                                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                                        <button onClick={() => saveBook()}>Save</button>
                                    </div>
                                )
                        })

                        /*state.books.filter(b => b.id === id ? <li key={b.id}>
                            <span>{b.book.bookTitle}</span>
                            <span>{b.book.author}</span>
                            <button onClick={() => deleteBook(b.id)}>Delete</button>
                            <button onClick={() => editBook()}>Edit</button>
                        </li> : null)*/
                    }
                </div> }

        </div>
    )
}