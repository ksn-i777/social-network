import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from "./components/Nav/Nav";
import {Content} from "./components/Content/Content";
import {StateType} from "./redux/store";

type AppPropsType = {
    state: StateType,
    dispatch: (action: any) => void,
};

export function App(props: AppPropsType) {
    return (
        <div className="body">
            <div className="app-wrapper">
                <Header/>
                <Nav navbar={props.state.navbar} />
                <Content state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>

    );
};