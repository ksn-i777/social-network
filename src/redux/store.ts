import {createStore, combineReducers, applyMiddleware} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {navbarReducer} from './navbar-reducer';
import {friendsReducer} from './friends-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

const RootReducer = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    auth: authReducer,
});

export type RootType = ReturnType<typeof RootReducer>

export const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));