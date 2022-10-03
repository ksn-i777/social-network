import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsData = {
    state: any;
}

function App(props: AppPropsData) {
    return (
        <BrowserRouter>
            <div className="body">
                <div className="app-wrapper">
                    <Header/>
                    <Nav state={props.state.sidebar} />
                    <div className="content">
                        <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}></Route>
                        <Route path="/messages" render={() => <Messages state={props.state.messagesPage}/>}></Route>
                        <Route path="/news" component={News}></Route>
                        <Route path="/music" component={Music}></Route>
                        <Route path="/settings" component={Settings}></Route>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
