import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store'
import {EmptyObject} from 'redux';

// функция первоначального рендера дерева и ререндера его при изменении стэйта
export let rerenderApp = (state: EmptyObject) => {
    ReactDOM.render(
        // компонента, обеспечивающая изменения контента при кликах по навигационному меню
        <BrowserRouter>
            <App store={store}/>
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