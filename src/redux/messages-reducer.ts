import {v1} from 'uuid';

const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export type UserType = {
    id:string,
    name:string,
    ava:string,
};
export type TextType = {
    id:string,
    message:string,
};
export type MessagesPageType = {
    usersData:Array<UserType>,
    textsData:Array<TextType>,
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

const initialState:MessagesPageType = {
    usersData: [
        {id: v1(), name: 'Serg Sergeev', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Eva Ivanova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Leon Leonov', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Kira Kirova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
        {id: v1(), name: 'Lera Lerova', ava: 'https://fydi.ru/wp-content/uploads/2021/06/na-avy-parni-60.jpg'},
    ],
    textsData: [
        {id: v1(), message: '111'},
        {id: v1(), message: '222'},
        {id: v1(), message: '333'},
        {id: v1(), message: '444'},
        {id: v1(), message: '555'},
    ],
    newMessageText: '',
};

export function messagesReducer(state:MessagesPageType = initialState, action:MessagesActionsType):MessagesPageType {

    const copyState:MessagesPageType = {...state}

    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            copyState.newMessageText = action.newText
            return copyState
        case ADD_NEW_MESSAGE:
            const newMessage:TextType = {
                id: v1(),
                message: copyState.newMessageText,
            }
            copyState.textsData = [newMessage, ...state.textsData]
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