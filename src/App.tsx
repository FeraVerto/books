import React, {useEffect, useReducer, useState} from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {BookList, BookRecord} from "./ui/BookList/BookList";
import {CreateBook} from "./ui/CreateBook/CreateBook";
import {Navigation} from "./ui/Navigation/Navigation";
import {EditBook2} from "./ui/EditBook/EditBook2";
import {EditBook} from "./ui/EditBook/EditBook";
import {getBooks} from "./ui/common/getBooks";


export type ActionType = {
    type: string,
    payload: any
}

const initialState = {
    books: []
}

export type StateType = {
    books: Array<BookRecord>
}

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_BOOKS_LIST':
            return {
                ...state, books: [...action.payload]
            }

        case 'SEARCH_FILTER':
            return {
                ...state,
                books: state.books.filter(b => b.book.title.toLowerCase().includes(action.payload.filter.toLowerCase()) || b.book.author.toLowerCase().includes(action.payload.filter.toLowerCase()))
            }

        case 'EDIT_BOOK':
        return {
            ...state,
            books: state.books.filter(b => b.id === action.payload)
        }

        default:
            return state
    }
}

export const App = () => {

    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'SET_BOOKS_LIST', payload: getBooks()})
    }, [])

    return (
        <div className={s.App}>
            <header className={s.App_header}>
                <Navigation/>
            </header>
            <main className={s.main}>


                <Route exact path="/" render={() => <BookList state={state}
                                                              dispatch={dispatch}/>}/>

                <Route path="/create" render={() => <CreateBook/>}/>


                <Route path="/edit/:id" render={() => <EditBook2 state={state}
                                                                dispatch={dispatch}/>}/>

            </main>
        </div>
    );
}

export default App;
