import React, {useReducer, useState} from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {BookList, BookRecord} from "./ui/BookList/BookList";
import {CreateBook} from "./ui/CreateBook/CreateBook";
import {EditBook} from "./ui/EditBook/EditBook";
import {Navigation} from "./ui/Navigation/Navigation";
import {Input} from "./ui/Input/Input";
import {Search} from "./ui/Search/Search";

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
            console.log("state", state)
            return {
                ...state,
                books: state.books.filter(b => b.book.title.toLowerCase().includes(action.payload.filter.toLowerCase()) || b.book.author.toLowerCase().includes(action.payload.filter.toLowerCase()))
            }

        default:
            return state
    }
}
/*
const SearchBooks = () => async() => {
    await
}*/


export const App = () => {

    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);
    const [editMode, setEditMode] = useState<boolean>(false)

    return (
        <div className={s.App}>
            <header className={s.App_header}>
                <Navigation/>
            </header>
            <main className={s.main}>
                <div className={s.create_position}>
                    <h1>List of Books</h1>

                    <Route exact path="/" render={() => <BookList state={state}
                                                                  dispatch={dispatch}/>}/>

                    <Route path="/create" render={() => <CreateBook/>}/>


                    <Route path="/edit/:id" render={() => <EditBook state={state}
                                                                    dispatch={dispatch}
                                                                    editMode={editMode}
                                                                    setEditMode={setEditMode}

                    />}/>
                </div>
            </main>
        </div>
    );
}

export default App;
