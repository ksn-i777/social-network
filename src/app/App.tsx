import React from 'react'
import './App.css'
import {Nav} from "../components/Common/Nav/Nav"
import {Content} from "../components/Content/Content"
import {HeaderContainer} from '../components/Common/Header/HeaderContainer'

export function App() {
    return (
        <div className="body">
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <Content/>
            </div>
        </div>
    )
}