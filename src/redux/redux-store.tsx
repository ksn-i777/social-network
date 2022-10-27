import {createStore, combineReducers} from "redux";
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {navbarReducer} from './navbar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
})

export let store = createStore(reducers);