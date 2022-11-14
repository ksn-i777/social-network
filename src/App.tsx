import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Nav} from "./components/Nav/Nav";
import {Content} from "./components/Content/Content";

export function App() {
    return (
        <div className="body">
            <div className="app-wrapper">
                <Header/>
                <div className={'nav-content'}>
                    <Nav/>
                    <Content/>
                </div>
            </div>
        </div>

    );
}