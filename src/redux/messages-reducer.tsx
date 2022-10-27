import {MessagesPageType} from './store';

const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const NEW_MESSAGE = 'NEW-MESSAGE';

export function messagesReducer (state: MessagesPageType, action: any) {
    // вместо метода, отслеживающего изменение текста сообщения в инпуте messagesPage
    if (action.type === NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
        // вместо метода addMessage
    } else if (action.type === NEW_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.newMessageText,
        }
        state.textsData.push(newMessage);
        state.newMessageText = '';
    }
    return state;
}
// колл-бэк, запускающий метод отслеживающий изменение текста сообщения в инпуте messagesPage
export const actionNewMessageText = (text: string | undefined) => {
    return {
        type: NEW_MESSAGE_TEXT,
        newText: text,
    }
}
// колл-бэк, запускающий метод добавления сообщения
export const actionAddNewMessage = () => {
    return {
        type: NEW_MESSAGE,
    }
}