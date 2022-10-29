import {createStore, combineReducers} from "redux";
import {profileReducer, ProfilePageType} from './profile-reducer';
import {messagesReducer, MessagesPageType} from './messages-reducer';
import {navbarReducer, NavbarType} from './navbar-reducer';
import {friendsReducer, FriendsPageType} from './friends-reducer';

export type StateType = {
    profilePage: ProfilePageType,
    friendsPage: FriendsPageType,
    messagesPage: MessagesPageType,
    navbar: NavbarType,
};

let reducers = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
})

export let store = createStore(reducers);