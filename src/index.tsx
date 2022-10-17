import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {App} from './App';
import {store, StateType} from './redux/store'

export let rerenderApp = (param: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={param} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter> , document.getElementById('root')
    );
}
rerenderApp(store.getState());
store.subscribe(rerenderApp);