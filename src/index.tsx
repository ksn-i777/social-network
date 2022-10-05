import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'

export let rerenderApp = (param: any) => {
    ReactDOM.render(
        <App state={param} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderApp(store.getState());
store.subscribe(rerenderApp);