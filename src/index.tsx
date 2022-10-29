import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store, StateType} from './redux/redux-store'
import {Provider} from 'react-redux';

// функция первоначального рендера дерева и ререндера его при изменении стэйта
export let rerenderApp = (state: StateType) => {
    ReactDOM.render(
        // компонента, обеспечивающая изменения контента при кликах по навигационному меню
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter> , document.getElementById('root')
    );
}
// вызов функции рендера/ререндера с передачей ей стэйта
rerenderApp(store.getState());
// запускает ререндер дерева из файла сторе, отдали функцию ререндера в тот мир
store.subscribe(() => {
    let state = store.getState()
    rerenderApp(state)
});