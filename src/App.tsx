import React from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {BookList} from "./ui/BookList/BookList";
import {CreateBook} from "./ui/CreateBook/CreateBook";
import {EditBook} from "./ui/EditBook/EditBook";
import {Navigation} from "./ui/Navigation/Navigation";

export const App = () => {
    return (
        <div className={s.App}>
            <header className={s.App_header}>
                <Navigation/>
            </header>
            <main>
                <Route exact path="/" render={() => <BookList/>}/>
                <Route path="/create" render={() => <CreateBook/>}/>
                <Route path="/edit/" render={() => <EditBook/>}/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
