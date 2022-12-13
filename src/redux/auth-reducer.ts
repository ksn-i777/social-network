const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = {
    type: typeof SET_AUTH_USER_DATA
    id: number
    email: string
    login: string
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
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: true}
        default:
            return state
    }
}
export function setAuthUserData(id: number, email: string, login: string):AuthActionType {
    return {type: SET_AUTH_USER_DATA, id, email, login}
}