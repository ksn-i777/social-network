import React from 'react'
import './App.css'
import {Nav} from "../components/Nav/Nav"
import {Content} from "../components/Content/Content"
import {HeaderContainer} from '../components/Header/HeaderContainer'

export function App() {
    return (
        <div className="body">
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className={'nav-content'}>
                    <Nav/>
                    <Content/>
                </div>
            </div>
        </div>

    );
}