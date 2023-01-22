import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {navbarReducer} from './navbar-reducer'
import {friendsReducer} from './friends-reducer'
import {authReducer} from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app-reducer'

const RootReducer = combineReducers({
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export const store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof RootReducer>

export type AppDispatchType = typeof store.dispatch