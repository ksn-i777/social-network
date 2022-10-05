import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {addPost, changeWord, subscribe} from './redux/state';

export let rerenderApp = (state: any) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeWord={changeWord}/>,
        document.getElementById('root')
    );
}
rerenderApp(state);
subscribe(rerenderApp);