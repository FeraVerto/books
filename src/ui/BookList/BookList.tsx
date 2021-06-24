import React, {Dispatch, useEffect, useState} from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom';
import {StateType} from "../../App";

export type BookType = {
    bookTitle: string,
    author: string
}

export type BookRecord = {
    id: string,
    book: BookType
}

export type BooksListType = {
    state: StateType
    dispatch: any

}

export const BookList = ({state, dispatch}: BooksListType) => {


    useEffect(() => {
        const resultArray: Array<BookRecord> = []
        const keys: Array<string> = Object.keys(localStorage);
        for (const key of keys) {
            const book = localStorage.getItem(key)
            if (book !== null) resultArray.push({id: key, book: JSON.parse(book)})
        }

        dispatch({type: 'SET_BOOKS_LIST', payload: resultArray})

    }, [])

    const onDoubleClickTheBook = (id: string) => {
        dispatch({type: 'GET_BOOK', payload: id})
    }

    return (
        <ul>

            {
                state.books.map((book: BookRecord) => {
                    return (
                        <NavLink key={book.id} to={`/edit/${book.id}`}>
                            <li onDoubleClick={() => onDoubleClickTheBook(book.id)}>
                                <span>{book.book.bookTitle}</span>
                                <span>{book.book.author}</span>
                            </li>
                        </NavLink>
                    )
                })
            }

        </ul>
    )
}