import {stopSubmit} from 'redux-form';
import {authAPI} from '../api/api';
import {AppDispatchType} from './store';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = {
    type: typeof SET_AUTH_USER_DATA
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState:AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export function authReducer(state:AuthType = initialState, action:AuthActionType):AuthType {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth}
        default:
            return state
    }
}
export function setAuthUserDataAC(id:number|null, email:string|null, login:string|null, isAuth:boolean):AuthActionType {
    return {type: SET_AUTH_USER_DATA, id, email, login, isAuth}
}

export const getAuthUserTC = () => (dispatch: AppDispatchType) => {
    return authAPI.getAuthUser()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data.id, data.data.email, data.data.login, true))
            }
        })
}
export const loginUserTC = (email:string, password:string, rememberMe:boolean) => (dispatch: AppDispatchType) => {
    return authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserTC())
            } else {
                dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'some error'}))
            }
        })
}
export const logoutUserTC = () => (dispatch: AppDispatchType) => {
    return authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}