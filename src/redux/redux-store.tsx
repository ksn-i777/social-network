import {createStore, combineReducers} from "redux";
import {profileReducer, ProfilePageType} from './profile-reducer';
import {messagesReducer, MessagesPageType} from './messages-reducer';
import {navbarReducer, NavbarType} from './navbar-reducer';

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    navbar: NavbarType,
};

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
})

export let store = createStore(reducers);