import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {BookList} from "./ui/BookList/BookList";
import {CreateBook} from "./ui/CreateBook/CreateBook";
import {EditBook} from "./ui/EditBook/EditBook";

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <main>
                <Route path="/" render={() => <BookList/>}/>
                <Route path="/create" render={() => <CreateBook/>}/>
                <Route path="/edit/" render={() => <EditBook/>}/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
