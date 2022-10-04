import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, changeWord} from "./redux/state";

export let rerenderApp = (state: any) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeWord={changeWord}/>,
        document.getElementById('root')
    );
}