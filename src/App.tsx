import React, {useReducer} from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {BookList, BookRecord} from "./ui/BookList/BookList";
import {CreateBook} from "./ui/CreateBook/CreateBook";
import {EditBook} from "./ui/EditBook/EditBook";
import {Navigation} from "./ui/Navigation/Navigation";

type ActionType = {
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

        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(s => s.id !== action.payload)
            }

        case 'UPDATE_BOOK':
            return {
                ...state
            }

        default:
            return state
    }
}


export const App = () => {

    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);

    return (
        <div className={s.App}>
            <header className={s.App_header}>
                <Navigation/>
            </header>
            <main>
                <Route exact path="/" render={() => <BookList state={state}
                                                              dispatch={dispatch}/>}/>
                <Route path="/create" render={() => <CreateBook/>}/>

                <Route path="/edit/:id" render={() => <EditBook state={state}
                                                                dispatch={dispatch}/>}/>
            </main>
        </div>
    );
}

export default App;
