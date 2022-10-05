import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'

export let rerenderApp = (state: any) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} changeWord={store.changeWord.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderApp(store.getState());
store.subscribe(rerenderApp);