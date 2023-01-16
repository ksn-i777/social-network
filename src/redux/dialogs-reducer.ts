import {v1} from 'uuid'

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export type UserType = {
    id:string
    name:string
    ava:string
}
export type MessageType = {
    id:string
    message:string
}
export type DialogsPageType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
}

export type AddNewMessageActionType = {
    type:typeof ADD_NEW_MESSAGE,
    newMessage:string
}
export type MessagesActionsType = AddNewMessageActionType

const initialState:DialogsPageType = {
    usersData: [
        {id: v1(), name: 'Serg Sergeev', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Eva Ivanova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Leon Leonov', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Kira Kirova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Lera Lerova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
    ],
    messagesData: [
        {id: v1(), message: '111'},
        {id: v1(), message: '222'},
        {id: v1(), message: '333'},
        {id: v1(), message: '444'},
        {id: v1(), message: '555'},
    ],
};

export function dialogsReducer(state:DialogsPageType = initialState, action:MessagesActionsType):DialogsPageType {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {...state, messagesData: [{id: v1(), message: action.newMessage}, ...state.messagesData]}
        default:
            return state
    }
}

export function actionAddNewMessage(newMessage:string):AddNewMessageActionType {
    return {type: ADD_NEW_MESSAGE, newMessage}
}