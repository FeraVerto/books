import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import {StateType} from "../../App";

export type BookType = {
    title: string,
    author: string,
    cover: any
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

    return (
        <ul>

            {
                state.books.map((book: BookRecord) => {
                    return (
                        <NavLink key={book.id} to={`/edit/${book.id}`}>
                            <li>
                                <span>{book.book.title}</span>
                                <span>{book.book.author}</span>
                                <img width={170} height={200} src={book.book.cover} />
                            </li>
                        </NavLink>
                    )
                })
            }

        </ul>
    )
}