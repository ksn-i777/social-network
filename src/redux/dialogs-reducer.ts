import {v1} from 'uuid';

const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export type UserType = {
    id:string,
    name:string,
    ava:string,
};
export type MessageType = {
    id:string,
    message:string,
};
export type DialogsPageType = {
    usersData:Array<UserType>,
    messagesData:Array<MessageType>,
    newMessageText:string,
};

export type NewMessageActionType = {
    type:typeof NEW_MESSAGE_TEXT ,
    newText:string,
};
export type AddNewMessageActionType = {
    type:typeof ADD_NEW_MESSAGE,
};
export type MessagesActionsType = NewMessageActionType | AddNewMessageActionType;

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
    newMessageText: '',
};

export function dialogsReducer(state:DialogsPageType = initialState, action:MessagesActionsType):DialogsPageType {

    const copyState:DialogsPageType = {...state}

    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            copyState.newMessageText = action.newText
            return copyState
        case ADD_NEW_MESSAGE:
            const newMessage:MessageType = {
                id: v1(),
                message: copyState.newMessageText,
            }
            copyState.messagesData = [newMessage, ...state.messagesData]
            copyState.newMessageText = ''
            return copyState
        default:
            return state
    }
}
export function actionNewMessageText(text:string):NewMessageActionType {
    return {
        type: NEW_MESSAGE_TEXT,
        newText: text,
    }
}
export function actionAddNewMessage():AddNewMessageActionType {
    return {
        type: ADD_NEW_MESSAGE,
    }
}