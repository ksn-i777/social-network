import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from "./components/Nav/Nav";
import {Content} from "./components/Content/Content";

type AppPropsType = {
    store: any,
};

export function App(props: AppPropsType) {
    return (
        <div className="body">
            <div className="app-wrapper">
                <Header/>
                <Nav navbar={props.store.getState().navbar}/>
                <Content store={props.store}/>
            </div>
        </div>

    );
}