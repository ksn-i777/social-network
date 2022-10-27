import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {App} from './App';
import {StateType} from './redux/store'
import {store} from './redux/redux-store'

// функция первоначального рендера дерева и ререндера его при изменении стэйта
export let rerenderApp = (state: StateType) => {
    ReactDOM.render(
        // компонента, обеспечивающая изменения контента при кликах по навигационному меню
        <BrowserRouter>
            <App 
                state={state}
                // байндим диспатч к стору, чтобы контекст зис внутри логики ссылался на стор
                dispatch={store.dispatch.bind(store)}/>
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